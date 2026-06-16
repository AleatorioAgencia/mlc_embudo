/* ============================================================
   MLC MASTER CHINA - SUPABASE PERSISTENCE HELPER (db.js)
   ============================================================ */

// INSTRUCCIONES: Reemplaza estas dos constantes con los datos de tu proyecto Supabase.
// Puedes encontrar esto en tu dashboard de Supabase: Project Settings -> API
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Si las claves no están configuradas, usará IndexedDB localmente como respaldo temporal.
const isSupabaseConfigured = SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';

let supabaseClient = null;
if (isSupabaseConfigured && window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

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
                const { data, error } = await supabaseClient
                    .from('landing_state')
                    .select('data')
                    .eq('id', key)
                    .single();
                
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
                const { error } = await supabaseClient
                    .from('landing_state')
                    .upsert({ id: key, data: val }, { onConflict: 'id' });
                
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
                const { data, error } = await supabaseClient
                    .from('leads')
                    .select('*')
                    .order('created_at', { ascending: false });
                
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
                const { error } = await supabaseClient
                    .from('leads')
                    .insert([lead]);
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
    }
};
