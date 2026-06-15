/* ============================================================
   MLC MASTER CHINA - INDEXEDDB PERSISTENCE HELPER (db.js)
   ============================================================ */

const MLCDatabase = {
    dbName: 'mlc_landing_db',
    dbVersion: 1,
    storeName: 'keyval',
    db: null,

    /**
     * Initializes IndexedDB and runs migration if necessary.
     */
    init() {
        return new Promise((resolve, reject) => {
            if (!window.indexedDB) {
                console.warn("IndexedDB no es soportado por este navegador. Se usará localStorage de respaldo.");
                resolve();
                return;
            }

            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    db.createObjectStore(this.storeName);
                    console.log(`[IndexedDB] Object store '${this.storeName}' creado.`);
                }
            };

            request.onsuccess = async (e) => {
                this.db = e.target.result;
                console.log("[IndexedDB] Base de datos conectada con éxito.");
                try {
                    await this.migrateFromLocalStorage();
                } catch (err) {
                    console.error("[IndexedDB] Error durante la migración de localStorage:", err);
                }
                resolve();
            };

            request.onerror = (e) => {
                console.error("[IndexedDB] Error al abrir la base de datos:", e.target.error);
                reject(e.target.error);
            };
        });
    },

    /**
     * Internal: Gets a value by key.
     */
    get(key) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                // Fallback to localStorage
                try {
                    const val = localStorage.getItem(key);
                    resolve(val ? JSON.parse(val) : null);
                } catch (e) {
                    reject(e);
                }
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(key);

            request.onsuccess = (e) => {
                resolve(e.target.result || null);
            };

            request.onerror = (e) => {
                reject(e.target.error);
            };
        });
    },

    /**
     * Internal: Sets a value for a key.
     */
    set(key, val) {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                // Fallback to localStorage
                try {
                    localStorage.setItem(key, JSON.stringify(val));
                    resolve();
                } catch (e) {
                    reject(e);
                }
                return;
            }

            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const store = transaction.objectStore(this.storeName);
            const request = store.put(val, key);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (e) => {
                reject(e.target.error);
            };
        });
    },

    /**
     * Gets the live landing page database.
     */
    async getLive() {
        return await this.get('mlc_landing_db_live');
    },

    /**
     * Gets the draft/working database.
     */
    async getDraft() {
        return await this.get('mlc_landing_db_draft');
    },

    /**
     * Saves the live landing page database.
     */
    async saveLive(data) {
        await this.set('mlc_landing_db_live', data);
    },

    /**
     * Saves the draft/working database.
     */
    async saveDraft(data) {
        await this.set('mlc_landing_db_draft', data);
    },

    /**
     * Checks if there's any data in localStorage and migrates it to IndexedDB.
     * Removes the keys from localStorage after successful migration to free up quota.
     */
    async migrateFromLocalStorage() {
        // Only run if we don't already have live data in IndexedDB
        const indexedLive = await this.get('mlc_landing_db_live');
        if (!indexedLive) {
            const localLiveStr = localStorage.getItem('mlc_landing_db_live');
            const localDraftStr = localStorage.getItem('mlc_landing_db_draft');

            let migratedLive = false;
            let migratedDraft = false;

            if (localLiveStr) {
                console.log("[IndexedDB Migration] Migrando 'mlc_landing_db_live' de localStorage...");
                try {
                    const localLive = JSON.parse(localLiveStr);
                    await this.saveLive(localLive);
                    migratedLive = true;
                } catch (e) {
                    console.error("[IndexedDB Migration] Error parseando 'mlc_landing_db_live':", e);
                }
            }

            if (localDraftStr) {
                console.log("[IndexedDB Migration] Migrando 'mlc_landing_db_draft' de localStorage...");
                try {
                    const localDraft = JSON.parse(localDraftStr);
                    await this.saveDraft(localDraft);
                    migratedDraft = true;
                } catch (e) {
                    console.error("[IndexedDB Migration] Error parseando 'mlc_landing_db_draft':", e);
                }
            }

            // Clean up localStorage to prevent QuotaExceededError in the origin
            if (migratedLive) {
                localStorage.removeItem('mlc_landing_db_live');
                console.log("[IndexedDB Migration] 'mlc_landing_db_live' eliminado de localStorage.");
            }
            if (migratedDraft) {
                localStorage.removeItem('mlc_landing_db_draft');
                console.log("[IndexedDB Migration] 'mlc_landing_db_draft' eliminado de localStorage.");
            }
        }
    }
};
