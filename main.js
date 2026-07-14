/* ==========================================
   MLC MASTER CHINA - INTERACTIVE LOGIC (main.js)
   ========================================== */

document.addEventListener('DOMContentLoaded', async () => {
    // === HELPER FUNCTIONS ===
    function extractYouTubeId(url) {
        if (!url) return null;
        url = url.trim();
        if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
            return url;
        }
        const patterns = [
            /youtu\.be\/([a-zA-Z0-9_-]{11})/i,
            /youtube\.com\/watch\?(?:.*&)?v=([a-zA-Z0-9_-]{11})/i,
            /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i,
            /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i,
            /youtube\.com\/live\/([a-zA-Z0-9_-]{11})/i,
            /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/i
        ];
        for (const pat of patterns) {
            const m = url.match(pat);
            if (m) return m[1];
        }
        return null;
    }

    // === CONFIGURATION ===
    let WHATSAPP_PHONE = "8618072304859"; // Default realistic China corporate WhatsApp number

    // === DOM ELEMENTS ===
    const modals = {
        whatsapp: document.getElementById('whatsapp-modal'),
        vsl: document.getElementById('vsl-modal'),
        pdf: document.getElementById('pdf-modal')
    };

    const forms = {
        whatsappQualifier: document.getElementById('whatsapp-qualifier-form')
    };

    // Close buttons
    const closeBtns = {
        whatsapp: document.getElementById('close-whatsapp-modal'),
        vsl: document.getElementById('close-vsl-modal'),
        pdf: document.getElementById('close-pdf-modal')
    };

    // Calculator Elements
    const calcCountry = document.getElementById('calc-country');
    const calcResults = document.getElementById('calc-results-area');
    const resFreight = document.getElementById('res-freight');
    const resAduanas = document.getElementById('res-aduanas');
    const resTotal = document.getElementById('res-total');
    const resTaxPercent = document.getElementById('res-tax-percent');
    const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');

    // PDF Loading view states
    const pdfLoadingView = document.getElementById('pdf-loading-view');
    const pdfReadyView = document.getElementById('pdf-ready-view');
    const btnActualDownload = document.getElementById('btn-actual-download');

    // Target inputs in the form
    const wsCountrySelect = document.getElementById('ws-country');
    const wsModelSelect = document.getElementById('ws-model');

    // Reels Slider Elements
    const reelPrevBtn = document.getElementById('reel-prev-btn');
    const reelNextBtn = document.getElementById('reel-next-btn');
    const reelsSliderContainer = document.getElementById('reels-slider-container');

    // === SAFETY FALLBACK FOR REVEALING BODY ===
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 4000);

    // === LOAD DYNAMIC CMS CONTENT ===
    let db = null;
    try {
        await MLCDatabase.init();
        
        // Fetch default_db.json in parallel with getLive to reduce loading time
        const [liveDB, defaultDBResponse] = await Promise.all([
            MLCDatabase.getLive().catch(() => null),
            fetch('default_db.json').catch(() => null)
        ]);

        let defaultDB = null;
        if (defaultDBResponse && defaultDBResponse.ok) {
            try {
                defaultDB = await defaultDBResponse.json();
            } catch(e) {}
        }

        if (liveDB) {
            // Deep merge to ensure all new keys/schemas (e.g. badges) are loaded
            db = deepMerge(defaultDB || {}, liveDB);
        } else {
            db = defaultDB;
            if (db) {
                try {
                    await MLCDatabase.saveLive(db);
                    await MLCDatabase.saveDraft(db);
                } catch (saveErr) {
                    console.warn("[MLC CMS] No se pudo pre-guardar la base de datos por defecto (posible desconexión de Supabase):", saveErr);
                }
            }
        }

        if (db) {
            if (db.page_settings && db.page_settings.whatsapp_phone) {
                WHATSAPP_PHONE = db.page_settings.whatsapp_phone.replace(/\D/g, ''); // strip non-digits
            }
            // Debug: expose active number for inspection
            document.body.setAttribute('data-whatsapp', WHATSAPP_PHONE);
            console.info('[MLC CMS] WhatsApp activo:', WHATSAPP_PHONE);

            // Update any anchor tags that already hardcode a WhatsApp URL
            document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]').forEach(a => {
                const url = new URL(a.href);
                url.pathname = '/' + WHATSAPP_PHONE;
                a.href = url.toString();
            });

            loadDynamicContent(db);
            
            // Reveal body smoothly once all dynamic texts and layout changes are applied
            document.body.classList.remove('loading');

            // Debug panel info update
            const debugContent = document.getElementById('mlc-debug-content');
            if (debugContent) {
                const lt = db.landing_texts || {};
                debugContent.innerHTML = `
                    <strong>Database:</strong> Loaded (IndexedDB)<br>
                    <strong>Hero YT:</strong> ${lt.hero_youtube_url || 'None'}<br>
                    <strong>VSL YT:</strong> ${lt.vsl_youtube_url || 'None'}<br>
                    <strong>Reel 1 YT:</strong> ${lt.reel1_youtube_url || 'None'}<br>
                    <strong>Reel 2 YT:</strong> ${lt.reel2_youtube_url || 'None'}<br>
                    <strong>Reel 3 YT:</strong> ${lt.reel3_youtube_url || 'None'}<br>
                    <strong>Reel 4 YT:</strong> ${lt.reel4_youtube_url || 'None'}
                `;
            }
        }
    } catch (e) {
        console.error("Error al cargar la base de datos dinámica de IndexedDB:", e);
        const errDiv = document.createElement('div');
        errDiv.style.position = 'fixed';
        errDiv.style.top = '50px';
        errDiv.style.left = '0';
        errDiv.style.width = '100%';
        errDiv.style.backgroundColor = '#fee2e2';
        errDiv.style.color = '#991b1b';
        errDiv.style.padding = '15px';
        errDiv.style.borderBottom = '3px solid #f87171';
        errDiv.style.zIndex = '999999';
        errDiv.style.fontFamily = 'monospace';
        errDiv.style.fontSize = '12px';
        errDiv.innerHTML = '<strong>[DB ERROR]</strong> ' + e.message + ' <br> <em>' + e.stack + '</em>';
        document.body.appendChild(errDiv);
    }

    function loadDynamicContent(data) {
        // 1. Textos Generales
        const lt = data.landing_texts;
        if (lt) {
            // Section 1: Barra Superior
            const topBarEl = document.querySelector('.top-bar-content p');
            if (topBarEl && lt.top_bar_text) topBarEl.textContent = lt.top_bar_text;

            // Section 2: Hero Title with Price Highlight
            const heroTitleEl = document.querySelector('.hero-title');
            if (heroTitleEl) {
                if (lt.hero_title.includes(lt.hero_price)) {
                    heroTitleEl.innerHTML = lt.hero_title.replace(lt.hero_price, `<span class="text-gradient">${lt.hero_price}</span>`);
                } else {
                    heroTitleEl.textContent = lt.hero_title;
                }
            }

            // Hero Desc
            const heroDescEl = document.querySelector('.hero-description');
            if (heroDescEl) heroDescEl.textContent = lt.hero_desc;

            // Hero Disclaimer
            const heroDisclaimerEl = document.querySelector('.hero-disclaimer p');
            if (heroDisclaimerEl) {
                heroDisclaimerEl.innerHTML = `<strong>*Nota de Transparencia Comercial:</strong> ${lt.hero_disclaimer}`;
            }

            // Section 3: Barra de Confianza (Strip)
            const stripItems = document.querySelectorAll('.trust-strip-item');
            stripItems.forEach((item, idx) => {
                const i = idx + 1;
                const iconEl = item.querySelector('.trust-strip-icon');
                const titleEl = item.querySelector('.trust-strip-text h4');
                const descEl = item.querySelector('.trust-strip-text p');
                if (iconEl && lt[`trust_icon_${i}`]) iconEl.textContent = lt[`trust_icon_${i}`];
                if (titleEl && lt[`trust_head_${i}`]) titleEl.textContent = lt[`trust_head_${i}`];
                if (descEl && lt[`trust_text_${i}`]) descEl.textContent = lt[`trust_text_${i}`];
            });

            // Section 4: Sobre Nosotros e Instagram
            const aboutTagEl = document.querySelector('#about-section .section-tag');
            const aboutTitleEl = document.querySelector('#about-section .section-title');
            if (aboutTagEl && lt.about_tag) aboutTagEl.textContent = lt.about_tag;
            if (aboutTitleEl && lt.about_title) aboutTitleEl.textContent = lt.about_title;
            
            const aboutDescs = document.querySelectorAll('#about-section .section-desc');
            if (aboutDescs[0] && lt.about_desc_1) aboutDescs[0].textContent = lt.about_desc_1;
            if (aboutDescs[1] && lt.about_desc_2) aboutDescs[1].textContent = lt.about_desc_2;
            
            const statNumbers = document.querySelectorAll('#about-section .stat-number');
            if (statNumbers[0] && lt.about_ig_followers) {
                statNumbers[0].textContent = lt.about_ig_followers.startsWith('+') ? lt.about_ig_followers : `+${lt.about_ig_followers}`;
            }

            const igScreenshotImg = document.getElementById('instagram-screenshot-img');
            if (igScreenshotImg) {
                const isDefaultIg = !lt.about_ig_screenshot || lt.about_ig_screenshot === "" || lt.about_ig_screenshot.includes('instagram-screenshot.png');
                const side = igScreenshotImg.closest('.instagram-feed-side-screenshot');
                if (isDefaultIg) {
                    if (side) side.style.display = 'none';
                    const grid = document.querySelector('.instagram-grid');
                    if (grid) grid.style.gridTemplateColumns = '1fr';
                } else {
                    if (side) side.style.display = '';
                    const grid = document.querySelector('.instagram-grid');
                    if (grid) grid.style.gridTemplateColumns = '';
                    igScreenshotImg.src = lt.about_ig_screenshot;
                }
            }

            // Section 5: VSL Block
            const vslTagEl = document.querySelector('#vsl-section .section-tag');
            const vslTitleEl = document.querySelector('#vsl-section .section-title');
            const vslSubtitleEl = document.querySelector('#vsl-section .section-subtitle');
            if (vslTagEl) vslTagEl.textContent = lt.vsl_tag;
            if (vslTitleEl) vslTitleEl.textContent = lt.vsl_title;
            if (vslSubtitleEl) vslSubtitleEl.textContent = lt.vsl_subtitle;

            // Section 6: Reels de Operaciones
            const reelsTagEl = document.querySelector('#reels-section .section-tag');
            const reelsTitleEl = document.querySelector('#reels-section .section-title');
            const reelsSubtitleEl = document.querySelector('#reels-section .section-subtitle');
            if (reelsTagEl && lt.reels_tag) reelsTagEl.textContent = lt.reels_tag;
            if (reelsTitleEl && lt.reels_title) reelsTitleEl.textContent = lt.reels_title;
            if (reelsSubtitleEl && lt.reels_subtitle) reelsSubtitleEl.textContent = lt.reels_subtitle;
            
            const reelCards = document.querySelectorAll('#reels-slider-container .reel-card');
            reelCards.forEach((card, idx) => {
                const i = idx + 1;
                const titleEl = card.querySelector('.reel-info h4');
                const descEl = card.querySelector('.reel-info p');
                
                if (titleEl && lt[`reel${i}_title`]) titleEl.textContent = lt[`reel${i}_title`];
                if (descEl && lt[`reel${i}_desc`]) descEl.textContent = lt[`reel${i}_desc`];
                
                const container = card.querySelector('.reel-video-container');
                if (container) {
                    const ytUrl = lt[`reel${i}_youtube_url`]?.trim();
                    const videoId = ytUrl ? extractYouTubeId(ytUrl) : null;
                    
                    if (videoId) {
                        const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&playsinline=1&rel=0`;
                        container.innerHTML = `<iframe src="${embedSrc}" allow="autoplay; encrypted-media" allowfullscreen style="width:100%; height:100%; object-fit:cover; border-radius:12px; border:none; display:block;"></iframe>`;
                    } else if (lt[`reel${i}_video`]) {
                        container.innerHTML = `<video src="${lt[`reel${i}_video`]}" controls playsinline style="width:100%; height:100%; object-fit:cover; border-radius:12px; display:block;"></video>`;
                    } else {
                        const viewsEl = card.querySelector('.reel-stats');
                        const placeholderEl = card.querySelector('.reel-video-placeholder');
                        if (viewsEl && lt[`reel${i}_views`]) viewsEl.textContent = `👁️ ${lt[`reel${i}_views`]} vistas`;
                        if (placeholderEl) {
                            const thumbVal = lt[`reel${i}_thumb`];
                            const isDefaultThumb = !thumbVal || thumbVal === "" || thumbVal.includes('ceo-alex.png');
                            if (isDefaultThumb) {
                                placeholderEl.innerHTML = '';
                                placeholderEl.style.backgroundColor = '#18181b';
                            } else {
                                placeholderEl.innerHTML = `<img src="${thumbVal}" style="width:100%; height:100%; object-fit:cover; display:block;">`;
                            }
                        }
                    }
                }
            });

            // Save original HTML of reel video containers after DB loading is complete
            const reelContainers = document.querySelectorAll('.reel-video-container');
            reelContainers.forEach((container) => {
                container.dataset.originalHtml = container.innerHTML;
            });

            // Section 7: CEO / Authority Block
            const ceoTitleEl = document.querySelector('.authority-section .section-title');
            const ceoDescEl = document.querySelector('.authority-section .section-desc');
            const ceoQuoteEl = document.querySelector('.ceo-quote-card .quote-text');
            if (ceoTitleEl) ceoTitleEl.textContent = lt.ceo_title;
            if (ceoDescEl) ceoDescEl.textContent = lt.ceo_desc;
            if (ceoQuoteEl) ceoQuoteEl.textContent = lt.ceo_quote;

            // Render family points
            for (let i = 1; i <= 3; i++) {
                const pTitleEl = document.querySelector(`.authority-pillars .pillar-item:nth-child(${i}) h5`);
                const pDescEl = document.querySelector(`.authority-pillars .pillar-item:nth-child(${i}) p`);
                if (pTitleEl && lt[`fam_point_title_${i}`]) pTitleEl.textContent = lt[`fam_point_title_${i}`];
                if (pDescEl && lt[`fam_point_desc_${i}`]) pDescEl.textContent = lt[`fam_point_desc_${i}`];
            }

            // Section 8: Desglose de Costos
            const costTagEl = document.querySelector('#cost-section .section-tag');
            const costTitleEl = document.querySelector('#cost-section .section-title');
            const costSubtitleEl = document.querySelector('#cost-section .section-subtitle');
            if (costTagEl && lt.costs_tag) costTagEl.textContent = lt.costs_tag;
            if (costTitleEl && lt.costs_title) costTitleEl.textContent = lt.costs_title;
            if (costSubtitleEl && lt.costs_subtitle) costSubtitleEl.textContent = lt.costs_subtitle;
            
            const incItems = document.querySelectorAll('.cost-card-includes .cost-list li');
            for (let i = 1; i <= 4; i++) {
                if (incItems[i - 1] && lt[`costs_inc_${i}`]) {
                    const parts = lt[`costs_inc_${i}`].split(':');
                    let contentHTML = "";
                    if (parts.length >= 2) {
                        contentHTML = `<strong>${parts[0].trim()}:</strong> ${parts.slice(1).join(':').trim()}`;
                    } else {
                        contentHTML = lt[`costs_inc_${i}`];
                    }
                    incItems[i - 1].querySelector('div').innerHTML = contentHTML;
                }
            }
            
            const excItems = document.querySelectorAll('.cost-card-excludes .cost-list li');
            for (let i = 1; i <= 4; i++) {
                if (excItems[i - 1] && lt[`costs_exc_${i}`]) {
                    const parts = lt[`costs_exc_${i}`].split(':');
                    let contentHTML = "";
                    if (parts.length >= 2) {
                        contentHTML = `<strong>${parts[0].trim()}:</strong> ${parts.slice(1).join(':').trim()}`;
                    } else {
                        contentHTML = lt[`costs_exc_${i}`];
                    }
                    excItems[i - 1].querySelector('div').innerHTML = contentHTML;
                }
            }

            // Section 9: Características
            const featTagEl = document.querySelector('#features-section .section-tag');
            const featTitleEl = document.querySelector('#features-section .section-title');
            const featSubtitleEl = document.querySelector('#features-section .section-subtitle');
            if (featTagEl && lt.feat_tag) featTagEl.textContent = lt.feat_tag;
            if (featTitleEl && lt.feat_title) featTitleEl.textContent = lt.feat_title;
            if (featSubtitleEl && lt.feat_subtitle) featSubtitleEl.textContent = lt.feat_subtitle;
            
            const featCards = document.querySelectorAll('.features-grid .feature-card');
            for (let i = 1; i <= 4; i++) {
                if (featCards[i - 1]) {
                    const iconEl = featCards[i - 1].querySelector('.feature-icon');
                    const headEl = featCards[i - 1].querySelector('h3');
                    const descEl = featCards[i - 1].querySelector('p');
                    if (iconEl && lt[`feat_icon_${i}`]) iconEl.textContent = lt[`feat_icon_${i}`];
                    if (headEl && lt[`feat_title_${i}`]) headEl.textContent = lt[`feat_title_${i}`];
                    if (descEl && lt[`feat_desc_${i}`]) descEl.textContent = lt[`feat_desc_${i}`];
                }
            }

            // Section 10: PDF Promo
            const pdfPromoTitleEl = document.querySelector('.pdf-info-side .section-title');
            const pdfPromoDescEl = document.querySelector('.pdf-info-side .pdf-desc');
            if (pdfPromoTitleEl && lt.pdf_promo_title) pdfPromoTitleEl.textContent = lt.pdf_promo_title;
            if (pdfPromoDescEl && lt.pdf_promo_desc) pdfPromoDescEl.textContent = lt.pdf_promo_desc;
            
            const pdfMockupImg = document.querySelector('.pdf-mockup-img');
            if (pdfMockupImg) {
                const isDefaultPdf = !lt.pdf_mockup_img || lt.pdf_mockup_img === "" || lt.pdf_mockup_img.includes('pdf-mockup.png');
                const side = pdfMockupImg.closest('.pdf-mockup-side');
                if (isDefaultPdf) {
                    if (side) side.style.display = 'none';
                    const container = pdfMockupImg.closest('.pdf-container');
                    if (container) container.style.gridTemplateColumns = '1fr';
                } else {
                    if (side) side.style.display = '';
                    const container = pdfMockupImg.closest('.pdf-container');
                    if (container) container.style.gridTemplateColumns = '';
                    pdfMockupImg.src = lt.pdf_mockup_img;
                    pdfMockupImg.style.display = '';
                }
            }

            // Section 11: Otros Modelos Toyota tag/title/subtitle
            const modelsTagEl = document.querySelector('.other-models-section .section-tag');
            const modelsTitleEl = document.querySelector('.other-models-section .section-title');
            const modelsSubtitleEl = document.querySelector('.other-models-section .section-subtitle');
            if (modelsTagEl && lt.models_tag) modelsTagEl.textContent = lt.models_tag;
            if (modelsTitleEl && lt.models_title) modelsTitleEl.textContent = lt.models_title;
            if (modelsSubtitleEl && lt.models_subtitle) modelsSubtitleEl.textContent = lt.models_subtitle;

            // Section 12: Why WhatsApp Block
            const whTitleEl = document.querySelector('.why-whatsapp-section h2');
            const whDescEl = document.querySelector('.why-whatsapp-section p');
            if (whTitleEl) whTitleEl.textContent = lt.wh_title;
            if (whDescEl) whDescEl.textContent = lt.wh_desc;

            // Section 13: Evidencia Operativa y Testimonios tag/title/subtitle
            const galTagEl = document.querySelector('.social-proof-section .section-tag');
            const galTitleEl = document.querySelector('.social-proof-section .section-title');
            const galSubtitleEl = document.querySelector('.social-proof-section .section-subtitle');
            if (galTagEl && lt.gallery_tag) galTagEl.textContent = lt.gallery_tag;
            if (galTitleEl && lt.gallery_title) galTitleEl.textContent = lt.gallery_title;
            if (galSubtitleEl && lt.gallery_subtitle) galSubtitleEl.textContent = lt.gallery_subtitle;
            
            const proofCards = document.querySelectorAll('.proof-gallery .proof-card');
            for (let i = 1; i <= 3; i++) {
                if (proofCards[i - 1]) {
                    const titleEl = proofCards[i - 1].querySelector('h5');
                    const descEl = proofCards[i - 1].querySelector('p');
                    const imgContainer = proofCards[i - 1].querySelector('.proof-img-placeholder');
                    
                    if (titleEl && lt[`gal${i}_title`]) titleEl.textContent = lt[`gal${i}_title`];
                    if (descEl && lt[`gal${i}_desc`]) descEl.textContent = lt[`gal${i}_desc`];
                    
                    const imageVal = lt[`gal${i}_img`];
                    const isDefault = !imageVal || imageVal === "" || imageVal.includes('corolla-cross.png') || imageVal.includes('ceo-alex.png');
                    if (isDefault) {
                        proofCards[i - 1].style.display = 'none';
                    } else {
                        proofCards[i - 1].style.display = '';
                        if (imgContainer) {
                            imgContainer.innerHTML = `<img src="${imageVal}" style="width:100%; height:100%; object-fit:cover; display:block;">`;
                            imgContainer.style.padding = '0';
                        }
                    }
                }
            }

            // Section 14: FAQs Header
            const faqsTagEl = document.querySelector('.faq-section .section-tag');
            const faqsTitleEl = document.querySelector('.faq-section .section-title');
            const faqsSubtitleEl = document.querySelector('.faq-section .section-subtitle');
            if (faqsTagEl && lt.faqs_tag) faqsTagEl.textContent = lt.faqs_tag;
            if (faqsTitleEl && lt.faqs_title) faqsTitleEl.textContent = lt.faqs_title;
            if (faqsSubtitleEl && lt.faqs_subtitle) faqsSubtitleEl.textContent = lt.faqs_subtitle;

            // Section 15: Final CTA Block Tag
            const ctaFinalTagEl = document.querySelector('.cta-final-section .section-tag');
            if (ctaFinalTagEl && lt.cta_final_tag) ctaFinalTagEl.textContent = lt.cta_final_tag;

            const ctaTitleEl = document.querySelector('.cta-final-section h2');
            const ctaDescEl = document.querySelector('.cta-final-section p');
            if (ctaTitleEl) ctaTitleEl.textContent = lt.cta_final_title;
            if (ctaDescEl) ctaDescEl.textContent = lt.cta_final_desc;

            // Section 16: Footer Address and Desc
            const footerDescEl = document.querySelector('.footer-brand-info .footer-desc');
            const footerAddressEl = document.querySelector('.footer-brand-info .footer-address');
            if (footerDescEl) footerDescEl.textContent = lt.footer_desc;
            if (footerAddressEl) footerAddressEl.innerHTML = `📍 Oficina Guangzhou: ${lt.footer_address}`;

            // Brand logo updates
            const logoEl = document.getElementById('brand-logo');
            if (logoEl) logoEl.src = lt.brand_logo || 'assets/logo.jpg';
            const footerLogoEl = document.querySelector('.footer-logo');
            if (footerLogoEl) footerLogoEl.src = lt.brand_logo || 'assets/logo.jpg';

            // CEO Portrait updates
            const ceoProfileEl = document.querySelector('.ceo-profile-img');
            if (ceoProfileEl) {
                const isDefaultCeo = !lt.ceo_profile_img || lt.ceo_profile_img === "" || lt.ceo_profile_img.includes('ceo-alex.png');
                if (isDefaultCeo) {
                    ceoProfileEl.style.display = 'none';
                } else {
                    ceoProfileEl.style.display = '';
                    ceoProfileEl.src = lt.ceo_profile_img;
                }
            }

            // VSL Thumbnail / Video updates
            const vslVideoWrapper = document.getElementById('vsl-video-overlay-wrapper');
            if (vslVideoWrapper) {
                const vslYtUrl = lt.vsl_youtube_url || '';
                if (vslYtUrl) {
                    const videoId = extractYouTubeId(vslYtUrl);
                    if (videoId) {
                        const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&playsinline=1&rel=0`;
                        vslVideoWrapper.innerHTML = `<iframe src="${embedSrc}" allow="autoplay; encrypted-media" allowfullscreen class="vsl-thumbnail" style="width: 100%; height: 100%; aspect-ratio: 9/16; max-height: 600px; display: block; margin: 0 auto; border-radius: 12px; border: none;"></iframe>`;
                    }
                } else {
                    const vslThumbnailEl = vslVideoWrapper.querySelector('.vsl-thumbnail');
                    if (vslThumbnailEl) {
                        const isDefaultThumb = !lt.vsl_thumbnail_img || lt.vsl_thumbnail_img === "" || lt.vsl_thumbnail_img.includes('ceo-alex.png');
                        if (isDefaultThumb) {
                            vslThumbnailEl.style.display = 'none';
                            const overlay = vslThumbnailEl.closest('.vsl-video-overlay');
                            if (overlay) overlay.style.backgroundColor = '#18181b';
                        } else {
                            vslThumbnailEl.style.display = '';
                            vslThumbnailEl.src = lt.vsl_thumbnail_img;
                        }
                    }
                }
            }

            // Hero Image update (only if no YouTube video is set)
            const heroMediaContainer = document.getElementById('hero-media-container');
            if (heroMediaContainer) {
                const heroYtUrl = lt.hero_youtube_url || '';
                if (heroYtUrl) {
                    const videoId = extractYouTubeId(heroYtUrl);
                    if (videoId) {
                        // Build embed URL: autoplay (muted per browser policy), loop, WITH controls so user can unmute
                        const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&playsinline=1&rel=0`;
                        // Get the badge overlay to preserve it
                        const badgeOverlay = heroMediaContainer.querySelector('.hero-badge-overlay');
                        const badgeHTML = badgeOverlay ? badgeOverlay.outerHTML : '';
                        heroMediaContainer.innerHTML = `
                            <div class="hero-video-reel-wrapper">
                                <div class="hero-video-reel-frame">
                                    <iframe src="${embedSrc}"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowfullscreen
                                        loading="lazy"
                                        title="MLC Master China - Video Hero"></iframe>
                                </div>
                                <div class="hero-video-sound-hint" id="hero-sound-hint" title="Haz clic en el video y luego en el ícono 🔊 para activar el sonido">
                                    🔇 Silenciado — activa el sonido en el reproductor
                                </div>
                                ${badgeHTML}
                            </div>`;
                    }
                } else if (lt.hero_img) {
                    // Only update the image if no YouTube video — and a custom image was uploaded
                    const heroCarImg = heroMediaContainer.querySelector('.hero-car-img');
                    if (heroCarImg) heroCarImg.src = lt.hero_img;
                }
            }
        }

        // 2. Ajustes de Visibilidad de Secciones
        const settings = data.page_settings;
        if (settings) {
            const vslSection = document.getElementById('vsl-section');
            if (vslSection) vslSection.style.display = settings.toggle_vsl ? '' : 'none';

            const reelsSection = document.getElementById('reels-section');
            if (reelsSection) reelsSection.style.display = settings.toggle_reels ? '' : 'none';

            const aboutSection = document.getElementById('about-section');
            if (aboutSection) aboutSection.style.display = settings.toggle_about ? '' : 'none';

            const pdfSection = document.querySelector('.pdf-section');
            if (pdfSection) pdfSection.style.display = settings.toggle_pdf ? '' : 'none';

            const modelsSection = document.querySelector('.other-models-section');
            if (modelsSection) modelsSection.style.display = settings.toggle_models ? '' : 'none';

            // Instagram Followers Counter update
            const igStatEl = document.querySelector('.social-stat-card .stat-number');
            if (igStatEl) igStatEl.textContent = `+${settings.instagram_followers}`;
            
            const igHeaderStatEl = document.querySelector('.ig-profile-info p strong');
            if (igHeaderStatEl) {
                let followersText = settings.instagram_followers;
                if (followersText.replace(/,/g, '') >= 1000) {
                    followersText = (parseInt(followersText.replace(/,/g, '')) / 1000).toFixed(0) + "K";
                }
                igHeaderStatEl.textContent = followersText;
            }
        }

        // 3. Vehículo Principal & Especificaciones
        const pdfConfig = data.pdf_config;
        const vehicles = data.vehicles;
        if (vehicles && vehicles.length > 0) {
            const primaryId = pdfConfig?.selected_vehicle_id || "1";
            const primaryVehicle = vehicles.find(v => v.id === primaryId) || vehicles[0];

            if (primaryVehicle) {
                // Update Calculator Base Price
                const calcBasePriceEl = document.querySelector('.calc-result-row strong');
                if (calcBasePriceEl) {
                    calcBasePriceEl.textContent = `USD ${primaryVehicle.price}`;
                }

                // Update primary vehicle image
                const heroCarImg = document.querySelector('.hero-car-img');
                if (heroCarImg) {
                    const isDefaultCar = !primaryVehicle.image || primaryVehicle.image === "" || primaryVehicle.image.includes('corolla-cross.png');
                    if (isDefaultCar) {
                        heroCarImg.style.display = 'none';
                    } else {
                        heroCarImg.style.display = '';
                        heroCarImg.src = primaryVehicle.image;
                    }
                }
            }

            // 4. Render Otros Modelos (Excluyendo el principal)
            const otherVehicles = vehicles.filter(v => v.id !== primaryId && v.status === 'active');
            const otherModelsGrid = document.querySelector('.other-models-section .models-grid');
            
            if (otherModelsGrid) {
                if (otherVehicles.length > 0) {
                    otherModelsGrid.innerHTML = "";
                    otherVehicles.forEach(v => {
                        const card = document.createElement('div');
                        card.className = "model-card";
                        
                        const badgeText = v.badge || (v.name.toLowerCase().includes('híb') || v.name.toLowerCase().includes('hyb') ? 'Híbrido' : 'SUV Premium');
                        const icon = v.name.toLowerCase().includes('cross') || v.name.toLowerCase().includes('rav4') ? '🚙' : '🚗';
                        
                        const hasCustomImg = v.image && v.image.trim() !== "" && !v.image.includes('corolla-cross.png');
                        const imgHtml = hasCustomImg 
                            ? `<img src="${v.image}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${v.name}">` 
                            : `<div class="car-placeholder-icon">${icon}</div>`;

                        card.innerHTML = `
                            <div class="model-card-badge">${badgeText}</div>
                            <div class="model-card-image">
                                ${imgHtml}
                            </div>
                            <div class="model-card-info">
                                <h3>${v.name}</h3>
                                <p>${v.short_desc}</p>
                                <button class="btn btn-secondary btn-full open-whatsapp-modal" data-model="${v.name}">
                                    <span>Consultar Disponibilidad</span>
                                </button>
                            </div>
                        `;
                        otherModelsGrid.appendChild(card);
                    });
                }
            }

            // Update qualifier dropdown options to match dynamic models
            if (wsModelSelect) {
                wsModelSelect.innerHTML = '<option value="" disabled selected>Selecciona una opción...</option>';
                vehicles.forEach(v => {
                    if (v.status === 'active') {
                        const opt = document.createElement('option');
                        opt.value = v.name;
                        opt.textContent = v.name;
                        wsModelSelect.appendChild(opt);
                    }
                });
            }
        }

        // 5. Testimonios Dinámicos
        const testimonials = data.testimonials;
        const testWrapper = document.getElementById('testimonials-wrapper');
        const testimonialsGrid = document.getElementById('dynamic-testimonials-grid');
        
        if (testWrapper && testimonialsGrid) {
            if (testimonials && testimonials.length > 0) {
                testWrapper.style.display = 'block';
                testimonialsGrid.innerHTML = "";
                testimonials.forEach(t => {
                    const card = document.createElement('div');
                    card.className = "testimonial-card";
                    card.innerHTML = `
                        <div class="testimonial-content">
                            <div class="testimonial-stars" style="color: var(--gold-primary); margin-bottom: 12px; font-size: 1.1rem;">★★★★★</div>
                            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; font-style: italic;">"${t.content}"</p>
                        </div>
                        <div class="testimonial-author" style="border-top: 1px solid var(--border-color); padding-top: 12px; display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                            <span style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${t.name}</span>
                            <span class="badge" style="background-color: var(--gold-glow); color: var(--gold-dark); border: 1px solid var(--gold-primary); padding: 2px 8px; font-size: 0.7rem; font-weight: 600; text-transform: none;">${t.type}</span>
                        </div>
                    `;
                    testimonialsGrid.appendChild(card);
                });
            } else {
                testWrapper.style.display = 'none';
            }
        }

        // 6. FAQs dinámicas
        const faqs = data.faqs;
        const faqAccordion = document.querySelector('.faq-section .accordion');
        if (faqAccordion && faqs && faqs.length > 0) {
            faqAccordion.innerHTML = "";
            faqs.forEach(faq => {
                const item = document.createElement('div');
                item.className = "accordion-item";
                item.innerHTML = `
                    <button class="accordion-header">
                        <span>${faq.question}</span>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <p>${faq.answer}</p>
                    </div>
                `;
                faqAccordion.appendChild(item);
            });
        }
    }

    // === UTILITY FUNCTIONS ===
    
    // Open Modal
    function openModal(modalEl) {
        modalEl.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scroll background
    }

    // Close Modal
    function closeModal(modalEl) {
        modalEl.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scroll background
    }

    // Format number to currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
    }

    // === ACCORDION / FAQ LOGIC ===
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
            
            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // === REELS SLIDER LOGIC ===
    if (reelPrevBtn && reelNextBtn && reelsSliderContainer) {
        const scrollAmount = 280; // width of card (260px) + gap (20px)
        
        reelPrevBtn.addEventListener('click', () => {
            reelsSliderContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        reelNextBtn.addEventListener('click', () => {
            reelsSliderContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // === MODAL TRIGGERS AND ACTION EVENT LISTENERS ===

    // Class-based click listener for WhatsApp modal trigger
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.open-whatsapp-modal');
        if (trigger) {
            e.preventDefault();
            
            // Check if there is a predefined model to pre-select
            const predefinedModel = trigger.getAttribute('data-model');
            if (predefinedModel && wsModelSelect) {
                // Find matching option in the dropdown and select it
                for (let i = 0; i < wsModelSelect.options.length; i++) {
                    if (wsModelSelect.options[i].value === predefinedModel) {
                        wsModelSelect.selectedIndex = i;
                        break;
                    }
                }
            } else if (wsModelSelect) {
                // Default to Corolla Cross if found in dropdown
                const defaultModel = "Toyota Corolla Cross 2.0 Elite Edition";
                let found = false;
                for (let i = 0; i < wsModelSelect.options.length; i++) {
                    if (wsModelSelect.options[i].value === defaultModel) {
                        wsModelSelect.selectedIndex = i;
                        found = true;
                        break;
                    }
                }
                if (!found && wsModelSelect.options.length > 1) {
                    wsModelSelect.selectedIndex = 1; // Default to first available active vehicle option
                }
            }
            
            openModal(modals.whatsapp);
        }
    });

    // VSL Player In-Place Play logic
    const vslOverlay = document.querySelector('.vsl-video-overlay');
    if (vslOverlay) {
        vslOverlay.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Check if there is a YouTube video URL
            if (db && db.landing_texts && db.landing_texts.vsl_youtube_url) {
                const wrapper = document.getElementById('vsl-video-overlay-wrapper');
                if (wrapper) {
                    const ytUrl = db.landing_texts.vsl_youtube_url;
                    const videoId = extractYouTubeId(ytUrl);
                    if (videoId) {
                        const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1&rel=0`;
                        wrapper.innerHTML = `<iframe src="${embedSrc}" allow="autoplay; encrypted-media" allowfullscreen class="vsl-thumbnail" style="width: 100%; height: 100%; aspect-ratio: 9/16; max-height: 600px; display: block; margin: 0 auto; border-radius: 12px; border: none;"></iframe>`;
                        return;
                    }
                }
            }
            
            // Check if there is an uploaded custom vertical video
            if (db && db.landing_texts && db.landing_texts.vsl_video_path) {
                const wrapper = document.getElementById('vsl-video-overlay-wrapper');
                if (wrapper) {
                    wrapper.innerHTML = `<video src="${db.landing_texts.vsl_video_path}" autoplay controls playsinline class="vsl-thumbnail" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 9/16; max-height: 600px; display: block; margin: 0 auto; border-radius: 12px;"></video>`;
                    return;
                }
            }
            
            const progressFill = vslOverlay.querySelector('.inplace-progress-fill');
            
            if (vslOverlay.classList.contains('playing')) {
                // Pause simulation
                vslOverlay.classList.remove('playing');
                if (progressFill) progressFill.style.animationPlayState = 'paused';
            } else {
                // Play simulation
                vslOverlay.classList.add('playing');
                if (progressFill) {
                    if (progressFill.style.animationName === 'inplaceVideoProgress') {
                        progressFill.style.animationPlayState = 'running';
                    } else {
                        progressFill.style.animation = 'inplaceVideoProgress 15s linear forwards';
                        progressFill.style.animationName = 'inplaceVideoProgress';
                        progressFill.style.animationPlayState = 'running';
                    }
                }
            }
        });
    }

    // Reels Carrousel In-Place Play logic
    const reelContainers = document.querySelectorAll('.reel-video-container');
    reelContainers.forEach((container, idx) => {
        container.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // If video or iframe is already loaded, do nothing
            if (container.querySelector('video') || container.querySelector('iframe')) {
                return;
            }
            
            const reelNum = idx + 1;
            
            // Check if there is a YouTube video URL
            if (db && db.landing_texts && db.landing_texts[`reel${reelNum}_youtube_url`]) {
                const ytUrl = db.landing_texts[`reel${reelNum}_youtube_url`].trim();
                if (ytUrl) {
                    console.log(`[Reels Click] Reel ${reelNum} clicked. URL in DB:`, ytUrl);
                    const videoId = extractYouTubeId(ytUrl);
                    console.log(`[Reels Click] Extracted Video ID:`, videoId);
                    if (videoId) {
                        // Stop other reels playing (both simulated, real videos, or other iframes)
                        reelContainers.forEach((other) => {
                            if (other !== container) {
                                if (other.classList.contains('playing')) {
                                    other.classList.remove('playing');
                                    const otherProgress = other.querySelector('.inplace-progress-fill');
                                    if (otherProgress) otherProgress.style.animationPlayState = 'paused';
                                }
                                const otherVideo = other.querySelector('video');
                                if (otherVideo) {
                                    otherVideo.pause();
                                }
                                const otherIframe = other.querySelector('iframe');
                                if (otherIframe) {
                                    other.innerHTML = other.dataset.originalHtml || '';
                                }
                            }
                        });
                        
                        const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1&rel=0`;
                        container.innerHTML = `<iframe src="${embedSrc}" allow="autoplay; encrypted-media" allowfullscreen style="width:100%; height:100%; object-fit:cover; border-radius:12px; border:none; display:block;"></iframe>`;
                        return;
                    }
                }
            }
            
            // Check if there is an uploaded custom vertical video
            if (db && db.landing_texts && db.landing_texts[`reel${reelNum}_video`]) {
                // Stop other reels playing (both simulated, real videos, or other iframes)
                reelContainers.forEach((other) => {
                    if (other !== container) {
                        if (other.classList.contains('playing')) {
                            other.classList.remove('playing');
                        }
                        const otherVideo = other.querySelector('video');
                        if (otherVideo) {
                            otherVideo.pause();
                        }
                        const otherIframe = other.querySelector('iframe');
                        if (otherIframe) {
                            other.innerHTML = other.dataset.originalHtml || '';
                        }
                    }
                });
                
                container.innerHTML = `<video src="${db.landing_texts[`reel${reelNum}_video`]}" autoplay controls playsinline style="width:100%; height:100%; object-fit:cover; border-radius:12px; display:block;"></video>`;
                return;
            }
            
            const progressFill = container.querySelector('.inplace-progress-fill');
            
            // Stop other reels playing (both simulated, real videos, or other iframes)
            reelContainers.forEach((other) => {
                if (other !== container) {
                    if (other.classList.contains('playing')) {
                        other.classList.remove('playing');
                        const otherProgress = other.querySelector('.inplace-progress-fill');
                        if (otherProgress) otherProgress.style.animationPlayState = 'paused';
                    }
                    const otherVideo = other.querySelector('video');
                    if (otherVideo) {
                        otherVideo.pause();
                    }
                    const otherIframe = other.querySelector('iframe');
                    if (otherIframe) {
                        other.innerHTML = other.dataset.originalHtml || '';
                    }
                }
            });
            
            if (container.classList.contains('playing')) {
                // Pause simulation
                container.classList.remove('playing');
                if (progressFill) progressFill.style.animationPlayState = 'paused';
            } else {
                // Play simulation
                container.classList.add('playing');
                if (progressFill) {
                    progressFill.style.animation = 'none';
                    void progressFill.offsetWidth; // force reflow
                    progressFill.style.animation = 'inplaceVideoProgress 15s linear forwards';
                    progressFill.style.animationPlayState = 'running';
                }
            }
        });
    });

    // PDF Download Modal trigger
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.open-pdf-modal');
        if (trigger) {
            e.preventDefault();
            
            // Reset modal states to show lead form first
            const leadForm = document.getElementById('pdf-lead-form');
            if (leadForm) {
                leadForm.reset();
                leadForm.style.display = 'block';
            }
            if (pdfLoadingView) pdfLoadingView.style.display = 'none';
            if (pdfReadyView) pdfReadyView.style.display = 'none';
            
            openModal(modals.pdf);
        }
    });

    // Lead Form submission handler
    const leadForm = document.getElementById('pdf-lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('pdf-lead-name').value.trim();
            const email = document.getElementById('pdf-lead-email').value.trim();
            const whatsapp = document.getElementById('pdf-lead-whatsapp').value.trim();
            
            // Determine vehicle name
            let vehicleName = "Toyota Corolla Cross 2.0 Elite Edition";
            if (db && db.pdf_config && db.vehicles) {
                const pv = db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id) || db.vehicles[0];
                if (pv) vehicleName = pv.name;
            }
            
            const lead = {
                name,
                email,
                whatsapp: whatsapp || "No provisto",
                vehicle: vehicleName,
                timestamp: new Date().toISOString()
            };
            
            // 1. Save lead locally in IndexedDB
            try {
                await MLCDatabase.addLead(lead);
                console.log("[Lead Capture] Guardado localmente en IndexedDB.");
            } catch (err) {
                console.error("[Lead Capture] Error al guardar local en IndexedDB:", err);
            }
            
            // Hide form and show loader
            leadForm.style.display = 'none';
            if (pdfLoadingView) pdfLoadingView.style.display = 'flex';
            
            // Wait 1.5s then show download ready & trigger download
            setTimeout(() => {
                if (pdfLoadingView) pdfLoadingView.style.display = 'none';
                if (pdfReadyView) pdfReadyView.style.display = 'block';
                
                // Trigger actual download
                const downloadBtn = document.getElementById('btn-actual-download');
                if (downloadBtn) {
                    downloadBtn.click();
                }
            }, 1500);
        });
    }

    // Close buttons click handlers
    if (closeBtns.whatsapp) closeBtns.whatsapp.addEventListener('click', () => closeModal(modals.whatsapp));
    if (closeBtns.vsl) closeBtns.vsl.addEventListener('click', () => closeModal(modals.vsl));
    if (closeBtns.pdf) closeBtns.pdf.addEventListener('click', () => closeModal(modals.pdf));

    // Close modal when clicking outside content area
    window.addEventListener('click', (e) => {
        if (e.target === modals.whatsapp) closeModal(modals.whatsapp);
        if (e.target === modals.vsl) closeModal(modals.vsl);
        if (e.target === modals.pdf) closeModal(modals.pdf);
    });

    // === CALCULATOR LOGIC ===
    if (calcCountry) {
        calcCountry.addEventListener('change', () => {
            const selectedOpt = calcCountry.options[calcCountry.selectedIndex];
            
            if (selectedOpt && selectedOpt.value !== "") {
                const freight = parseFloat(selectedOpt.getAttribute('data-freight'));
                const taxes = parseFloat(selectedOpt.getAttribute('data-taxes'));
                const aduanas = parseFloat(selectedOpt.getAttribute('data-aduanas'));
                
                // Get primary base price dynamically
                let basePrice = 14500;
                if (db && db.vehicles && db.pdf_config) {
                    const primaryVehicle = db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id) || db.vehicles[0];
                    if (primaryVehicle) {
                        basePrice = parseFloat(primaryVehicle.price.replace(/,/g, ''));
                    }
                }
                
                const totalEstimated = basePrice + freight + aduanas;
                
                // Set values in results area
                resFreight.textContent = formatCurrency(freight);
                resAduanas.textContent = formatCurrency(aduanas);
                resTotal.textContent = formatCurrency(totalEstimated);
                resTaxPercent.textContent = taxes;
                
                // Show with transition
                calcResults.style.display = 'block';
                
                // Modify calculation redirection CTA for WhatsApp
                const countryName = selectedOpt.textContent.split('(')[0].trim();
                calcWhatsappBtn.onclick = (e) => {
                    e.preventDefault();
                    
                    // Pre-select country in WhatsApp modal
                    if (wsCountrySelect) {
                        for (let i = 0; i < wsCountrySelect.options.length; i++) {
                            if (wsCountrySelect.options[i].value.toLowerCase().includes(countryName.toLowerCase())) {
                                wsCountrySelect.selectedIndex = i;
                                break;
                            }
                        }
                    }
                    
                    // Open WhatsApp qualifier form modal instead of going direct to have qualifications
                    openModal(modals.whatsapp);
                };
            } else {
                calcResults.style.display = 'none';
            }
        });
    }

    // === FORM SUBMISSION / WHATSAPP REDIRECTION ===
    if (forms.whatsappQualifier) {
        forms.whatsappQualifier.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const country = document.getElementById('ws-country').value;
            const model = document.getElementById('ws-model').value;
            const purchaseType = document.getElementById('ws-type').value;
            const urgency = document.getElementById('ws-urgency').value;
            
            // Build the formatted structured message text for direct sales team redirection
            const baseText = `Hola MLC Master China, vengo de la landing page y deseo solicitar una cotización formal de importación. Mis detalles de interés:
            
📍 País de Destino: ${country}
🚗 Modelo Seleccionado: ${model}
💼 Tipo de Operación: ${purchaseType}
⚡ Urgencia de Compra: ${urgency}

Agradezco su acompañamiento comercial en español para guiarme en este proceso.`;

            const encodedText = encodeURIComponent(baseText);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodedText}`;
            
            // Close modal
            closeModal(modals.whatsapp);
            
            // Redirection
            window.open(whatsappUrl, '_blank');
        });
    }

    // === PDF DOWNLOAD BUTTON ACTION ===
    if (btnActualDownload) {
        btnActualDownload.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Check if a compiled PDF exists in localStorage
            let publishedPdf = "";
            let vehicleName = "Toyota_Corolla_Cross";
            if (db) {
                publishedPdf = db.pdf_config?.published_pdf_base64 || "";
                const primaryVehicle = db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id) || db.vehicles[0];
                if (primaryVehicle) {
                    vehicleName = primaryVehicle.name.replace(/ /g, "_");
                }
            }

            if (publishedPdf && publishedPdf.startsWith("data:application/pdf;base64,")) {
                // Dynamic PDF trigger download
                const tempLink = document.createElement('a');
                tempLink.href = publishedPdf;
                tempLink.download = `Ficha_Tecnica_MLC_${vehicleName}.pdf`;
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
                closeModal(modals.pdf);
            } else {
                // Fallback to text file if no PDF generated
                alert("La ficha técnica en PDF oficial se está generando. Descargando datos referenciales preliminares...");
                const mockPdfContent = `
============================================================
           MLC MASTER CHINA - FICHA TÉCNICA OFICIAL
============================================================
MODELO: ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.name || "Toyota Corolla Cross 2.0 Elite Edition") : "Toyota Corolla Cross 2.0 Elite Edition"}
PRECIO BASE REFERENCIAL (ORIGEN): USD ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.price || "14,500") : "14,500"} FOB

------------------------------------------------------------
1. ESPECIFICACIONES DE MOTOR Y TRANSMISIÓN
------------------------------------------------------------
- Motor: ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.motor || "2.0L Dynamic Force") : "2.0L Dynamic Force"}
- Transmisión: ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.transmision || "Automática Direct Shift-CVT") : "Automática Direct Shift-CVT"}

------------------------------------------------------------
2. DIMENSIONES Y CAPACIDADES
------------------------------------------------------------
- Dimensiones generales: ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.dimensiones || "4460 / 1825 / 1620 mm") : "4460 / 1825 / 1620 mm"}

------------------------------------------------------------
3. EQUIPAMIENTO INTERIOR Y CONFORT ELITE
------------------------------------------------------------
- Tecnología: ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.tecnologia || "Infoentretenimiento premium táctil") : "Infoentretenimiento premium táctil"}

------------------------------------------------------------
4. SEGURIDAD ACTIVA Y PASIVA
------------------------------------------------------------
- Seguridad: ${db ? (db.vehicles.find(v => v.id === db.pdf_config.selected_vehicle_id)?.seguridad || "ABS, EBD, VSC, HAC, 7 Airbags") : "ABS, EBD, VSC, HAC, 7 Airbags"}

------------------------------------------------------------
5. CONDICIONES COMERCIALES DE IMPORTACIÓN ASISTIDA
------------------------------------------------------------
- MLC Master China coordina la compra física en origen.
- Inspección técnica detallada en puerto chino antes del flete.
- Envío de reporte de chasis, motor y fotos en tiempo real.
- Entrega de documentación de exportación oficial (B/L, Factura).

*Para cotizar flete y seguro a tu puerto, por favor contacta a un asesor comercial.
WhatsApp Oficial: +${WHATSAPP_PHONE}
============================================================
`;
                
                const blob = new Blob([mockPdfContent], { type: 'text/plain;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                
                const tempLink = document.createElement('a');
                tempLink.href = url;
                tempLink.download = `Ficha_Tecnica_${vehicleName}.txt`;
                document.body.appendChild(tempLink);
                tempLink.click();
                document.body.removeChild(tempLink);
                
                closeModal(modals.pdf);
            }
        });
    }
});

function deepMerge(target, source) {
    if (!source) return target;
    if (!target) return source;
    
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
