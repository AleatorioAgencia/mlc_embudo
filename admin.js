/* ==========================================
   MLC MASTER CHINA - INTERACTIVE CMS LOGIC (admin.js)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // === DEFAULT DATA STRUCTURE FOR DATABASE INITIALIZATION ===
    const DEFAULT_DB = {
        landing_texts: {
            top_bar_text: "Empresa radicada en China • Oficina principal en Guangzhou • Soporte comercial 100% en español",
            hero_title: "Importa tu Toyota Corolla Cross 2.0 Elite Edition desde USD 14,500*",
            hero_desc: "Accede al valor base en origen comprando de manera directa en el mercado chino con la guía, revisión técnica y acompañamiento logístico de MLC Master China. Gestionamos la compra, inspección y exportación para que recibas tu vehículo con más control y transparencia comercial.",
            hero_price: "desde USD 14,500*",
            hero_disclaimer: "*Precio base referencial FOB en puerto de origen (China). No incluye fletes internacionales, seguros de tránsito, aranceles locales ni impuestos específicos de nacionalización en tu país de destino.",
            hero_youtube_url: "",
            vsl_tag: "TRANSPARENCIA EN ORIGEN",
            vsl_title: "Cómo Gestionamos Tu Importación",
            vsl_subtitle: "Descubre en este video de 90 segundos nuestro proceso de verificación técnica en China.",
            ceo_title: "Una Empresa Familiar Cuidando el Sueño de Tu Familia",
            ceo_desc: "Detrás de cada contenedor y cada trámite en Guangzhou, hay una familia real comprometida con la tuya. Sabemos que importar un vehículo no es solo una transacción; es una inversión importante y un sueño familiar. Por eso, supervisamos cada detalle en origen con el mismo cuidado y seriedad con el que protegemos a nuestra propia familia.",
            ceo_quote: "\"No somos una corporación fría en internet; somos personas reales, con valores familiares, trabajando desde China para darte la tranquilidad de que tu inversión llegará segura a casa.\"",
            fam_point_title_1: "Cuidado en Origen",
            fam_point_desc_1: "Revisamos personalmente cada detalle técnico (chasis, motor y componentes) como si fuera nuestro propio auto.",
            fam_point_title_2: "Transparencia de Familia a Familia",
            fam_point_desc_2: "Te enviamos fotos y videos detallados de tu vehículo específico para que sigas el proceso con total tranquilidad.",
            fam_point_title_3: "Trámites y Aduana Seguros",
            fam_point_desc_3: "Coordinamos y validamos toda la documentación oficial de exportación para asegurar un tránsito marítimo confiable.",
            wh_title: "¿Por qué hablar por WhatsApp con un asesor?",
            wh_desc: "Importar un vehículo es un proceso serio que involucra trámites aduaneros, cálculo de aranceles y logística de transporte. En MLC Master China no utilizamos respuestas automáticas de robots que no resuelven tus dudas. Al hacer clic en nuestro canal oficial:",
            cta_final_title: "Inicia tu proceso de importación asistida hoy",
            cta_final_desc: "Los cupos de consolidación en contenedor y las tarifas de flete marítimo internacional fluctúan mensualmente. Asegura tu cotización base y solicita un presupuesto estimado hacia tu país de destino.",
            footer_desc: "Especialistas en acompañamiento comercial, revisión de mercancía e importación directa desde China para el mercado hispanoamericano.",
            footer_address: "Room 1802, Jinying Building, No. 316 Huanshi Road Middle, Yuexiu District, Guangzhou, China.",
            brand_logo: "assets/logo.jpg",
            ceo_profile_img: "",
            vsl_thumbnail_img: "",
            vsl_video_path: "",
            vsl_youtube_url: "",

            // Section 3: Barra de Confianza (Strip)
            trust_icon_1: "🏢",
            trust_head_1: "Empresa Radicada en China",
            trust_text_1: "Operamos de forma legal y registrada bajo leyes de comercio internacional.",
            trust_icon_2: "🇨🇳",
            trust_head_2: "Oficina en Guangzhou",
            trust_text_2: "Infraestructura física y equipo local de control en los principales puertos chinos.",
            trust_icon_3: "💬",
            trust_head_3: "Canal Oficial WhatsApp",
            trust_text_3: "Seguimiento e informes personalizados en tu idioma de manera constante.",
            trust_icon_4: "🚢",
            trust_head_4: "Acompañamiento Integral",
            trust_text_4: "Toda la documentación gestionada en origen lista para nacionalizar en tu país.",

            // Section 4: Sobre Nosotros e Instagram
            about_tag: "NUESTRA TRAYECTORIA",
            about_title: "Tu Socio Logístico de Confianza en China",
            about_desc_1: "En MLC Master China no operamos como comisionistas digitales improvisados. Somos una estructura de comercio internacional con oficinas corporativas en Guangzhou y almacenes de consolidación en Yiwu. Representamos a empresarios y compradores de habla hispana directamente desde el origen comercial del mundo.",
            about_desc_2: "Nuestra transparencia, seriedad y control riguroso nos han permitido construir una de las comunidades de importación asistida más sólidas y confiables de Latinoamérica:",
            about_ig_followers: "280,000",
            about_ig_screenshot: "",

            // Section 6: Reels de Operaciones en Puerto
            reels_tag: "OPERACIONES EN VIDEO",
            reels_title: "Escrutinio Físico en Tiempo Real",
            reels_subtitle: "Acompaña a nuestro equipo y mira cómo revisamos los autos antes de sellar el contenedor.",
            reel1_title: "Inspección Corolla Cross",
            reel1_desc: "Revisión detallada de chasis, soldaduras y cableado eléctrico en puerto de origen.",
            reel1_views: "84K",
            reel1_thumb: "",
            reel1_video: "",
            reel1_youtube_url: "",
            reel2_title: "Consolidación de Contenedor",
            reel2_desc: "Trincado y fijación del vehículo para evitar daños en el tránsito marítimo.",
            reel2_views: "112K",
            reel2_thumb: "",
            reel2_video: "",
            reel2_youtube_url: "",
            reel3_title: "Oficinas en Guangzhou",
            reel3_desc: "Nuestro equipo coordinando la facturación y licencias de exportación de aduana.",
            reel3_views: "95K",
            reel3_thumb: "",
            reel3_video: "",
            reel3_youtube_url: "",
            reel4_title: "Testimonio de Despacho",
            reel4_desc: "Clientes recibiendo su B/L oficial de embarque marítimo y validando documentos.",
            reel4_views: "72K",
            reel4_thumb: "",
            reel4_video: "",
            reel4_youtube_url: "",

            // Section 8: Estructura de Valores & Costos
            costs_tag: "ESTRUCTURA DE VALORES",
            costs_title: "Transparencia Comercial de Costos",
            costs_subtitle: "Conoce exactamente qué compone el presupuesto y cómo calcular el valor final en tu país.",
            costs_inc_1: "Adquisición en Origen: Compra directa del Toyota Corolla Cross Elite.",
            costs_inc_2: "Inspección Técnica: Validación física de chasis y motor en nuestro almacén logístico.",
            costs_inc_3: "Exportación en China: Trámites aduanales y licencias de salida del puerto chino.",
            costs_inc_4: "Soporte en Español: Coordinación documental y seguimiento con asesores asignados.",
            costs_exc_1: "Flete Marítimo Internacional: Costo del transporte en buque portacontenedor hasta tu puerto.",
            costs_exc_2: "Seguro de Carga: Póliza de protección del vehículo durante el tránsito marítimo.",
            costs_exc_3: "Aranceles e Impuestos Locales: Tasas aduaneras e IVA/IGV de importación en tu país.",
            costs_exc_4: "Agente de Aduana Local: Honorarios del profesional de nacionalización en destino.",

            // Section 9: Características
            feat_tag: "EL VEHÍCULO",
            feat_title: "Toyota Corolla Cross 2.0 Elite Edition",
            feat_subtitle: "Características y equipamiento diseñado para el mercado internacional.",
            feat_icon_1: "⚙️",
            feat_title_1: "Motor 2.0 Dynamic Force",
            feat_desc_1: "Excelente equilibrio entre eficiencia de combustible y potencia dinámica para conducción urbana y viajes largos.",
            feat_icon_2: "🎮",
            feat_title_2: "Direct Shift-CVT",
            feat_desc_2: "Transmisión automática secuencial con simulación inteligente de marchas que garantiza una aceleración lineal y suave.",
            feat_icon_3: "🛡️",
            feat_title_3: "Seguridad Activa Toyota",
            feat_desc_3: "Control de estabilidad (VSC), frenos ABS con distribución electrónica de frenado (EBD) y asistente de arranque en pendientes (HAC).",
            feat_icon_4: "🏢",
            feat_title_4: "Distribuidor Directo Toyota",
            feat_desc_4: "Acceso directo al canal de exportación de Toyota en origen, garantizando configuraciones genuinas de fábrica y precios preferenciales.",

            // Section 10: PDF Promo
            pdf_promo_title: "Ficha Técnica Oficial del Vehículo",
            pdf_promo_desc: "Descarga de forma directa el documento en PDF que contiene las especificaciones detalladas de exportación de la Toyota Corolla Cross 2.0 Elite Edition. Conoce cada dato de motorización, dimensiones, capacidades y equipamiento.",
            pdf_mockup_img: "",

            // Section 11: Otros Modelos
            models_tag: "MÁS OPCIONES",
            models_title: "Otros Modelos Toyota en Origen",
            models_subtitle: "Consulta a nuestro equipo sobre la disponibilidad de importación asistida de estas unidades.",

            // Section 13: Evidencia Operativa y Testimonios
            gallery_tag: "EVIDENCIA OPERATIVA",
            gallery_title: "Acompañamiento en Cada Embarque",
            gallery_subtitle: "Imágenes reales de la supervisión de carga y despachos documentales realizados.",
            gal1_title: "Verificación de Chasis",
            gal1_desc: "Inspección del número de serie y estructura del motor de los autos antes de sellar el contenedor en puerto chino.",
            gal1_img: "",
            gal2_title: "Consolidación en Contenedor",
            gal2_desc: "Trincado y aseguramiento especial en almacén para evitar movimientos durante el tránsito marítimo internacional.",
            gal2_img: "",
            gal3_title: "Soporte de Carga Listo",
            gal3_desc: "Documentación comercial (B/L, packing list y facturas) validada y lista para despacho en las aduanas de destino.",
            gal3_img: "",

            // Section 14: Preguntas Frecuentes Cabecera
            faqs_tag: "RESOLVIENDO DUDAS",
            faqs_title: "Preguntas Frecuentes",
            faqs_subtitle: "Respuestas claras y comerciales sobre nuestro modelo de importación asistida.",

            // Section 15: CTA Final
            cta_final_tag: "EL MOMENTO ES AHORA"
        },
        vehicles: [
            {
                id: "1",
                name: "Toyota Corolla Cross 2.0 Elite Edition",
                price: "14,500",
                short_desc: "Versión de origen exclusiva de exportación con equipamiento premium y alto confort.",
                long_desc: "Este vehículo destaca por su robustez, seguridad activa y el respaldo de la ingeniería Toyota para el mercado internacional.",
                motor: "2.0L Dynamic Force (Gasolina)",
                transmision: "Automática Direct Shift-CVT",
                dimensiones: "4460 / 1825 / 1620 mm",
                seguridad: "ABS, EBD, VSC, HAC, 7 Airbags",
                tecnologia: "Infoentretenimiento premium táctil, Bluetooth, USB",
                observaciones: "Precio base FOB referencial en China. No incluye aranceles locales ni flete.",
                image: "",
                badge: "Destacado",
                status: "active"
            },
            {
                id: "2",
                name: "Toyota Corolla 1.8 Híbrido",
                price: "13,900",
                short_desc: "El sedán de referencia global en eficiencia de combustible autorrecargable y confort de marcha.",
                long_desc: "Excelente eficiencia de combustible en tráfico urbano combinando motor de gasolina y motor eléctrico.",
                motor: "1.8L Híbrido Auto-Recargable",
                transmision: "Automática E-CVT",
                dimensiones: "4630 / 1780 / 1455 mm",
                seguridad: "Toyota Safety Sense, ABS, VSC, 6 Airbags",
                tecnologia: "Pantalla multimedia táctil, Apple CarPlay, Android Auto",
                observaciones: "Sujeto a disponibilidad física en stock de exportación origen.",
                image: "",
                badge: "Híbrido",
                status: "active"
            },
            {
                id: "3",
                name: "Toyota RAV4",
                price: "18,500",
                short_desc: "Excelente amplitud interior, motorización potente y tracción adaptada para todo tipo de terrenos.",
                long_desc: "La SUV mediana líder en el segmento familiar por confort, seguridad y espacio de carga.",
                motor: "2.0L o 2.5L Gasolina / Híbrida",
                transmision: "Automática Direct Shift de 8 vel / CVT",
                dimensiones: "4600 / 1855 / 1685 mm",
                seguridad: "Frenado autónomo, control dinámico de carril, 7 Airbags",
                tecnologia: "Climatizador bizona, panel digital, puertos de carga rápida",
                observaciones: "Tarifas de flete y aranceles varían por país de destino.",
                image: "",
                badge: "SUV Premium",
                status: "active"
            }
        ],
        faqs: [
            { question: "¿Cómo sé que MLC Master China es una empresa real?", answer: "Somos una empresa de comercio internacional legalmente establecida, con oficina principal en Guangzhou y equipo operativo local. Invitamos a nuestros clientes a interactuar a través de canales oficiales y proporcionamos reportes de verificación física que demuestran nuestra presencia en los puertos de origen en China." },
            { question: "¿Qué garantías tengo durante el proceso de compra e importación?", answer: "Ofrecemos respaldo y seguimiento comercial documentado. Firmamos un acuerdo de gestión donde se establecen los términos de la importación y te brindamos un reporte técnico de inspección con fotos y videos de tu vehículo (chasis y motor) antes del despacho marítimo." },
            { question: "¿El precio de USD 14,500 es el valor total a pagar por el auto?", answer: "No. Ese es el precio base referencial FOB en puerto de origen (China). Para calcular el costo total de tener el carro en tu país, se deben contemplar el flete marítimo, el seguro de carga y los aranceles e impuestos de nacionalización correspondientes a tu aduana local." },
            { question: "¿Cómo se coordinan los trámites de aduana en mi país?", answer: "MLC Master China gestiona y te entrega toda la documentación de exportación requerida desde China (B/L, Factura, Packing List). Con estos documentos, tu agente de aduanas local realiza la nacionalización de manera directa. Si no cuentas con uno, podemos ponerte en contacto con agentes de aduana de confianza en tu país." },
            { question: "¿Qué otros modelos Toyota están disponibles para cotizar?", answer: "Además del Corolla Cross 2.0 Elite Edition, gestionamos la adquisición del Toyota Corolla 1.8 Híbrido y la Toyota RAV4, adaptados para exportación según la disponibilidad de mercado en China." },
            { question: "¿Cuánto tiempo tarda la entrega del vehículo en mi puerto?", answer: "El proceso logístico completo suele tomar entre 45 y 75 días promedio. Esto abarca la compra y traslado al puerto chino, la inspección técnica, la consolidación en contenedor y el trayecto marítimo internacional según las rutas navieras disponibles." }
        ],
        testimonials: [
            { name: "Carlos M. (Chile)", content: "Excelente acompañamiento. Recibí mi Corolla Cross en San Antonio tal como lo planificamos. El reporte fotográfico en origen me dio total tranquilidad.", type: "Chile" },
            { name: "Sofía R. (Perú)", content: "El equipo de MLC Master China en Guangzhou revisó el número de chasis físicamente y me envió videos. La nacionalización en Callao fue muy sencilla con sus documentos.", type: "Perú" },
            { name: "Juan P. (Colombia)", content: "Muy serios y transparentes con el desglose de los costos de flete aduanal. Logré un ahorro importante comprando directo en origen.", type: "Colombia" }
        ],
        media_library: [
            { name: "corolla-cross.png", path: "", type: "Vehículos" },
            { name: "ceo-alex.png", path: "", type: "CEO / Autoridad" },
            { name: "pdf-mockup.png", path: "", type: "Mockups" },
            { name: "logo.jpg", path: "assets/logo.jpg", type: "Logos" }
        ],
        page_settings: {
            whatsapp_phone: "8618072304859",
            instagram_followers: "280,000",
            toggle_vsl: true,
            toggle_reels: true,
            toggle_about: true,
            toggle_pdf: true,
            toggle_models: true,
            admin_user: "admin",
            admin_pass: "mlcmasterchina2026"
        },
        pdf_config: {
            selected_vehicle_id: "1",
            title: "Ficha de Especificaciones Técnicas y Comerciales: Toyota Corolla Cross 2.0 Elite Edition",
            subtitle: "Catálogo de Importación Directa desde Origen (China)",
            summary: "Este documento oficial referencial consolida las especificaciones y equipamiento detallado de la versión Elite Edition para exportación. Adquiere tu vehículo al precio base de origen asistido por el equipo de profesionales logísticos de MLC Master China.",
            legal: "Este documento es de carácter estrictamente comercial e informativo. Las especificaciones finales del vehículo y las opciones de equipamiento están sujetas a variaciones del fabricante y a disponibilidad física al momento de formalizar la orden.",
            published_pdf_base64: "", // Base64 data for public page download
            spec_combustible: "Gasolina",
            spec_color_exterior: "Pearl White",
            spec_color_interior: "Negro",
            spec_entrega: "Inmediata / Importación Directa",
            spec_idioma: "Español",
            spec_asientos: "Tela",
            gallery_img_1: "",
            gallery_img_2: "",
            gallery_img_3: "",
            gallery_img_4: "",
            gallery_img_5: "",
            gallery_img_6: "",
            gallery_cap_1: "Detalle interior",
            gallery_cap_2: "Detalle interior",
            gallery_cap_3: "Detalle interior",
            gallery_cap_4: "Detalle interior",
            gallery_cap_5: "Detalle interior",
            gallery_cap_6: "Detalle interior"
        }
    };

    // === IN-MEMORY DATABASE STATE ===
    let currentDBState = null;
    let hasUnpublishedChanges = false;

    // === LOAD .ENV CONFIGURATION ===
    async function loadEnvConfig() {
        try {
            const response = await fetch('.env');
            if (response.ok) {
                const text = await response.text();
                const env = {};
                text.split('\n').forEach(line => {
                    if (line.trim() === '' || line.trim().startsWith('#')) return;
                    const parts = line.split('=');
                    if (parts.length >= 2) {
                        const key = parts[0].trim();
                        const val = parts.slice(1).join('=').trim();
                        env[key] = val;
                    }
                });
                
                if (env.ADMIN_USER) {
                    currentDBState.page_settings.admin_user = env.ADMIN_USER;
                }
                if (env.ADMIN_PASS) {
                    currentDBState.page_settings.admin_pass = env.ADMIN_PASS;
                }
                console.log("Configuración .env cargada con éxito.");
            }
        } catch (error) {
            console.warn("No se encontró archivo .env o no pudo ser leído. Utilizando credenciales de base de datos.", error);
        }
    }

    async function initDatabase() {
        // Initialize IndexedDB and migrate if necessary
        await MLCDatabase.init();

        // Check if DB exists in IndexedDB/Supabase in parallel to reduce network latency
        const [liveDB, draftDB] = await Promise.all([
            MLCDatabase.getLive(),
            MLCDatabase.getDraft()
        ]);

        if (!liveDB) {
            let initialDB = DEFAULT_DB;
            try {
                const response = await fetch('default_db.json');
                if (response.ok) {
                    const fetchedDB = await response.json();
                    if (fetchedDB && fetchedDB.landing_texts && fetchedDB.page_settings) {
                        initialDB = fetchedDB;
                        console.log("[IndexedDB] Inicializado con base de datos predeterminada (default_db.json) exitosamente.");
                    }
                }
            } catch (err) {
                console.info("[IndexedDB] No se encontró default_db.json personalizado. Utilizando DEFAULT_DB estático.");
            }
            await MLCDatabase.saveLive(initialDB);
            await MLCDatabase.saveDraft(initialDB);
            currentDBState = JSON.parse(JSON.stringify(initialDB));
        } else {
            // Load draft and deep merge with DEFAULT_DB to ensure any new keys/schemas (e.g. badges) are loaded
            const mergedState = deepMerge(DEFAULT_DB, draftDB || liveDB);
            
            // Ensure each vehicle has all fields from DEFAULT_DB definition
            if (mergedState.vehicles && Array.isArray(mergedState.vehicles)) {
                mergedState.vehicles.forEach(v => {
                    const defV = DEFAULT_DB.vehicles.find(item => item.id === v.id);
                    if (defV) {
                        Object.keys(defV).forEach(key => {
                            if (v[key] === undefined) {
                                v[key] = defV[key];
                            }
                        });
                    } else {
                        if (v.badge === undefined) v.badge = "";
                        if (v.image === undefined) v.image = "";
                    }
                });
            }
            currentDBState = mergedState;

            // Check if draft differs from live to set status badge
            if (draftDB && liveDB && JSON.stringify(draftDB) !== JSON.stringify(liveDB)) {
                setUnpublishedChanges(true);
            }
        }

        // Override credentials with .env values
        await loadEnvConfig();
    }

    function checkAuth() {
        const isAuthed = sessionStorage.getItem('mlc_admin_auth') === 'true';
        const loginScreen = document.getElementById('login-screen');
        const adminPanel = document.getElementById('admin-panel');

        if (isAuthed) {
            loginScreen.style.display = 'none';
            adminPanel.style.display = 'flex';
            loadDashboardData();
            loadAllFormsData();
        } else {
            loginScreen.style.display = 'flex';
            adminPanel.style.display = 'none';
        }
    }

    // Initialize Database
    initDatabase().then(() => {
        checkAuth();
    }).catch(err => {
        console.error("Database initialization failed:", err);
        alert("❌ Error al inicializar la base de datos: " + (err.message || err.name || JSON.stringify(err)));
    });

    // === LOGIN PORTAL FORM SUBMIT ===
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error-msg');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!currentDBState) {
                alert("⚠️ La base de datos aún se está conectando con Supabase. Por favor, espera un momento y vuelve a intentarlo.");
                return;
            }

            const userVal = document.getElementById('login-username').value;
            const passVal = document.getElementById('login-password').value;

            // Validate against page_settings credentials
            const adminUser = currentDBState.page_settings.admin_user;
            const adminPass = currentDBState.page_settings.admin_pass;

            if (userVal === adminUser && passVal === adminPass) {
                sessionStorage.setItem('mlc_admin_auth', 'true');
                loginError.style.display = 'none';
                logActivity("Inicio de sesión exitoso administrador.");
                checkAuth();
            } else {
                loginError.style.display = 'block';
            }
        });
    }

    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('mlc_admin_auth');
            checkAuth();
        });
    }

    // === STATE MANAGEMENT ===
    function setUnpublishedChanges(state) {
        hasUnpublishedChanges = state;
        const badge = document.getElementById('db-status-badge');
        const dashBadge = document.getElementById('dash-db-status');
        
        if (state) {
            badge.textContent = "Cambios Guardados Localmente (Sin publicar)";
            badge.className = "db-status-badge status-changed";
            if (dashBadge) {
                dashBadge.textContent = "Pendiente de publicar";
                dashBadge.className = "text-gold";
            }
        } else {
            badge.textContent = "Publicado y en vivo";
            badge.className = "db-status-badge status-published";
            if (dashBadge) {
                dashBadge.textContent = "Sincronizado";
                dashBadge.className = "text-green";
            }
        }
    }

    async function saveDraftToStore() {
        try {
            await MLCDatabase.saveDraft(currentDBState);
            setUnpublishedChanges(true);
        } catch (e) {
            console.error("Error al guardar borrador en IndexedDB:", e);
            alert("❌ Error al guardar borrador: " + (e.message || e.name || JSON.stringify(e)));
        }
    }

    // Publish changes live to make them readable by index.html
    const btnPublish = document.getElementById('btn-publish-db');
    if (btnPublish) {
        btnPublish.addEventListener('click', async () => {
            // Always sync ALL form values before publishing
            syncLandingTextsToState();
            syncSettingsToState();

            // Diagnostic: confirm what phone number is being published
            const phoneBeingPublished = currentDBState.page_settings.whatsapp_phone;
            console.log('[PUBLISH] Número WhatsApp que se va a publicar:', phoneBeingPublished);

            try {
                await MLCDatabase.saveDraft(currentDBState);
                await MLCDatabase.saveLive(currentDBState);

                // Auto-save default_db.json on disk if running on localhost
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    try {
                        const saveResponse = await fetch('/api/save-db', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(currentDBState)
                        });
                        if (saveResponse.ok) {
                            console.log('[Dev Server] default_db.json guardado automáticamente en disco.');
                        } else {
                            console.warn('[Dev Server] Error al intentar guardar default_db.json en disco.');
                        }
                    } catch (err) {
                        console.info('[Dev Server] No se pudo guardar automáticamente en disco (servidor no disponible o estático).');
                    }
                }

                // Verify it was actually written
                const verifyLive = await MLCDatabase.getLive();
                console.log('[PUBLISH] Número guardado en IndexedDB (verificación):', verifyLive.page_settings.whatsapp_phone);

                setUnpublishedChanges(false);
                logActivity(`Publicado. Teléfono WhatsApp activo: ${phoneBeingPublished}`);
                alert(`🚀 ¡Cambios publicados!\n\nNúmero WhatsApp activo: ${phoneBeingPublished}\n\nRefresca tu landing pública (Ctrl+Shift+R) para ver los cambios.`);
            } catch (e) {
                console.error("[PUBLISH] Error al publicar cambios en IndexedDB:", e);
                alert("❌ Error al publicar cambios. Por favor, revisa la consola.");
            }
        });
    }

    // Preview landing page
    const btnPreview = document.getElementById('btn-preview-landing');
    if (btnPreview) {
        btnPreview.addEventListener('click', () => {
            window.open('index.html', '_blank');
        });
    }

    // === ACTIVITY LOGGER ===
    function logActivity(message) {
        const time = new Date().toLocaleTimeString();
        const list = document.getElementById('activity-log-list');
        if (list) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="log-time">Hoy ${time}</span><p>${message}</p>`;
            list.insertBefore(li, list.firstChild);
            
            // Keep logs to max 8 items
            if (list.children.length > 8) {
                list.removeChild(list.lastChild);
            }
        }
    }

    // === TAB NAVIGATOR ===
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabTitleText = document.getElementById('tab-title-text');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');

            navItems.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            item.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            tabTitleText.textContent = item.querySelector('span:nth-child(2)').textContent;

            // Trigger specific rendering if needed
            if (tabId === 'tab-vehicles') renderVehiclesTable();
            if (tabId === 'tab-media') renderMediaGrid();
            if (tabId === 'tab-faqs') {
                renderFaqsList();
                renderTestimonialsList();
            }
            if (tabId === 'tab-pdf') {
                populatePdfForm();
                updatePdfPreview();
            }
            if (tabId === 'tab-leads') {
                renderLeadsTable();
            }
            if (tabId === 'tab-dashboard') loadDashboardData();
        });
    });

    // Handle dashboard quick action links
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.quick-action-btn');
        if (btn) {
            const targetTabId = btn.getAttribute('data-target-tab');
            const correspondingNav = document.querySelector(`.nav-item[data-tab="${targetTabId}"]`);
            if (correspondingNav) {
                correspondingNav.click();
            }
        }
    });

    // === DASHBOARD STATS REFRESH ===
    function loadDashboardData() {
        const vehCount = currentDBState.vehicles.filter(v => v.status === 'active').length;
        document.getElementById('dash-veh-count').textContent = `${vehCount} Modelos activos`;
        
        const hasPDF = currentDBState.pdf_config.published_pdf_base64 !== "" ? "Ficha Activa" : "Sin publicar";
        document.getElementById('dash-pdf-count').textContent = hasPDF;
    }

    // === LEADS MANAGEMENT & VISUALIZATION ===
    async function renderLeadsTable() {
        const body = document.getElementById('leads-table-body');
        if (!body) return;
        body.innerHTML = "<tr><td colspan='5' style='text-align:center;'>Cargando leads...</td></tr>";
        
        let leads = [];
        try {
            leads = await MLCDatabase.getLeads();
        } catch (err) {
            console.warn("[Admin Leads] Error cargando leads de base de datos:", err);
        }
        
        if (leads.length === 0) {
            body.innerHTML = "<tr><td colspan='5' style='text-align:center;color:var(--text-muted);padding:20px 0;'>No se han capturado leads aún.</td></tr>";
            return;
        }
        
        // Sort by timestamp descending
        leads.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        body.innerHTML = "";
        leads.forEach(lead => {
            const tr = document.createElement('tr');
            const dateStr = new Date(lead.timestamp).toLocaleString('es-ES');
            tr.innerHTML = `
                <td>${dateStr}</td>
                <td><strong>${lead.name}</strong></td>
                <td><a href="mailto:${lead.email}" style="color:var(--gold);text-decoration:underline;">${lead.email}</a></td>
                <td>${lead.whatsapp !== "No provisto" ? `<a href="https://api.whatsapp.com/send?phone=${lead.whatsapp.replace(/\D/g,'')}" target="_blank" style="color:var(--text-light);display:flex;align-items:center;gap:4px;">🟢 ${lead.whatsapp}</a>` : `<span style="color:var(--text-muted);">${lead.whatsapp}</span>`}</td>
                <td><span class="db-status-badge status-published" style="font-size:0.75rem;padding:2px 8px;background:rgba(177,151,107,0.15);color:var(--gold);border-color:var(--gold);">${lead.vehicle}</span></td>
            `;
            body.appendChild(tr);
        });
    }

    // CSV Export trigger
    const btnExportLeads = document.getElementById('btn-export-leads-csv');
    if (btnExportLeads) {
        btnExportLeads.addEventListener('click', async () => {
            let leads = [];
            try {
                const res = await fetch('/api/get-leads');
                if (res.ok) leads = await res.json();
            } catch (e) {}
            try {
                const localLeads = await MLCDatabase.getLeads();
                if (localLeads && localLeads.length > leads.length) leads = localLeads;
            } catch (e) {}
            
            if (leads.length === 0) {
                alert("No hay leads registrados para exportar.");
                return;
            }
            
            leads.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            
            // CSV construction with BOM for Excel UTF-8
            let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
            csvContent += "Fecha/Hora,Nombre Completo,Correo Electrónico,WhatsApp,Vehículo de Interés\n";
            
            leads.forEach(l => {
                const dateStr = new Date(l.timestamp).toLocaleString('es-ES');
                const name = `"${l.name.replace(/"/g, '""')}"`;
                const email = `"${l.email.replace(/"/g, '""')}"`;
                const whatsapp = `"${l.whatsapp.replace(/"/g, '""')}"`;
                const vehicle = `"${l.vehicle.replace(/"/g, '""')}"`;
                csvContent += `${dateStr},${name},${email},${whatsapp},${vehicle}\n`;
            });
            
            const encodedUri = encodeURI(csvContent);
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", encodedUri);
            downloadAnchor.setAttribute("download", `MLC_Prospectos_${new Date().toISOString().split('T')[0]}.csv`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        });
    }

    // === LOAD FORMS DATA ===
    function loadAllFormsData() {
        // Tab Content Landing
        const lt = currentDBState.landing_texts;
        
        // Section 1
        if (document.getElementById('top-bar-text-input')) document.getElementById('top-bar-text-input').value = lt.top_bar_text || "";

        // Section 2
        document.getElementById('hero-title-input').value = lt.hero_title || "";
        document.getElementById('hero-desc-input').value = lt.hero_desc || "";
        document.getElementById('hero-price-input').value = lt.hero_price || "";
        document.getElementById('hero-disclaimer-input').value = lt.hero_disclaimer || "";
        if (document.getElementById('hero-youtube-url-input')) {
            const savedYtUrl = lt.hero_youtube_url || "";
            document.getElementById('hero-youtube-url-input').value = savedYtUrl;
            if (savedYtUrl) updateHeroYtPreview(savedYtUrl);
        }
        
        // Section 3
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`trust-icon-${i}-input`)) document.getElementById(`trust-icon-${i}-input`).value = lt[`trust_icon_${i}`] || "";
            if (document.getElementById(`trust-head-${i}-input`)) document.getElementById(`trust-head-${i}-input`).value = lt[`trust_head_${i}`] || "";
            if (document.getElementById(`trust-text-${i}-input`)) document.getElementById(`trust-text-${i}-input`).value = lt[`trust_text_${i}`] || "";
        }

        // Section 4
        if (document.getElementById('about-tag-input')) document.getElementById('about-tag-input').value = lt.about_tag || "";
        if (document.getElementById('about-title-input')) document.getElementById('about-title-input').value = lt.about_title || "";
        if (document.getElementById('about-desc-1-input')) document.getElementById('about-desc-1-input').value = lt.about_desc_1 || "";
        if (document.getElementById('about-desc-2-input')) document.getElementById('about-desc-2-input').value = lt.about_desc_2 || "";
        if (document.getElementById('about-ig-followers-input')) document.getElementById('about-ig-followers-input').value = lt.about_ig_followers || "";

        // Instagram Screenshot Preview
        const igScreenshotPrev = document.getElementById('about-ig-screenshot-preview');
        if (igScreenshotPrev) igScreenshotPrev.src = lt.about_ig_screenshot || "";
        const wfIgScreenshotPrev = document.getElementById('wf-ig-screenshot-preview');
        if (wfIgScreenshotPrev) wfIgScreenshotPrev.style.backgroundImage = `url('${lt.about_ig_screenshot || ""}')`;

        // Section 5
        document.getElementById('vsl-title-input').value = lt.vsl_title || "";
        document.getElementById('vsl-subtitle-input').value = lt.vsl_subtitle || "";
        document.getElementById('vsl-tag-input').value = lt.vsl_tag || "";
        if (document.getElementById('vsl-youtube-url-input')) {
            const savedVslYtUrl = lt.vsl_youtube_url || "";
            document.getElementById('vsl-youtube-url-input').value = savedVslYtUrl;
            if (savedVslYtUrl) updateVslYtPreview(savedVslYtUrl);
        }

        // Section 6
        if (document.getElementById('reels-tag-input')) document.getElementById('reels-tag-input').value = lt.reels_tag || "";
        if (document.getElementById('reels-title-input')) document.getElementById('reels-title-input').value = lt.reels_title || "";
        if (document.getElementById('reels-subtitle-input')) document.getElementById('reels-subtitle-input').value = lt.reels_subtitle || "";
        
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`reel${i}-title-input`)) document.getElementById(`reel${i}-title-input`).value = lt[`reel${i}_title`] || "";
            if (document.getElementById(`reel${i}-desc-input`)) document.getElementById(`reel${i}-desc-input`).value = lt[`reel${i}_desc`] || "";
            if (document.getElementById(`reel${i}-views-input`)) document.getElementById(`reel${i}-views-input`).value = lt[`reel${i}_views`] || "";
            
            const reelThumbPrev = document.getElementById(`reel${i}-thumb-preview`);
            if (reelThumbPrev) reelThumbPrev.src = lt[`reel${i}_thumb`] || "";
            
            const reelStatus = document.getElementById(`reel${i}-video-status`);
            if (reelStatus) {
                if (lt[`reel${i}_video`]) {
                    reelStatus.textContent = "Video cargado";
                    reelStatus.style.color = "#b1976b";
                } else {
                    reelStatus.textContent = "Default";
                    reelStatus.style.color = "var(--text-muted)";
                }
            }

            const reelYtInput = document.getElementById(`reel${i}-youtube-url-input`);
            if (reelYtInput) {
                reelYtInput.value = lt[`reel${i}_youtube_url`] || "";
            }
        }

        // Section 7
        document.getElementById('ceo-title-input').value = lt.ceo_title || "";
        document.getElementById('ceo-desc-input').value = lt.ceo_desc || "";
        document.getElementById('ceo-quote-input').value = lt.ceo_quote || "";
        for (let i = 1; i <= 3; i++) {
            if (document.getElementById(`fam-point-title-${i}-input`)) {
                document.getElementById(`fam-point-title-${i}-input`).value = lt[`fam_point_title_${i}`] || "";
            }
            if (document.getElementById(`fam-point-desc-${i}-input`)) {
                document.getElementById(`fam-point-desc-${i}-input`).value = lt[`fam_point_desc_${i}`] || "";
            }
        }

        // Section 8
        if (document.getElementById('costs-tag-input')) document.getElementById('costs-tag-input').value = lt.costs_tag || "";
        if (document.getElementById('costs-title-input')) document.getElementById('costs-title-input').value = lt.costs_title || "";
        if (document.getElementById('costs-subtitle-input')) document.getElementById('costs-subtitle-input').value = lt.costs_subtitle || "";
        
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`costs-inc-${i}-input`)) document.getElementById(`costs-inc-${i}-input`).value = lt[`costs_inc_${i}`] || "";
            if (document.getElementById(`costs-exc-${i}-input`)) document.getElementById(`costs-exc-${i}-input`).value = lt[`costs_exc_${i}`] || "";
        }

        // Section 9
        if (document.getElementById('feat-tag-input')) document.getElementById('feat-tag-input').value = lt.feat_tag || "";
        if (document.getElementById('feat-title-input')) document.getElementById('feat-title-input').value = lt.feat_title || "";
        if (document.getElementById('feat-subtitle-input')) document.getElementById('feat-subtitle-input').value = lt.feat_subtitle || "";
        
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`feat-icon-${i}-input`)) document.getElementById(`feat-icon-${i}-input`).value = lt[`feat_icon_${i}`] || "";
            if (document.getElementById(`feat-title-${i}-input`)) document.getElementById(`feat-title-${i}-input`).value = lt[`feat_title_${i}`] || "";
            if (document.getElementById(`feat-desc-${i}-input`)) document.getElementById(`feat-desc-${i}-input`).value = lt[`feat_desc_${i}`] || "";
        }

        // Section 10
        if (document.getElementById('pdf-promo-title-input')) document.getElementById('pdf-promo-title-input').value = lt.pdf_promo_title || "";
        if (document.getElementById('pdf-promo-desc-input')) document.getElementById('pdf-promo-desc-input').value = lt.pdf_promo_desc || "";
        
        const pdfMockupPrev = document.getElementById('pdf-mockup-preview');
        if (pdfMockupPrev) pdfMockupPrev.src = lt.pdf_mockup_img || "";

        // Section 11
        if (document.getElementById('models-tag-input')) document.getElementById('models-tag-input').value = lt.models_tag || "";
        if (document.getElementById('models-title-input')) document.getElementById('models-title-input').value = lt.models_title || "";
        if (document.getElementById('models-subtitle-input')) document.getElementById('models-subtitle-input').value = lt.models_subtitle || "";
        renderSection11Models();

        // Section 12
        document.getElementById('wh-title-input').value = lt.wh_title || "";
        document.getElementById('wh-desc-input').value = lt.wh_desc || "";

        // Section 13
        if (document.getElementById('gallery-tag-input')) document.getElementById('gallery-tag-input').value = lt.gallery_tag || "";
        if (document.getElementById('gallery-title-input')) document.getElementById('gallery-title-input').value = lt.gallery_title || "";
        if (document.getElementById('gallery-subtitle-input')) document.getElementById('gallery-subtitle-input').value = lt.gallery_subtitle || "";
        
        for (let i = 1; i <= 3; i++) {
            if (document.getElementById(`gal${i}-title-input`)) document.getElementById(`gal${i}-title-input`).value = lt[`gal${i}_title`] || "";
            if (document.getElementById(`gal${i}-desc-input`)) document.getElementById(`gal${i}-desc-input`).value = lt[`gal${i}_desc`] || "";
            
            const galImgPrev = document.getElementById(`gal${i}-img-preview`);
            if (galImgPrev) galImgPrev.src = lt[`gal${i}_img`] || "";
        }

        // Section 14
        if (document.getElementById('faqs-tag-input')) document.getElementById('faqs-tag-input').value = lt.faqs_tag || "";
        if (document.getElementById('faqs-title-input')) document.getElementById('faqs-title-input').value = lt.faqs_title || "";
        if (document.getElementById('faqs-subtitle-input')) document.getElementById('faqs-subtitle-input').value = lt.faqs_subtitle || "";

        // Section 15
        if (document.getElementById('cta-final-tag-input')) document.getElementById('cta-final-tag-input').value = lt.cta_final_tag || "";

        // Section 16
        document.getElementById('footer-desc-input').value = lt.footer_desc || "";
        document.getElementById('footer-address-input').value = lt.footer_address || "";

        // Load media previews & sync wireframe visuals
        const logoPath = lt.brand_logo || "assets/logo.jpg";
        const logoPreview = document.getElementById('brand-logo-preview');
        if (logoPreview) logoPreview.src = logoPath;
        const wfFooterLogo = document.getElementById('wf-footer-logo-preview');
        if (wfFooterLogo) wfFooterLogo.style.backgroundImage = `url(${logoPath})`;

        const ceoPath = lt.ceo_profile_img || "";
        const ceoPreview = document.getElementById('ceo-img-preview');
        if (ceoPreview) ceoPreview.src = ceoPath;
        const wfCeoProfile = document.getElementById('wf-ceo-profile-preview');
        if (wfCeoProfile) wfCeoProfile.style.backgroundImage = `url(${ceoPath})`;

        const vslThumbPath = lt.vsl_thumbnail_img || "";
        const vslThumbPreview = document.getElementById('vsl-thumb-preview');
        if (vslThumbPreview) vslThumbPreview.src = vslThumbPath;
        const wfVslVideo = document.getElementById('wf-vsl-video-box');
        if (wfVslVideo) wfVslVideo.style.backgroundImage = `url(${vslThumbPath})`;

        const vslVideoStatus = document.getElementById('vsl-video-status');
        if (vslVideoStatus) {
            if (lt.vsl_video_path) {
                vslVideoStatus.textContent = "Video cargado (Listo)";
                vslVideoStatus.style.color = "#b1976b";
            } else {
                vslVideoStatus.textContent = "Simulado por defecto";
                vslVideoStatus.style.color = "var(--text-muted)";
            }
        }

        const primaryId = currentDBState.pdf_config.selected_vehicle_id || "1";
        const primaryVehicle = currentDBState.vehicles.find(v => v.id === primaryId) || currentDBState.vehicles[0];
        if (primaryVehicle) {
            const heroPreview = document.getElementById('hero-img-preview');
            if (heroPreview) heroPreview.src = primaryVehicle.image;
            const wfHeroCar = document.getElementById('wf-hero-car-preview');
            if (wfHeroCar) wfHeroCar.style.backgroundImage = `url(${primaryVehicle.image})`;
        }

        // Settings Tab
        const settings = currentDBState.page_settings;
        document.getElementById('set-whatsapp-phone').value = settings.whatsapp_phone;
        document.getElementById('set-instagram-followers').value = settings.instagram_followers;
        document.getElementById('toggle-vsl').checked = settings.toggle_vsl;
        document.getElementById('toggle-reels').checked = settings.toggle_reels;
        document.getElementById('toggle-about').checked = settings.toggle_about;
        document.getElementById('toggle-pdf').checked = settings.toggle_pdf;
        document.getElementById('toggle-models').checked = settings.toggle_models;
        document.getElementById('set-admin-username').value = settings.admin_user;
        document.getElementById('set-admin-password').value = ""; // Keep blank initially
    }

    // === SYNC SETTINGS FROM FORM TO STATE ===
    function syncSettingsToState() {
        const settings = currentDBState.page_settings;
        const wpField = document.getElementById('set-whatsapp-phone');
        const igField = document.getElementById('set-instagram-followers');
        const toggleVsl = document.getElementById('toggle-vsl');
        const toggleReels = document.getElementById('toggle-reels');
        const toggleAbout = document.getElementById('toggle-about');
        const togglePdf = document.getElementById('toggle-pdf');
        const toggleModels = document.getElementById('toggle-models');
        const userField = document.getElementById('set-admin-username');
        const passField = document.getElementById('set-admin-password');

        console.log('[syncSettings] wpField encontrado:', !!wpField, '| valor:', wpField ? wpField.value : 'N/A');
        console.log('[syncSettings] phone anterior en state:', settings.whatsapp_phone);

        if (wpField) settings.whatsapp_phone = wpField.value.trim();
        if (igField) settings.instagram_followers = igField.value;
        if (toggleVsl) settings.toggle_vsl = toggleVsl.checked;
        if (toggleReels) settings.toggle_reels = toggleReels.checked;
        if (toggleAbout) settings.toggle_about = toggleAbout.checked;
        if (togglePdf) settings.toggle_pdf = togglePdf.checked;
        if (toggleModels) settings.toggle_models = toggleModels.checked;
        if (userField && userField.value.trim() !== '') settings.admin_user = userField.value.trim();
        if (passField && passField.value.trim() !== '') settings.admin_pass = passField.value.trim();

        console.log('[syncSettings] phone actualizado en state:', settings.whatsapp_phone);
    }

    // === SYNC LANDING TEXTS FROM FORM TO STATE ===
    function syncLandingTextsToState() {
        const lt = currentDBState.landing_texts;

        // Section 1
        if (document.getElementById('top-bar-text-input')) lt.top_bar_text = document.getElementById('top-bar-text-input').value;

        // Section 2
        if (document.getElementById('hero-title-input')) lt.hero_title = document.getElementById('hero-title-input').value;
        if (document.getElementById('hero-desc-input')) lt.hero_desc = document.getElementById('hero-desc-input').value;
        if (document.getElementById('hero-price-input')) lt.hero_price = document.getElementById('hero-price-input').value;
        if (document.getElementById('hero-disclaimer-input')) lt.hero_disclaimer = document.getElementById('hero-disclaimer-input').value;
        if (document.getElementById('hero-youtube-url-input')) lt.hero_youtube_url = document.getElementById('hero-youtube-url-input').value.trim();

        // Section 3
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`trust-icon-${i}-input`)) lt[`trust_icon_${i}`] = document.getElementById(`trust-icon-${i}-input`).value;
            if (document.getElementById(`trust-head-${i}-input`)) lt[`trust_head_${i}`] = document.getElementById(`trust-head-${i}-input`).value;
            if (document.getElementById(`trust-text-${i}-input`)) lt[`trust_text_${i}`] = document.getElementById(`trust-text-${i}-input`).value;
        }

        // Section 4
        if (document.getElementById('about-tag-input')) lt.about_tag = document.getElementById('about-tag-input').value;
        if (document.getElementById('about-title-input')) lt.about_title = document.getElementById('about-title-input').value;
        if (document.getElementById('about-desc-1-input')) lt.about_desc_1 = document.getElementById('about-desc-1-input').value;
        if (document.getElementById('about-desc-2-input')) lt.about_desc_2 = document.getElementById('about-desc-2-input').value;
        if (document.getElementById('about-ig-followers-input')) lt.about_ig_followers = document.getElementById('about-ig-followers-input').value;
        if (document.getElementById('about-ig-posts-input')) lt.about_ig_posts = document.getElementById('about-ig-posts-input').value;

        // Section 5
        if (document.getElementById('vsl-title-input')) lt.vsl_title = document.getElementById('vsl-title-input').value;
        if (document.getElementById('vsl-subtitle-input')) lt.vsl_subtitle = document.getElementById('vsl-subtitle-input').value;
        if (document.getElementById('vsl-tag-input')) lt.vsl_tag = document.getElementById('vsl-tag-input').value;
        if (document.getElementById('vsl-youtube-url-input')) lt.vsl_youtube_url = document.getElementById('vsl-youtube-url-input').value.trim();

        // Section 6
        if (document.getElementById('reels-tag-input')) lt.reels_tag = document.getElementById('reels-tag-input').value;
        if (document.getElementById('reels-title-input')) lt.reels_title = document.getElementById('reels-title-input').value;
        if (document.getElementById('reels-subtitle-input')) lt.reels_subtitle = document.getElementById('reels-subtitle-input').value;
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`reel${i}-title-input`)) lt[`reel${i}_title`] = document.getElementById(`reel${i}-title-input`).value;
            if (document.getElementById(`reel${i}-desc-input`)) lt[`reel${i}_desc`] = document.getElementById(`reel${i}-desc-input`).value;
            if (document.getElementById(`reel${i}-views-input`)) lt[`reel${i}_views`] = document.getElementById(`reel${i}-views-input`).value;
            if (document.getElementById(`reel${i}-youtube-url-input`)) lt[`reel${i}_youtube_url`] = document.getElementById(`reel${i}-youtube-url-input`).value.trim();
        }

        // Section 7
        if (document.getElementById('ceo-title-input')) lt.ceo_title = document.getElementById('ceo-title-input').value;
        if (document.getElementById('ceo-desc-input')) lt.ceo_desc = document.getElementById('ceo-desc-input').value;
        if (document.getElementById('ceo-quote-input')) lt.ceo_quote = document.getElementById('ceo-quote-input').value;
        for (let i = 1; i <= 3; i++) {
            if (document.getElementById(`fam-point-title-${i}-input`)) {
                lt[`fam_point_title_${i}`] = document.getElementById(`fam-point-title-${i}-input`).value;
            }
            if (document.getElementById(`fam-point-desc-${i}-input`)) {
                lt[`fam_point_desc_${i}`] = document.getElementById(`fam-point-desc-${i}-input`).value;
            }
        }

        // Section 8
        if (document.getElementById('costs-tag-input')) lt.costs_tag = document.getElementById('costs-tag-input').value;
        if (document.getElementById('costs-title-input')) lt.costs_title = document.getElementById('costs-title-input').value;
        if (document.getElementById('costs-subtitle-input')) lt.costs_subtitle = document.getElementById('costs-subtitle-input').value;
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`costs-inc-${i}-input`)) lt[`costs_inc_${i}`] = document.getElementById(`costs-inc-${i}-input`).value;
            if (document.getElementById(`costs-exc-${i}-input`)) lt[`costs_exc_${i}`] = document.getElementById(`costs-exc-${i}-input`).value;
        }

        // Section 9
        if (document.getElementById('feat-tag-input')) lt.feat_tag = document.getElementById('feat-tag-input').value;
        if (document.getElementById('feat-title-input')) lt.feat_title = document.getElementById('feat-title-input').value;
        if (document.getElementById('feat-subtitle-input')) lt.feat_subtitle = document.getElementById('feat-subtitle-input').value;
        for (let i = 1; i <= 4; i++) {
            if (document.getElementById(`feat-icon-${i}-input`)) lt[`feat_icon_${i}`] = document.getElementById(`feat-icon-${i}-input`).value;
            if (document.getElementById(`feat-title-${i}-input`)) lt[`feat_title_${i}`] = document.getElementById(`feat-title-${i}-input`).value;
            if (document.getElementById(`feat-desc-${i}-input`)) lt[`feat_desc_${i}`] = document.getElementById(`feat-desc-${i}-input`).value;
        }

        // Section 10
        if (document.getElementById('pdf-promo-title-input')) lt.pdf_promo_title = document.getElementById('pdf-promo-title-input').value;
        if (document.getElementById('pdf-promo-desc-input')) lt.pdf_promo_desc = document.getElementById('pdf-promo-desc-input').value;

        // Section 11
        if (document.getElementById('models-tag-input')) lt.models_tag = document.getElementById('models-tag-input').value;
        if (document.getElementById('models-title-input')) lt.models_title = document.getElementById('models-title-input').value;
        if (document.getElementById('models-subtitle-input')) lt.models_subtitle = document.getElementById('models-subtitle-input').value;

        // Section 12
        if (document.getElementById('wh-title-input')) lt.wh_title = document.getElementById('wh-title-input').value;
        if (document.getElementById('wh-desc-input')) lt.wh_desc = document.getElementById('wh-desc-input').value;

        // Section 13
        if (document.getElementById('gallery-tag-input')) lt.gallery_tag = document.getElementById('gallery-tag-input').value;
        if (document.getElementById('gallery-title-input')) lt.gallery_title = document.getElementById('gallery-title-input').value;
        if (document.getElementById('gallery-subtitle-input')) lt.gallery_subtitle = document.getElementById('gallery-subtitle-input').value;
        for (let i = 1; i <= 3; i++) {
            if (document.getElementById(`gal${i}-title-input`)) lt[`gal${i}_title`] = document.getElementById(`gal${i}-title-input`).value;
            if (document.getElementById(`gal${i}-desc-input`)) lt[`gal${i}_desc`] = document.getElementById(`gal${i}-desc-input`).value;
        }

        // Section 14
        if (document.getElementById('faqs-tag-input')) lt.faqs_tag = document.getElementById('faqs-tag-input').value;
        if (document.getElementById('faqs-title-input')) lt.faqs_title = document.getElementById('faqs-title-input').value;
        if (document.getElementById('faqs-subtitle-input')) lt.faqs_subtitle = document.getElementById('faqs-subtitle-input').value;

        // Section 15
        if (document.getElementById('cta-final-tag-input')) lt.cta_final_tag = document.getElementById('cta-final-tag-input').value;

        // Section 16
        if (document.getElementById('footer-desc-input')) lt.footer_desc = document.getElementById('footer-desc-input').value;
        if (document.getElementById('footer-address-input')) lt.footer_address = document.getElementById('footer-address-input').value;

        // Sync Section 11 vehicles texts
        document.querySelectorAll('.sec11-veh-name').forEach(inp => {
            const id = inp.getAttribute('data-id');
            const v = currentDBState.vehicles.find(item => item.id === id);
            if (v) v.name = inp.value;
        });
        document.querySelectorAll('.sec11-veh-badge').forEach(inp => {
            const id = inp.getAttribute('data-id');
            const v = currentDBState.vehicles.find(item => item.id === id);
            if (v) v.badge = inp.value;
        });
        document.querySelectorAll('.sec11-veh-desc').forEach(inp => {
            const id = inp.getAttribute('data-id');
            const v = currentDBState.vehicles.find(item => item.id === id);
            if (v) v.short_desc = inp.value;
        });
    }

    // === TAB 2: SUBMIT LANDING TEXTS ===
    const landingTextsForm = document.getElementById('landing-texts-form');
    if (landingTextsForm) {
        landingTextsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            syncLandingTextsToState();
            saveDraftToStore();
            logActivity("Copys de landing guardados localmente.");
            alert("Borrador de textos guardado localmente. Recuerda pulsar 'Publicar Cambios' para llevarlos en vivo.");
        });
    }

    // === TAB 3: VEHICLES CRUD ===
    const btnAddVehicle = document.getElementById('btn-add-vehicle-trigger');
    const vehicleModal = document.getElementById('vehicle-form-modal');
    const closeVehicleModal = document.getElementById('close-vehicle-modal');
    const vehicleCrudForm = document.getElementById('vehicle-crud-form');

    if (btnAddVehicle && vehicleModal) {
        btnAddVehicle.addEventListener('click', () => {
            document.getElementById('vehicle-modal-title').textContent = "Agregar Vehículo";
            document.getElementById('veh-id').value = "";
            vehicleCrudForm.reset();
            // Reset image path and preview
            document.getElementById('veh-image-path').value = "";
            document.getElementById('veh-img-preview').src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            vehicleModal.style.display = 'flex';
        });
    }

    if (closeVehicleModal && vehicleModal) {
        closeVehicleModal.addEventListener('click', () => {
            vehicleModal.style.display = 'none';
        });
    }

    function renderVehiclesTable() {
        const body = document.getElementById('vehicles-table-body');
        if (!body) return;
        body.innerHTML = "";

        currentDBState.vehicles.forEach(v => {
            const tr = document.createElement('tr');
            const hasImg = v.image && v.image.trim() !== "" && !v.image.includes('corolla-cross.png');
            const icon = v.name.toLowerCase().includes('cross') || v.name.toLowerCase().includes('rav4') ? '🚙' : '🚗';
            const imgCell = hasImg 
                ? `<img src="${v.image}" class="table-img-prev" alt="${v.name}">` 
                : `<div class="table-img-prev" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;background:var(--bg-surface-admin);">${icon}</div>`;
                
            tr.innerHTML = `
                <td>${imgCell}</td>
                <td><strong>${v.name}</strong><br><span style="font-size:0.75rem;color:var(--text-muted);">${v.short_desc}</span></td>
                <td>USD ${v.price}</td>
                <td><span style="font-size:0.8rem;">⚙️ ${v.motor} | 🎮 ${v.transmision}</span></td>
                <td>
                    <div class="actions-cell">
                        <button class="btn btn-secondary btn-sm edit-veh-btn" data-id="${v.id}">Editar ✏️</button>
                        <button class="btn btn-secondary btn-sm delete-veh-btn" data-id="${v.id}" style="color:var(--primary-red);">Eliminar 🗑️</button>
                    </div>
                </td>
            `;
            body.appendChild(tr);
        });

        // Add Edit Listeners
        document.querySelectorAll('.edit-veh-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const v = currentDBState.vehicles.find(item => item.id === id);
                if (v) {
                    document.getElementById('vehicle-modal-title').textContent = "Editar Vehículo";
                    document.getElementById('veh-id').value = v.id;
                    document.getElementById('veh-name').value = v.name;
                    document.getElementById('veh-price').value = v.price;
                    document.getElementById('veh-short-desc').value = v.short_desc;
                    document.getElementById('veh-long-desc').value = v.long_desc;
                    document.getElementById('veh-motor').value = v.motor;
                    document.getElementById('veh-transmission').value = v.transmision;
                    document.getElementById('veh-dimensions').value = v.dimensiones;
                    document.getElementById('veh-security').value = v.seguridad;
                    document.getElementById('veh-tech').value = v.tecnologia;
                    document.getElementById('veh-observations').value = v.observaciones;
                    const hasImg = v.image && v.image.trim() !== "" && !v.image.includes('corolla-cross.png');
                    const fallbackGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                    document.getElementById('veh-image-path').value = hasImg ? v.image : "";
                    document.getElementById('veh-img-preview').src = hasImg ? v.image : fallbackGif;
                    document.getElementById('veh-badge').value = v.badge || "";
                    document.getElementById('veh-status').value = v.status;
                    
                    vehicleModal.style.display = 'flex';
                }
            });
        });

        // Add Delete Listeners
        document.querySelectorAll('.delete-veh-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const name = currentDBState.vehicles.find(item => item.id === id)?.name;
                if (confirm(`¿Estás seguro de que deseas eliminar el vehículo "${name}"?`)) {
                    currentDBState.vehicles = currentDBState.vehicles.filter(item => item.id !== id);
                    saveDraftToStore();
                    renderVehiclesTable();
                    logActivity(`Vehículo "${name}" eliminado.`);
                }
            });
        });
    }

    if (vehicleCrudForm) {
        vehicleCrudForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('veh-id').value;
            const name = document.getElementById('veh-name').value;
            
            const vData = {
                id: id || String(Date.now()),
                name: name,
                price: document.getElementById('veh-price').value,
                short_desc: document.getElementById('veh-short-desc').value,
                long_desc: document.getElementById('veh-long-desc').value,
                motor: document.getElementById('veh-motor').value,
                transmision: document.getElementById('veh-transmission').value,
                dimensiones: document.getElementById('veh-dimensions').value,
                seguridad: document.getElementById('veh-security').value,
                tecnologia: document.getElementById('veh-tech').value,
                observaciones: document.getElementById('veh-observations').value,
                image: document.getElementById('veh-image-path').value,
                badge: document.getElementById('veh-badge').value,
                status: document.getElementById('veh-status').value
            };

            if (id) {
                // Update
                const idx = currentDBState.vehicles.findIndex(item => item.id === id);
                currentDBState.vehicles[idx] = vData;
                logActivity(`Vehículo "${name}" actualizado.`);
            } else {
                // Create
                currentDBState.vehicles.push(vData);
                logActivity(`Vehículo "${name}" creado.`);
            }

            saveDraftToStore();
            vehicleModal.style.display = 'none';
            renderVehiclesTable();
        });
    }
    function renderSection11Models() {
        const container = document.getElementById('section-models-list-container');
        if (!container) return;
        container.innerHTML = "";

        const primaryId = currentDBState.pdf_config.selected_vehicle_id || "1";
        const secondaryVehicles = currentDBState.vehicles.filter(v => v.id !== primaryId);

        if (secondaryVehicles.length === 0) {
            container.innerHTML = `<p style="color:var(--text-muted);font-style:italic;">No hay otros modelos registrados. Agrega vehículos en la pestaña superior "Gestión Vehículos (CRUD)".</p>`;
            return;
        }

        secondaryVehicles.forEach(v => {
            const hasImg = v.image && v.image.trim() !== "" && !v.image.includes('corolla-cross.png');
            const fallbackGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            const card = document.createElement('div');
            card.className = "sec11-vehicle-card-editor";
            card.style.cssText = "border: 1px solid var(--border-admin); border-radius: 8px; padding: 15px; margin-bottom: 15px; background: rgba(255,255,255,0.02);";
            
            card.innerHTML = `
                <h5 style="margin-bottom: 10px; color: var(--gold-primary); font-family: var(--font-heading); font-size:1rem;">Modelo: ${v.name}</h5>
                <div class="form-row-3">
                    <div class="form-group-col" style="flex: 1;">
                        <label style="color:var(--text-muted);">Título del Modelo</label>
                        <input type="text" class="form-control sec11-veh-name" data-id="${v.id}" value="${v.name}" required>
                    </div>
                    <div class="form-group-col" style="flex: 1;">
                        <label style="color:var(--text-muted);">Badge / Categoría</label>
                        <input type="text" class="form-control sec11-veh-badge" data-id="${v.id}" value="${v.badge || ''}" placeholder="Ej: Híbrido, SUV Premium..." required>
                    </div>
                    <div class="form-group-col" style="flex: 2;">
                        <label style="color:var(--text-muted);">Descripción Corta (aparece en tarjeta)</label>
                        <input type="text" class="form-control sec11-veh-desc" data-id="${v.id}" value="${v.short_desc}" required>
                    </div>
                </div>
                <div class="form-row" style="margin-top: 10px;">
                    <div class="form-group-col">
                        <label style="color:var(--text-muted);">Imagen del Modelo</label>
                        <div class="direct-media-uploader" style="margin-top: 5px;">
                            <div class="media-upload-preview" id="sec11-veh-img-preview-container-${v.id}" style="width: 80px; height: 50px; border-radius: 4px; overflow: hidden; background: #000; border: 1px solid var(--border-admin); display: flex; align-items: center; justify-content: center;">
                                <img src="${hasImg ? v.image : fallbackGif}" id="sec11-veh-img-preview-${v.id}" style="width:100%; height:100%; object-fit:cover;" alt="Vista previa">
                            </div>
                            <div class="media-upload-actions">
                                <button type="button" class="btn btn-secondary btn-sm sec11-upload-trigger" data-id="${v.id}">
                                    <span>Subir Imagen 📤</span>
                                </button>
                                <input type="file" id="sec11-veh-img-file-${v.id}" class="sec11-file-input" data-id="${v.id}" style="display: none;" accept="image/*">
                                <input type="hidden" id="sec11-veh-image-path-${v.id}" class="sec11-path-input" data-id="${v.id}" value="${v.image || ''}">
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Bind event delegation for Section 11 dynamic cards
    const sec11Container = document.getElementById('section-models-list-container');
    if (sec11Container) {
        sec11Container.addEventListener('click', (e) => {
            const trigger = e.target.closest('.sec11-upload-trigger');
            if (trigger) {
                const id = trigger.getAttribute('data-id');
                const fileInput = document.getElementById(`sec11-veh-img-file-${id}`);
                if (fileInput) fileInput.click();
            }
        });

        sec11Container.addEventListener('change', async (e) => {
            const fileInput = e.target.closest('.sec11-file-input');
            if (fileInput) {
                const id = fileInput.getAttribute('data-id');
                const file = fileInput.files[0];
                if (!file) return;

                const previewEl = document.getElementById(`sec11-veh-img-preview-${id}`);
                const pathEl = document.getElementById(`sec11-veh-image-path-${id}`);
                
                if (previewEl) previewEl.style.opacity = '0.5';

                let cloudUrl = null;
                try {
                    cloudUrl = await MLCDatabase.uploadFile(file);
                } catch (err) {
                    console.error("[Storage] Error subiendo archivo a Supabase Storage:", err);
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const finalData = cloudUrl || event.target.result;
                    if (previewEl) {
                        previewEl.src = finalData;
                        previewEl.style.opacity = '1';
                    }
                    if (pathEl) pathEl.value = finalData;
                    
                    const v = currentDBState.vehicles.find(item => item.id === id);
                    if (v) {
                        v.image = finalData;
                        saveDraftToStore();
                        renderVehiclesTable();
                    }
                };
                reader.readAsDataURL(file);
            }
        });

        sec11Container.addEventListener('input', (e) => {
            const inp = e.target.closest('.sec11-veh-name, .sec11-veh-badge, .sec11-veh-desc');
            if (inp) {
                const id = inp.getAttribute('data-id');
                const v = currentDBState.vehicles.find(item => item.id === id);
                if (v) {
                    if (inp.classList.contains('sec11-veh-name')) v.name = inp.value;
                    if (inp.classList.contains('sec11-veh-badge')) v.badge = inp.value;
                    if (inp.classList.contains('sec11-veh-desc')) v.short_desc = inp.value;
                    saveDraftToStore();
                }
            }
        });
    }

    // === TAB 4: PDF MANAGER & DYNAMIC PDF GENERATION ===
    const pdfSelectVehicle = document.getElementById('pdf-select-vehicle');
    const pdfConfigForm = document.getElementById('pdf-config-form');

    function populatePdfForm() {
        if (!pdfSelectVehicle) return;
        
        // Load vehicles list to selection dropdown
        pdfSelectVehicle.innerHTML = "";
        currentDBState.vehicles.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.id;
            opt.textContent = v.name;
            pdfSelectVehicle.appendChild(opt);
        });

        const pConfig = currentDBState.pdf_config;
        pdfSelectVehicle.value = pConfig.selected_vehicle_id;
        document.getElementById('pdf-header-title').value = pConfig.title || "";
        document.getElementById('pdf-header-subtitle').value = pConfig.subtitle || "";
        document.getElementById('pdf-summary').value = pConfig.summary || "";
        document.getElementById('pdf-legal').value = pConfig.legal || "";

        // Populate new spec inputs
        document.getElementById('pdf-spec-combustible').value = pConfig.spec_combustible || "Gasolina";
        document.getElementById('pdf-spec-color-exterior').value = pConfig.spec_color_exterior || "Pearl White";
        document.getElementById('pdf-spec-color-interior').value = pConfig.spec_color_interior || "Negro";
        document.getElementById('pdf-spec-entrega').value = pConfig.spec_entrega || "Inmediata / Importación Directa";
        document.getElementById('pdf-spec-idioma').value = pConfig.spec_idioma || "Español";
        document.getElementById('pdf-spec-asientos').value = pConfig.spec_asientos || "Tela";

        // Populate gallery previews and captions
        for (let i = 1; i <= 6; i++) {
            const imgPath = pConfig[`gallery_img_${i}`] || "";
            const hasImg = imgPath && imgPath.trim() !== "" && !imgPath.includes('corolla-cross.png');
            const fallbackGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            document.getElementById(`pdf-gal-img-${i}-path`).value = hasImg ? imgPath : "";
            document.getElementById(`pdf-gal-img-${i}-prev`).src = hasImg ? imgPath : fallbackGif;
            document.getElementById(`pdf-gal-cap-${i}`).value = pConfig[`gallery_cap_${i}`] || "Detalle interior";
        }
    }

    // Set up file change listeners for PDF gallery image uploaders
    function setupPdfGalleryInputs() {
        for (let i = 1; i <= 6; i++) {
            const fileInput = document.getElementById(`pdf-gal-img-${i}-file`);
            if (!fileInput) continue;
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                
                if (file.size > 4.5 * 1024 * 1024) {
                    alert("⚠️ El archivo es demasiado grande. Por favor, sube una imagen inferior a 4.5MB.");
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64Data = event.target.result;
                    document.getElementById(`pdf-gal-img-${i}-prev`).src = base64Data;
                    document.getElementById(`pdf-gal-img-${i}-path`).value = base64Data;
                    // Auto-save in temporary state
                    currentDBState.pdf_config[`gallery_img_${i}`] = base64Data;
                    saveDraftToStore();
                    logActivity(`Imagen ${i} de galería subida al PDF.`);
                };
                reader.readAsDataURL(file);
            });
        }
    }

    setupPdfGalleryInputs();

    function updatePdfPreview() {
        const vehicleId = pdfSelectVehicle.value;
        const v = currentDBState.vehicles.find(item => item.id === vehicleId);
        
        if (v) {
            document.getElementById('prev-pdf-title').textContent = v.name;
            document.getElementById('prev-pdf-subtitle').textContent = document.getElementById('pdf-header-subtitle').value;
            document.getElementById('prev-pdf-summary').textContent = document.getElementById('pdf-summary').value;
            document.getElementById('prev-pdf-motor').textContent = v.motor;
            document.getElementById('prev-pdf-transmission').textContent = v.transmision;
            document.getElementById('prev-pdf-dimensions').textContent = v.dimensiones;
            document.getElementById('prev-pdf-security').textContent = v.seguridad;
            document.getElementById('prev-pdf-tech').textContent = v.tecnologia;
        }
    }

    if (pdfSelectVehicle) {
        pdfSelectVehicle.addEventListener('change', () => {
            const pConfig = currentDBState.pdf_config;
            pConfig.selected_vehicle_id = pdfSelectVehicle.value;
            updatePdfPreview();
        });

        // Realtime update triggers on config inputs
        ['pdf-header-title', 'pdf-header-subtitle', 'pdf-summary'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', updatePdfPreview);
        });
    }

    if (pdfConfigForm) {
        pdfConfigForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pConfig = currentDBState.pdf_config;
            pConfig.title = document.getElementById('pdf-header-title').value;
            pConfig.subtitle = document.getElementById('pdf-header-subtitle').value;
            pConfig.summary = document.getElementById('pdf-summary').value;
            pConfig.legal = document.getElementById('pdf-legal').value;
            pConfig.selected_vehicle_id = pdfSelectVehicle.value;

            // Sync new spec fields
            pConfig.spec_combustible = document.getElementById('pdf-spec-combustible').value;
            pConfig.spec_color_exterior = document.getElementById('pdf-spec-color-exterior').value;
            pConfig.spec_color_interior = document.getElementById('pdf-spec-color-interior').value;
            pConfig.spec_entrega = document.getElementById('pdf-spec-entrega').value;
            pConfig.spec_idioma = document.getElementById('pdf-spec-idioma').value;
            pConfig.spec_asientos = document.getElementById('pdf-spec-asientos').value;

            // Sync gallery values
            for (let i = 1; i <= 6; i++) {
                pConfig[`gallery_img_${i}`] = document.getElementById(`pdf-gal-img-${i}-path`).value;
                pConfig[`gallery_cap_${i}`] = document.getElementById(`pdf-gal-cap-${i}`).value;
            }

            saveDraftToStore();
            logActivity("Configuración del PDF guardada localmente.");
            alert("Configuración de la ficha guardada. Puedes generar el PDF interactivo presionando el botón 'Generar & Publicar PDF Dinámico'.");
        });
    }

    // Dynamic jsPDF Compiler Trigger
    // Image loading helper for base64 conversion
    function loadImgBase64(url) {
        return new Promise((resolve) => {
            if (!url) {
                resolve("");
                return;
            }
            if (url.startsWith("data:")) {
                resolve(url);
                return;
            }
            
            fetch(url)
                .then(res => res.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = () => resolve("");
                    reader.readAsDataURL(blob);
                })
                .catch(err => {
                    console.error("Error fetching image for PDF:", url, err);
                    resolve(""); // fallback to blank/no image
                });
        });
    }

    // Dynamic jsPDF Compiler Trigger
    const btnGeneratePdf = document.getElementById('btn-generate-pdf-trigger');
    if (btnGeneratePdf) {
        btnGeneratePdf.addEventListener('click', async () => {
            const vehicleId = pdfSelectVehicle.value;
            const v = currentDBState.vehicles.find(item => item.id === vehicleId);
            
            if (!v) {
                alert("Por favor, selecciona un vehículo válido.");
                return;
            }

            // Change button state to loading
            const originalBtnText = btnGeneratePdf.innerHTML;
            btnGeneratePdf.disabled = true;
            btnGeneratePdf.innerHTML = "<span>Compilando PDF e Imágenes... ⏳</span>";

            const titleVal = document.getElementById('pdf-header-title').value;
            const subtitleVal = document.getElementById('pdf-header-subtitle').value;
            const summaryVal = document.getElementById('pdf-summary').value;
            const legalVal = document.getElementById('pdf-legal').value;
            const pConfig = currentDBState.pdf_config;

            try {
                // Load base64 for all images
                const logoBase64 = await loadImgBase64(currentDBState.landing_texts.brand_logo || "assets/logo.jpg");
                const mainImgBase64 = await loadImgBase64(v.image);
                
                const gal1 = await loadImgBase64(pConfig.gallery_img_1);
                const gal2 = await loadImgBase64(pConfig.gallery_img_2);
                const gal3 = await loadImgBase64(pConfig.gallery_img_3);
                const gal4 = await loadImgBase64(pConfig.gallery_img_4);
                const gal5 = await loadImgBase64(pConfig.gallery_img_5);
                const gal6 = await loadImgBase64(pConfig.gallery_img_6);

                // Initialize jsPDF (Standard global UMD import)
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF({
                    orientation: "portrait",
                    unit: "mm",
                    format: "a4"
                });

                // Colors
                const colorRed = [185, 28, 28]; // Primary red
                const colorGold = [177, 151, 107]; // Gold accent
                const colorDark = [15, 23, 42]; // Dark slate text
                const colorGray = [100, 116, 139]; // Muted text

                // ================= PÁGINA 1 =================
                // Gold Header Accent Line
                doc.setDrawColor(colorGold[0], colorGold[1], colorGold[2]);
                doc.setLineWidth(1.5);
                doc.line(15, 15, 195, 15);

                // Logo
                if (logoBase64) {
                    try {
                        doc.addImage(logoBase64, 'JPEG', 15, 18, 15, 15);
                    } catch (e) {
                        console.warn("Could not draw logo image in PDF:", e);
                    }
                }
                
                // Brand Text next to Logo
                doc.setFont("Helvetica", "bold");
                doc.setFontSize(14);
                doc.setTextColor(colorRed[0], colorRed[1], colorRed[2]);
                doc.text("MLC MASTER CHINA", 34, 24);
                
                doc.setFontSize(7.5);
                doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                doc.text("IMPORTACIÓN ASISTIDA PREMIUM DESDE ORIGEN", 34, 28);

                // Category Badge (Red capsule) on top right
                doc.setFillColor(colorRed[0], colorRed[1], colorRed[2]);
                doc.rect(130, 19, 65, 6, "F");
                doc.setFont("Helvetica", "bold");
                doc.setFontSize(6.5);
                doc.setTextColor(255, 255, 255);
                doc.text("MASTER CHINA MLC | CATALOGO PREMIUM", 162.5, 23.2, { align: "center" });

                // Main Title
                doc.setFontSize(20);
                doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                doc.setFont("Helvetica", "bold");
                const splitTitle = doc.splitTextToSize(titleVal.toUpperCase(), 180);
                doc.text(splitTitle, 15, 42);

                // Subtitle
                doc.setFontSize(10);
                doc.setTextColor(colorGold[0], colorGold[1], colorGold[2]);
                doc.setFont("Helvetica", "normal");
                doc.text(subtitleVal, 15, 49);

                // Left Column (Main Image, Price Badge, CTA Button)
                if (mainImgBase64) {
                    try {
                        doc.addImage(mainImgBase64, 'JPEG', 15, 54, 85, 55);
                    } catch (e) {
                        console.warn("Could not draw main vehicle image in PDF:", e);
                        doc.setDrawColor(200, 200, 200);
                        doc.rect(15, 54, 85, 55);
                        doc.text("Image Placeholder", 40, 80);
                    }
                } else {
                    doc.setDrawColor(200, 200, 200);
                    doc.rect(15, 54, 85, 55);
                    doc.text("Image Placeholder", 40, 80);
                }

                // Under image note
                doc.setFont("Helvetica", "normal");
                doc.setFontSize(6.5);
                doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                doc.text("Vista exterior en estudio. Diseño deportivo y aerodinámico optimizado.", 15, 113);

                // Price Badge
                doc.setFillColor(colorDark[0], colorDark[1], colorDark[2]);
                doc.rect(15, 117, 85, 18, "F");
                
                doc.setFontSize(7);
                doc.setTextColor(colorGold[0], colorGold[1], colorGold[2]);
                doc.setFont("Helvetica", "bold");
                doc.text("PRECIO FOB REFERENCIAL", 20, 122);
                
                doc.setFontSize(13);
                doc.setTextColor(255, 255, 255);
                doc.setFont("Helvetica", "bold");
                doc.text(`USD ${v.price}`, 20, 131);

                // Red Simulated button "COTIZAR VEHÍCULO"
                doc.setFillColor(colorRed[0], colorRed[1], colorRed[2]);
                doc.rect(15, 140, 85, 9, "F");
                
                doc.setFontSize(8);
                doc.setTextColor(255, 255, 255);
                doc.setFont("Helvetica", "bold");
                doc.text("COTIZAR VEHÍCULO 💬", 57.5, 146, { align: "center" });

                // Right Column (Specifications Table)
                doc.setFontSize(9);
                doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                doc.setFont("Helvetica", "bold");
                doc.text("ESPECIFICACIONES TÉCNICAS", 110, 58);

                const specsTable = [
                    { label: "Modelo Comercial:", val: v.name },
                    { label: "Motorización:", val: v.motor },
                    { label: "Transmisión:", val: v.transmision },
                    { label: "Dimensiones:", val: v.dimensiones },
                    { label: "Combustible:", val: pConfig.spec_combustible },
                    { label: "Color Exterior:", val: pConfig.spec_color_exterior },
                    { label: "Color Interior:", val: pConfig.spec_color_interior },
                    { label: "Entrega / Plazo:", val: pConfig.spec_entrega },
                    { label: "Asientos:", val: pConfig.spec_asientos }
                ];

                let specY = 62;
                specsTable.forEach((row, index) => {
                    // Alternate background tint
                    if (index % 2 === 0) {
                        doc.setFillColor(248, 250, 252);
                        doc.rect(110, specY, 85, 10, "F");
                    }
                    
                    // Fine bottom line
                    doc.setDrawColor(226, 232, 240);
                    doc.setLineWidth(0.2);
                    doc.line(110, specY + 10, 195, specY + 10);

                    // Label
                    doc.setFont("Helvetica", "bold");
                    doc.setFontSize(7.5);
                    doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                    doc.text(row.label, 113, specY + 6.5);

                    // Value
                    doc.setFont("Helvetica", "normal");
                    doc.setFontSize(7.5);
                    doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                    const splitVal = doc.splitTextToSize(row.val, 46);
                    doc.text(splitVal, 146, specY + 6.5);

                    specY += 10;
                });

                // Separator line
                doc.setDrawColor(226, 232, 240);
                doc.setLineWidth(0.3);
                doc.line(15, 157, 195, 157);

                // Resumen comercial / Introducción
                doc.setFontSize(9);
                doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                doc.setFont("Helvetica", "normal");
                const splitSummary = doc.splitTextToSize(summaryVal, 180);
                doc.text(splitSummary, 15, 163);

                // Acompañamiento box
                doc.setFillColor(248, 250, 252);
                doc.rect(15, 178, 180, 26, "F");
                doc.setDrawColor(226, 232, 240);
                doc.rect(15, 178, 180, 26, "D");
                
                doc.setFontSize(8.5);
                doc.setTextColor(colorRed[0], colorRed[1], colorRed[2]);
                doc.setFont("Helvetica", "bold");
                doc.text("ACOMPAÑAMIENTO LOGÍSTICO Y REVISIÓN EN ORIGEN", 20, 184);
                
                doc.setFontSize(7.5);
                doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                doc.setFont("Helvetica", "normal");
                doc.text("• Compra directa al canal mayorista oficial de exportación en China sin intermediarios.", 20, 189);
                doc.text("• Reporte fotográfico y de video del chasis y motor antes de sellar el contenedor.", 20, 194);
                doc.text("• Gestión documental completa (B/L, Factura y Packing List) en español para aduana.", 20, 199);

                // Contact CTA Box (WhatsApp green tint)
                doc.setFillColor(240, 253, 244);
                doc.rect(15, 209, 180, 20, "F");
                doc.setDrawColor(37, 211, 102);
                doc.setLineWidth(0.3);
                doc.rect(15, 209, 180, 20, "D");

                doc.setFont("Helvetica", "bold");
                doc.setFontSize(9.5);
                doc.setTextColor(21, 128, 61);
                doc.text("SOLICITAR COTIZACIÓN FORMAL DE IMPORTACIÓN DIRECTA", 20, 216);
                
                doc.setFont("Helvetica", "normal");
                doc.setFontSize(8);
                doc.setTextColor(21, 128, 61);
                doc.text(`Canal de WhatsApp Oficial de MLC: +${currentDBState.page_settings.whatsapp_phone} (Asesoría comercial en español)`, 20, 222);

                // Legal Disclaimer
                doc.setFontSize(7);
                doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                const splitLegal = doc.splitTextToSize(legalVal, 180);
                doc.text(splitLegal, 15, 236);

                // Page 1 Footer
                doc.setDrawColor(226, 232, 240);
                doc.setLineWidth(0.3);
                doc.line(15, 276, 195, 276);
                
                doc.setFontSize(7.5);
                doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                doc.text("MASTER CHINA MLC | DETALLES DE IMPORTACIÓN", 15, 281);
                doc.text("PÁGINA 01 / 02", 195, 281, { align: "right" });


                // ================= PÁGINA 2 =================
                doc.addPage();

                // Gold Header Accent Line
                doc.setDrawColor(colorGold[0], colorGold[1], colorGold[2]);
                doc.setLineWidth(1.5);
                doc.line(15, 15, 195, 15);

                // Category Subtitle
                doc.setFontSize(7.5);
                doc.setTextColor(colorGold[0], colorGold[1], colorGold[2]);
                doc.setFont("Helvetica", "bold");
                doc.text("MASTER CHINA MLC | TECNOLOGÍA & CONFORT INTERIOR", 15, 22);

                // Main Title Page 2
                doc.setFontSize(12);
                doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                doc.setFont("Helvetica", "bold");
                doc.text("EXPERIENCIA DE CONDUCCIÓN DIGITAL & CONFORT PREMIUM", 15, 29);

                // Separator Line
                doc.setDrawColor(226, 232, 240);
                doc.setLineWidth(0.5);
                doc.line(15, 33, 195, 33);

                // 3x2 Images Grid Coordinates
                const imgW = 54;
                const imgH = 40;
                
                const gridData = [
                    { base64: gal1, cap: pConfig.gallery_cap_1 || "Detalle interior", x: 15, y: 38 },
                    { base64: gal2, cap: pConfig.gallery_cap_2 || "Detalle interior", x: 78, y: 38 },
                    { base64: gal3, cap: pConfig.gallery_cap_3 || "Detalle interior", x: 141, y: 38 },
                    { base64: gal4, cap: pConfig.gallery_cap_4 || "Detalle interior", x: 15, y: 92 },
                    { base64: gal5, cap: pConfig.gallery_cap_5 || "Detalle interior", x: 78, y: 92 },
                    { base64: gal6, cap: pConfig.gallery_cap_6 || "Detalle interior", x: 141, y: 92 }
                ];

                gridData.forEach((item) => {
                    if (item.base64) {
                        try {
                            doc.addImage(item.base64, 'JPEG', item.x, item.y, imgW, imgH);
                        } catch (e) {
                            console.warn("Could not draw gallery image:", e);
                            doc.setDrawColor(200, 200, 200);
                            doc.rect(item.x, item.y, imgW, imgH);
                        }
                    } else {
                        doc.setDrawColor(200, 200, 200);
                        doc.rect(item.x, item.y, imgW, imgH);
                    }
                    
                    // Draw Caption centered below image
                    doc.setFontSize(7.5);
                    doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                    doc.setFont("Helvetica", "normal");
                    doc.text(item.cap, item.x + (imgW / 2), item.y + imgH + 5, { align: "center" });
                });

                // Logistics Flow Chart Card (Page 2 bottom half)
                doc.setFillColor(248, 250, 252);
                doc.rect(15, 150, 180, 115, "F");
                doc.setDrawColor(226, 232, 240);
                doc.rect(15, 150, 180, 115, "D");

                doc.setFontSize(9.5);
                doc.setTextColor(colorRed[0], colorRed[1], colorRed[2]);
                doc.setFont("Helvetica", "bold");
                doc.text("FASE OPERATIVA - GESTIÓN Y CONTROL DE CALIDAD", 20, 157);

                const steps = [
                    {
                        num: "1",
                        title: "Adquisición y Tránsito Interno",
                        desc: "Compra directa al canal mayorista oficial de exportación en China y traslado inmediato a nuestros almacenes de consolidación en Guangzhou."
                    },
                    {
                        num: "2",
                        title: "Escrutinio Físico y Verificación",
                        desc: "Validación técnica de chasis, motor, componentes electrónicos, soldaduras estructurales y cableado interno antes del despacho."
                    },
                    {
                        num: "3",
                        title: "Consolidación y Trincado en Contenedor",
                        desc: "Anclaje del coche mediante cinchas de trincado industrial en almacén logístico de Yiwu para garantizar cero movimientos en el mar."
                    },
                    {
                        num: "4",
                        title: "Facturación y Liberación de B/L",
                        desc: "Gestión documental de aduanas de salida en China y emisión del Bill of Lading (B/L) oficial indispensable para nacionalizar en destino."
                    }
                ];

                let stepY = 166;
                steps.forEach((s) => {
                    // Draw Red Circle Number
                    doc.setFillColor(colorRed[0], colorRed[1], colorRed[2]);
                    doc.circle(23, stepY + 1.5, 2.5, "F");
                    
                    doc.setFontSize(7.5);
                    doc.setTextColor(255, 255, 255);
                    doc.setFont("Helvetica", "bold");
                    doc.text(s.num, 23, stepY + 2.3, { align: "center" });

                    // Step Title
                    doc.setFontSize(8.5);
                    doc.setTextColor(colorDark[0], colorDark[1], colorDark[2]);
                    doc.setFont("Helvetica", "bold");
                    doc.text(s.title, 28, stepY + 2.0);

                    // Step Desc
                    doc.setFontSize(7.5);
                    doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                    doc.setFont("Helvetica", "normal");
                    const splitDesc = doc.splitTextToSize(s.desc, 160);
                    doc.text(splitDesc, 28, stepY + 6.5);

                    stepY += 21;
                });

                // Page 2 Footer
                doc.setDrawColor(226, 232, 240);
                doc.setLineWidth(0.3);
                doc.line(15, 276, 195, 276);
                
                doc.setFontSize(7.5);
                doc.setTextColor(colorGray[0], colorGray[1], colorGray[2]);
                doc.text("MASTER CHINA MLC | DETALLES DE INTERIOR Y TECNOLOGÍA", 15, 281);
                doc.text("PÁGINA 02 / 02", 195, 281, { align: "right" });

                // Output to base64 Data URI string to save in our DB
                const pdfBase64Data = doc.output('datauristring');
                
                // Save inside pdf_config database state
                currentDBState.pdf_config.published_pdf_base64 = pdfBase64Data;
                
                saveDraftToStore();
                logActivity("PDF Dinámico generado y guardado en borrador.");
                
                // Also trigger standard client download instantly
                doc.save(`Ficha_Tecnica_MLC_${v.name.replace(/ /g, "_")}.pdf`);
                alert("🎉 ¡Ficha Técnica en PDF Generada con éxito! Se ha descargado localmente y guardado en tu base de datos para descarga de los clientes.");
            } catch (err) {
                console.error("Error al generar PDF:", err);
                alert("❌ Ocurrió un error al compilar el PDF: " + err.message);
            } finally {
                // Restore button state
                btnGeneratePdf.disabled = false;
                btnGeneratePdf.innerHTML = originalBtnText;
            }
        });
    }

    // === TAB 5: MEDIA LIBRARY ===
    const dropZone = document.getElementById('media-drop-zone');
    const fileInput = document.getElementById('media-file-input');

    if (dropZone && fileInput) {
        dropZone.addEventListener('click', () => fileInput.click());
        
        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
                handleFileUpload(files[0]);
            }
        });

        // Drag & drop logic
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--gold)';
            dropZone.style.backgroundColor = 'var(--gold-glow)';
        });

        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = 'var(--border-admin)';
            dropZone.style.backgroundColor = 'transparent';
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--border-admin)';
            dropZone.style.backgroundColor = 'transparent';
            const files = e.dataTransfer.files;
            if (files && files.length > 0) {
                handleFileUpload(files[0]);
            }
        });
    }

    function handleFileUpload(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Content = e.target.result;
            const name = file.name;
            
            // Add image base64 directly to media_library
            currentDBState.media_library.push({
                name: name,
                path: base64Content, // base64 string acts as local URL
                type: "Subidos"
            });

            saveDraftToStore();
            renderMediaGrid();
            logActivity(`Imagen "${name}" subida a biblioteca.`);
        };
        reader.readAsDataURL(file);
    }

    function renderMediaGrid() {
        const grid = document.getElementById('media-assets-grid-container');
        if (!grid) return;
        grid.innerHTML = "";

        currentDBState.media_library.forEach((m, idx) => {
            const card = document.createElement('div');
            card.className = "media-card";
            card.innerHTML = `
                <div class="media-img-wrapper">
                    <img src="${m.path}" alt="${m.name}">
                </div>
                <div class="media-card-info">
                    <h5>${m.name}</h5>
                    <p>Filtro: ${m.type}</p>
                    <div class="media-card-actions">
                        <button class="btn btn-secondary btn-sm btn-full copy-path-btn" data-path="${m.path}">Copiar Ruta 🔗</button>
                        <button class="btn btn-secondary btn-sm btn-full delete-media-btn" data-idx="${idx}" style="color:var(--primary-red);margin-top:6px;">Borrar 🗑️</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Copy path handlers
        document.querySelectorAll('.copy-path-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const path = btn.getAttribute('data-path');
                navigator.clipboard.writeText(path).then(() => {
                    alert("Ruta de la imagen copiada al portapapeles. Puedes pegarla en los selectores de vehículos.");
                });
            });
        });

        // Delete handlers
        document.querySelectorAll('.delete-media-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-idx'));
                const name = currentDBState.media_library[idx].name;
                if (confirm(`¿Estás seguro de que deseas eliminar la imagen "${name}" de la biblioteca?`)) {
                    currentDBState.media_library.splice(idx, 1);
                    saveDraftToStore();
                    renderMediaGrid();
                    logActivity(`Imagen "${name}" eliminada de biblioteca.`);
                }
            });
        });
    }

    // === TAB 6: FAQS AND TESTIMONIALS ===
    const btnAddFaq = document.getElementById('btn-add-faq');
    const btnAddTestimonial = document.getElementById('btn-add-testimonial');

    function renderFaqsList() {
        const container = document.getElementById('faqs-list-container');
        if (!container) return;
        container.innerHTML = "";

        currentDBState.faqs.forEach((faq, idx) => {
            const div = document.createElement('div');
            div.className = "row-item";
            div.innerHTML = `
                <div class="row-item-content">
                    <div class="form-group">
                        <label>Pregunta #${idx+1}</label>
                        <input type="text" class="form-control faq-question-input" data-idx="${idx}" value="${faq.question}">
                    </div>
                    <div class="form-group" style="margin-bottom:0;">
                        <label>Respuesta</label>
                        <textarea class="form-control faq-answer-input" data-idx="${idx}" rows="2">${faq.answer}</textarea>
                    </div>
                </div>
                <div class="row-item-actions">
                    <button class="btn btn-secondary btn-sm delete-faq-btn" data-idx="${idx}" style="color:var(--primary-red);">Eliminar 🗑️</button>
                </div>
            `;
            container.appendChild(div);
        });

        // Save on input change (Debounce simulation or simple listeners)
        document.querySelectorAll('.faq-question-input').forEach(input => {
            input.addEventListener('change', () => {
                const idx = parseInt(input.getAttribute('data-idx'));
                currentDBState.faqs[idx].question = input.value;
                saveDraftToStore();
            });
        });

        document.querySelectorAll('.faq-answer-input').forEach(textarea => {
            textarea.addEventListener('change', () => {
                const idx = parseInt(textarea.getAttribute('data-idx'));
                currentDBState.faqs[idx].answer = textarea.value;
                saveDraftToStore();
            });
        });

        // Delete faq
        document.querySelectorAll('.delete-faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-idx'));
                currentDBState.faqs.splice(idx, 1);
                saveDraftToStore();
                renderFaqsList();
                logActivity(`Pregunta frecuente #${idx+1} eliminada.`);
            });
        });
    }

    if (btnAddFaq) {
        btnAddFaq.addEventListener('click', () => {
            currentDBState.faqs.push({
                question: "Nueva Pregunta",
                answer: "Nueva Respuesta"
            });
            saveDraftToStore();
            renderFaqsList();
            logActivity("Pregunta frecuente añadida.");
        });
    }

    function renderTestimonialsList() {
        const container = document.getElementById('testimonials-list-container');
        if (!container) return;
        container.innerHTML = "";

        currentDBState.testimonials.forEach((t, idx) => {
            const div = document.createElement('div');
            div.className = "row-item";
            div.innerHTML = `
                <div class="row-item-content">
                    <div class="form-row-2">
                        <div class="form-group">
                            <label>Nombre y País</label>
                            <input type="text" class="form-control test-name-input" data-idx="${idx}" value="${t.name}">
                        </div>
                        <div class="form-group">
                            <label>Categoría / Tipo</label>
                            <input type="text" class="form-control test-type-input" data-idx="${idx}" value="${t.type}">
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom:0;">
                        <label>Testimonio</label>
                        <textarea class="form-control test-content-input" data-idx="${idx}" rows="2">${t.content}</textarea>
                    </div>
                </div>
                <div class="row-item-actions">
                    <button class="btn btn-secondary btn-sm delete-test-btn" data-idx="${idx}" style="color:var(--primary-red);">Eliminar 🗑️</button>
                </div>
            `;
            container.appendChild(div);
        });

        // Save listeners
        document.querySelectorAll('.test-name-input').forEach(input => {
            input.addEventListener('change', () => {
                const idx = parseInt(input.getAttribute('data-idx'));
                currentDBState.testimonials[idx].name = input.value;
                saveDraftToStore();
            });
        });

        document.querySelectorAll('.test-type-input').forEach(input => {
            input.addEventListener('change', () => {
                const idx = parseInt(input.getAttribute('data-idx'));
                currentDBState.testimonials[idx].type = input.value;
                saveDraftToStore();
            });
        });

        document.querySelectorAll('.test-content-input').forEach(textarea => {
            textarea.addEventListener('change', () => {
                const idx = parseInt(textarea.getAttribute('data-idx'));
                currentDBState.testimonials[idx].content = textarea.value;
                saveDraftToStore();
            });
        });

        // Delete testimonial
        document.querySelectorAll('.delete-test-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-idx'));
                currentDBState.testimonials.splice(idx, 1);
                saveDraftToStore();
                renderTestimonialsList();
                logActivity(`Testimonio #${idx+1} eliminado.`);
            });
        });
    }

    if (btnAddTestimonial) {
        btnAddTestimonial.addEventListener('click', () => {
            currentDBState.testimonials.push({
                name: "Nombre del Cliente",
                content: "Contenido del testimonio...",
                type: "Consulta"
            });
            saveDraftToStore();
            renderTestimonialsList();
            logActivity("Testimonio añadido.");
        });
    }

    // === TAB 7: SETTINGS FORM SUBMIT ===
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const settings = currentDBState.page_settings;
            settings.whatsapp_phone = document.getElementById('set-whatsapp-phone').value;
            settings.instagram_followers = document.getElementById('set-instagram-followers').value;
            settings.toggle_vsl = document.getElementById('toggle-vsl').checked;
            settings.toggle_reels = document.getElementById('toggle-reels').checked;
            settings.toggle_about = document.getElementById('toggle-about').checked;
            settings.toggle_pdf = document.getElementById('toggle-pdf').checked;
            settings.toggle_models = document.getElementById('toggle-models').checked;

            // Handle admin username and password
            const newUsername = document.getElementById('set-admin-username').value;
            const newPassword = document.getElementById('set-admin-password').value;

            if (newUsername.trim() !== "") {
                settings.admin_user = newUsername;
            }
            if (newPassword.trim() !== "") {
                settings.admin_pass = newPassword;
                alert("Contraseña de administrador actualizada. Se aplicará al próximo inicio de sesión.");
            }

            saveDraftToStore();
            logActivity("Ajustes generales guardados localmente.");
            alert("Ajustes de visibilidad y WhatsApp guardados localmente. Recuerda pulsar 'Publicar Cambios' para aplicarlos en vivo.");
        });
    }

    // === LANDING SECTION NAVIGATION AND HIGHLIGHT LOGIC ===
    const mapItems = document.querySelectorAll('.map-step-item');
    const formCards = document.querySelectorAll('.form-section-card.cms-light-theme');

    mapItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSectionId = item.getAttribute('data-section');

            // Deactivate all steps and cards
            mapItems.forEach(nav => nav.classList.remove('active'));
            formCards.forEach(card => card.classList.remove('active'));

            // Activate current step and card
            item.classList.add('active');
            const targetCard = document.getElementById(targetSectionId);
            if (targetCard) {
                targetCard.classList.add('active');
            }
        });
    });

    // In-context input focus wireframe highlight
    const inputs = document.querySelectorAll('.cms-light-theme .form-control');
    inputs.forEach(input => {
        // Highlight on Focus
        input.addEventListener('focus', () => {
            const card = input.closest('.form-section-card');
            if (card) {
                const wfEl = card.querySelector(`.wf-element[data-target="${input.id}"]`);
                if (wfEl) {
                    wfEl.classList.add('active-hover');
                }
            }
        });

        // Remove Highlight on Blur
        input.addEventListener('blur', () => {
            const card = input.closest('.form-section-card');
            if (card) {
                const wfEl = card.querySelector(`.wf-element[data-target="${input.id}"]`);
                if (wfEl) {
                    wfEl.classList.remove('active-hover');
                }
            }
        });

        // Highlight on Hover/Mouseenter
        input.addEventListener('mouseenter', () => {
            const card = input.closest('.form-section-card');
            if (card) {
                const wfEl = card.querySelector(`.wf-element[data-target="${input.id}"]`);
                if (wfEl) {
                    wfEl.classList.add('active-hover');
                }
            }
        });

        // Remove Highlight on Mouseleave
        input.addEventListener('mouseleave', () => {
            const card = input.closest('.form-section-card');
            if (card) {
                const wfEl = card.querySelector(`.wf-element[data-target="${input.id}"]`);
                if (wfEl) {
                    wfEl.classList.remove('active-hover');
                }
            }
        });
    });

    // Global upload trigger click listener
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-upload-trigger');
        if (btn) {
            const inputId = btn.getAttribute('data-input');
            const fileInput = document.getElementById(inputId);
            if (fileInput) {
                fileInput.click();
            }
        }
    });

    // Setup file input change handlers
    function setupFileInputs() {
        const fileConfigs = [
            { id: 'hero-img-file', previewId: 'hero-img-preview', wfPreviewId: 'wf-hero-car-preview', type: 'image', target: 'hero_car' },
            { id: 'vsl-thumb-file', previewId: 'vsl-thumb-preview', wfPreviewId: 'wf-vsl-video-box', type: 'image', target: 'vsl_thumbnail_img' },
            { id: 'vsl-video-file', statusId: 'vsl-video-status', type: 'video', target: 'vsl_video_path' },
            { id: 'ceo-img-file', previewId: 'ceo-img-preview', wfPreviewId: 'wf-ceo-profile-preview', type: 'image', target: 'ceo_profile_img' },
            { id: 'brand-logo-file', previewId: 'brand-logo-preview', wfPreviewId: 'wf-footer-logo-preview', type: 'image', target: 'brand_logo' },
            { id: 'veh-img-file', previewId: 'veh-img-preview', pathInputId: 'veh-image-path', type: 'image', target: 'veh_img' },
            
            // Section 4
            { id: 'about-ig-screenshot-file', previewId: 'about-ig-screenshot-preview', wfPreviewId: 'wf-ig-screenshot-preview', type: 'image', target: 'about_ig_screenshot' },

            // Section 6
            { id: 'reel1-thumb-file', previewId: 'reel1-thumb-preview', type: 'image', target: 'reel1_thumb' },
            { id: 'reel1-video-file', statusId: 'reel1-video-status', type: 'video', target: 'reel1_video' },
            { id: 'reel2-thumb-file', previewId: 'reel2-thumb-preview', type: 'image', target: 'reel2_thumb' },
            { id: 'reel2-video-file', statusId: 'reel2-video-status', type: 'video', target: 'reel2_video' },
            { id: 'reel3-thumb-file', previewId: 'reel3-thumb-preview', type: 'image', target: 'reel3_thumb' },
            { id: 'reel3-video-file', statusId: 'reel3-video-status', type: 'video', target: 'reel3_video' },
            { id: 'reel4-thumb-file', previewId: 'reel4-thumb-preview', type: 'image', target: 'reel4_thumb' },
            { id: 'reel4-video-file', statusId: 'reel4-video-status', type: 'video', target: 'reel4_video' },

            // Section 10
            { id: 'pdf-mockup-file', previewId: 'pdf-mockup-preview', wfPreviewId: 'wf-pdf-mockup-preview', type: 'image', target: 'pdf_mockup_img' },

            // Section 13
            { id: 'gal1-img-file', previewId: 'gal1-img-preview', type: 'image', target: 'gal1_img' },
            { id: 'gal2-img-file', previewId: 'gal2-img-preview', type: 'image', target: 'gal2_img' },
            { id: 'gal3-img-file', previewId: 'gal3-img-preview', type: 'image', target: 'gal3_img' }
        ];

        fileConfigs.forEach(cfg => {
            const inputEl = document.getElementById(cfg.id);
            if (!inputEl) return;

            inputEl.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                // Actualizar etiqueta de estado/progreso si existe
                let statusEl = null;
                if (cfg.statusId) {
                    statusEl = document.getElementById(cfg.statusId);
                }
                if (statusEl) {
                    statusEl.textContent = "Subiendo a la nube...";
                    statusEl.style.color = "#3b82f6";
                }

                // Subir a Supabase Storage de manera prioritaria
                let cloudUrl = null;
                try {
                    cloudUrl = await MLCDatabase.uploadFile(file);
                } catch (err) {
                    console.error("[Storage] Error subiendo archivo a Supabase Storage:", err);
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64Data = event.target.result;
                    // Guardar URL de la nube si existe, de lo contrario base64 fallback
                    const finalData = cloudUrl || base64Data;
                    
                    // 1. Update Preview elements
                    if (cfg.previewId) {
                        const prevEl = document.getElementById(cfg.previewId);
                        if (prevEl) prevEl.src = finalData;
                    }

                    // 2. Update Wireframe previews
                    if (cfg.wfPreviewId) {
                        const wfPrevEl = document.getElementById(cfg.wfPreviewId);
                        if (wfPrevEl) {
                            wfPrevEl.style.backgroundImage = `url(${finalData})`;
                        }
                    }

                    // 3. Update hidden input for path (Vehicle CRUD specific)
                    if (cfg.pathInputId) {
                        const pathEl = document.getElementById(cfg.pathInputId);
                        if (pathEl) pathEl.value = finalData;
                    }

                    // 4. Update status label (VSL / Reels Video specific)
                    if (statusEl) {
                        statusEl.textContent = cloudUrl ? "Archivo subido a la nube ☁️" : "Archivo cargado (Local)";
                        statusEl.style.color = cloudUrl ? "#10b981" : "#b1976b";
                    }

                    // 5. Update Database state dynamically
                    const lt = currentDBState.landing_texts;
                    if (cfg.target === 'hero_car') {
                        // Update primary vehicle image
                        const primaryId = currentDBState.pdf_config.selected_vehicle_id || "1";
                        const primaryVehicle = currentDBState.vehicles.find(v => v.id === primaryId);
                        if (primaryVehicle) {
                            primaryVehicle.image = finalData;
                        }
                    } else if (cfg.target === 'veh_img') {
                        // Handled by CRUD submit
                    } else {
                        lt[cfg.target] = finalData;
                    }

                    // Automatically save draft on upload change
                    saveDraftToStore();
                    
                    // Add to media library for convenience
                    const exists = currentDBState.media_library.some(m => m.name === file.name);
                    if (!exists) {
                        currentDBState.media_library.push({
                            name: file.name,
                            path: finalData,
                            type: cfg.type === 'video' ? 'Videos' : 'Subidos'
                        });
                        if (cfg.target !== 'veh_img') {
                            renderMediaGrid();
                        }
                    }

                    logActivity(`Archivo "${file.name}" subido y asignado.`);
                };
                reader.readAsDataURL(file);
            });
        });
    }

    setupFileInputs();

    // === HERO YOUTUBE PREVIEW LOGIC ===
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

    function updateHeroYtPreview(url) {
        const previewDiv = document.getElementById('hero-yt-preview');
        const iframe = document.getElementById('hero-yt-preview-iframe');
        if (!previewDiv || !iframe) return;
        const videoId = extractYouTubeId(url);
        if (videoId) {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1`;
            previewDiv.style.display = 'block';
        } else {
            iframe.src = '';
            previewDiv.style.display = 'none';
        }
    }

    const ytUrlInput = document.getElementById('hero-youtube-url-input');
    if (ytUrlInput) {
        ytUrlInput.addEventListener('input', () => updateHeroYtPreview(ytUrlInput.value));
        ytUrlInput.addEventListener('change', () => updateHeroYtPreview(ytUrlInput.value));
    }

    const clearHeroVideoBtn = document.getElementById('clear-hero-video-btn');
    if (clearHeroVideoBtn) {
        clearHeroVideoBtn.addEventListener('click', () => {
            if (ytUrlInput) ytUrlInput.value = '';
            updateHeroYtPreview('');
        });
    }

    // === VSL YOUTUBE PREVIEW LOGIC ===
    function updateVslYtPreview(url) {
        const previewRow = document.getElementById('vsl-yt-preview-row');
        const previewDiv = document.getElementById('vsl-yt-preview');
        const iframe = document.getElementById('vsl-yt-preview-iframe');
        if (!previewRow || !previewDiv || !iframe) return;
        const videoId = extractYouTubeId(url);
        if (videoId) {
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1`;
            previewRow.style.display = 'block';
            previewDiv.style.display = 'block';
        } else {
            iframe.src = '';
            previewRow.style.display = 'none';
            previewDiv.style.display = 'none';
        }
    }

    const vslYtUrlInput = document.getElementById('vsl-youtube-url-input');
    if (vslYtUrlInput) {
        vslYtUrlInput.addEventListener('input', () => updateVslYtPreview(vslYtUrlInput.value));
        vslYtUrlInput.addEventListener('change', () => updateVslYtPreview(vslYtUrlInput.value));
    }

    const clearVslVideoBtn = document.getElementById('clear-vsl-video-btn');
    if (clearVslVideoBtn) {
        clearVslVideoBtn.addEventListener('click', () => {
            if (vslYtUrlInput) vslYtUrlInput.value = '';
            updateVslYtPreview('');
        });
    }

    // === DATA IMPORT / EXPORT LOGIC ===
    const btnExport = document.getElementById('btn-export-db');
    if (btnExport) {
        btnExport.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentDBState, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "default_db.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            logActivity("Datos exportados como default_db.json");
        });
    }

    const btnImportTrigger = document.getElementById('btn-import-db-trigger');
    const importFileEl = document.getElementById('import-db-file');
    if (btnImportTrigger && importFileEl) {
        btnImportTrigger.addEventListener('click', () => importFileEl.click());
        importFileEl.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async (evt) => {
                try {
                    const importedData = JSON.parse(evt.target.result);
                    if (importedData && importedData.landing_texts && importedData.page_settings) {
                        currentDBState = importedData;
                        await MLCDatabase.saveDraft(currentDBState);
                        await MLCDatabase.saveLive(currentDBState);
                        loadAllFormsData();
                        setUnpublishedChanges(false);
                        logActivity("Respaldo JSON importado y publicado.");
                        alert("🚀 ¡Respaldo importado y publicado con éxito!");
                    } else {
                        alert("❌ El archivo seleccionado no parece ser un respaldo válido de la base de datos de MLC.");
                    }
                } catch (err) {
                    console.error("Error al importar el JSON:", err);
                    alert("❌ Error al leer el archivo JSON: " + err.message);
                }
            };
            reader.readAsText(file);
        });
    }
    
    const btnSyncDefaultDb = document.getElementById('btn-sync-default-db');
    if (btnSyncDefaultDb) {
        btnSyncDefaultDb.addEventListener('click', async () => {
            if (!confirm("⚠️ ¿Estás seguro de que deseas cargar el archivo 'default_db.json' del servidor?\n\nEsto sobrescribirá por completo la base de datos actual (Supabase/local) con los valores predeterminados del código fuente.")) {
                return;
            }
            try {
                const response = await fetch('default_db.json?t=' + Date.now());
                if (!response.ok) throw new Error("No se pudo obtener el archivo default_db.json.");
                const serverDB = await response.json();
                if (serverDB && serverDB.landing_texts && serverDB.page_settings) {
                    currentDBState = serverDB;
                    await MLCDatabase.saveDraft(currentDBState);
                    await MLCDatabase.saveLive(currentDBState);
                    loadAllFormsData();
                    setUnpublishedChanges(false);
                    logActivity("Base de datos sobrescrita desde default_db.json del servidor.");
                    alert("🚀 ¡Base de datos y Supabase actualizadas con éxito desde default_db.json!");
                    window.location.reload();
                } else {
                    alert("❌ El archivo default_db.json obtenido del servidor no es un respaldo válido.");
                }
            } catch (err) {
                console.error("Error al cargar default_db.json:", err);
                alert("❌ Error al cargar default_db.json: " + err.message);
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

