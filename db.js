/* ============================================================
   MLC MASTER CHINA - SUPABASE PERSISTENCE HELPER (db.js)
   ============================================================ */

// INSTRUCCIONES: Reemplaza estas dos constantes con los datos de tu proyecto Supabase.
// Puedes encontrar esto en tu dashboard de Supabase: Project Settings -> API
const SUPABASE_URL = 'https://kxzejcyymwgcsdaavlz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4enFlamN5eW13Z2NzZGFhdmx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NDc1ODQsImV4cCI6MjA5NzEyMzU4NH0.x5T-HVb2qZS-8-jS9omrfv1iDW5uwzcdXP5i5QuHyys';

// Si las claves no están configuradas, usará IndexedDB localmente como respaldo temporal.
const isSupabaseConfigured = SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';

let supabaseClient = null;
if (isSupabaseConfigured && window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Helper para prevenir bloqueos de red (Hangs) mediante un límite de tiempo (Timeout) de 3 segundos
const withTimeout = (promise, ms = 3000) => {
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error("Supabase request timeout")), ms))
    ]);
};

const MLCDatabase = {
    dbName: 'mlc_landing_db',
    dbVersion: 1,
    storeName: 'keyval',
    db: null,

    /**
     * Initializes IndexedDB (as fallback) and Supabase.
     */
    init() {
        return new Promise((resolve, reject) => {
            if (!window.indexedDB) {
                console.warn("IndexedDB no es soportado por este navegador.");
                resolve();
                return;
            }
            const request = indexedDB.open(this.dbName, this.dbVersion);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName);
                }
            };
            request.onsuccess = (e) => {
                this.db = e.target.result;
                console.log(isSupabaseConfigured ? "[Supabase] Conectado. IndexedDB activo como caché local." : "[IndexedDB] Activo (Supabase no configurado).");
                resolve();
            };
            request.onerror = (e) => {
                reject(e.target.error);
            };
        });
    },

    /**
     * Gets a value (prioritizes Supabase if configured)
     */
    async get(key) {
        if (isSupabaseConfigured && supabaseClient) {
            try {
                const { data, error } = await withTimeout(
                    supabaseClient
                        .from('landing_state')
                        .select('data')
                        .eq('id', key)
                        .single(),
                    3000
                );
                
                if (error && error.code !== 'PGRST116') { // PGRST116 = No rows found
                    throw error;
                }
                if (data && data.data) return data.data;
            } catch (err) {
                console.error(`[Supabase] Error al leer ${key}, leyendo de local fallback:`, err);
            }
        }
        
        // Fallback to IndexedDB
        return new Promise((resolve, reject) => {
            if (!this.db) {
                try {
                    const val = localStorage.getItem(key);
                    resolve(val ? JSON.parse(val) : null);
                } catch(e) { resolve(null); }
                return;
            }
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(key);
            request.onsuccess = e => resolve(e.target.result || null);
            request.onerror = e => reject(e.target.error);
        });
    },

    /**
     * Sets a value (Saves to both Supabase and IndexedDB fallback)
     */
    async set(key, val) {
        // Save to IndexedDB first
        if (this.db) {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            store.put(val, key);
        }

        if (isSupabaseConfigured && supabaseClient) {
            try {
                const { error } = await withTimeout(
                    supabaseClient
                        .from('landing_state')
                        .upsert({ id: key, data: val }, { onConflict: 'id' }),
                    3500
                );
                
                if (error) throw error;
                console.log(`[Supabase] Guardado con éxito: ${key}`);
            } catch (err) {
                console.error(`[Supabase] Error al guardar ${key}:`, err);
            }
        }
    },

    async getLive() {
        return await this.get('mlc_landing_db_live');
    },

    async getDraft() {
        return await this.get('mlc_landing_db_draft');
    },

    async saveLive(data) {
        await this.set('mlc_landing_db_live', data);
    },

    async saveDraft(data) {
        await this.set('mlc_landing_db_draft', data);
    },

    async getLeads() {
        if (isSupabaseConfigured && supabaseClient) {
            try {
                const { data, error } = await withTimeout(
                    supabaseClient
                        .from('leads')
                        .select('*')
                        .order('created_at', { ascending: false }),
                    3000
                );
                
                if (error) throw error;
                return data || [];
            } catch (err) {
                console.error("[Supabase] Error obteniendo leads:", err);
            }
        }
        
        // Fallback to IndexedDB
        return new Promise((resolve) => {
            if (!this.db) return resolve([]);
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get('mlc_leads');
            request.onsuccess = e => resolve(e.target.result || []);
            request.onerror = () => resolve([]);
        });
    },

    async addLead(lead) {
        if (isSupabaseConfigured && supabaseClient) {
            try {
                const { error } = await withTimeout(
                    supabaseClient
                        .from('leads')
                        .insert([lead]),
                    3000
                );
                if (error) throw error;
                console.log("[Supabase] Lead guardado exitosamente");
            } catch (err) {
                console.error("[Supabase] Error al guardar lead:", err);
            }
        }

        // Fallback to IndexedDB
        if (this.db) {
            const leads = await this.getLeads();
            leads.push(lead);
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            store.put(leads, 'mlc_leads');
        }
    },

    async uploadFile(file) {
        if (!isSupabaseConfigured || !supabaseClient) {
            return null;
        }
        try {
            // Generar un nombre único para evitar colisiones
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
            
            const { data, error } = await withTimeout(
                supabaseClient
                    .storage
                    .from('cms_media')
                    .upload(fileName, file, {
                        cacheControl: '3600',
                        upsert: true
                    }),
                8000 // Timeout extendido de 8 segundos para subidas de archivos
            );
            
            if (error) throw error;
            
            // Obtener URL pública
            const { data: { publicUrl } } = supabaseClient
                .storage
                .from('cms_media')
                .getPublicUrl(fileName);
                
            console.log("[Supabase Storage] Archivo subido con éxito:", publicUrl);
            return publicUrl;
        } catch (err) {
            console.error("[Supabase Storage] Error subiendo archivo:", err);
            return null;
        }
    }
};
