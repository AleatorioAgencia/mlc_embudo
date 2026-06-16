const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Endpoint to automatically save the DB state to default_db.json on disk
    if (req.method === 'POST' && req.url === '/api/save-db') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                fs.writeFileSync(path.join(PUBLIC_DIR, 'default_db.json'), JSON.stringify(data, null, 2), 'utf8');
                console.log('[Dev Server] default_db.json actualizado automáticamente en disco.');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                console.error('[Dev Server] Error al guardar default_db.json:', err);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    // Endpoint to save captured lead
    if (req.method === 'POST' && req.url === '/api/save-lead') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const lead = JSON.parse(body);
                const leadsPath = path.join(PUBLIC_DIR, 'leads.json');
                let leads = [];
                if (fs.existsSync(leadsPath)) {
                    try {
                        leads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));
                    } catch (e) {
                        console.error('[Dev Server] Error parseando leads.json existente, reiniciando array:', e);
                    }
                }
                leads.push(lead);
                fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2), 'utf8');
                console.log('[Dev Server] Lead guardado en disco con éxito:', lead.email);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                console.error('[Dev Server] Error al guardar el lead:', err);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    // Endpoint to retrieve all leads from disk
    if (req.method === 'GET' && req.url === '/api/get-leads') {
        try {
            const leadsPath = path.join(PUBLIC_DIR, 'leads.json');
            let leads = [];
            if (fs.existsSync(leadsPath)) {
                leads = JSON.parse(fs.readFileSync(leadsPath, 'utf8'));
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(leads));
        } catch (err) {
            console.error('[Dev Server] Error al obtener los leads:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }

    // Serve static files
    let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
    
    // Safety check to prevent directory traversal
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`[Dev Server] Servidor de desarrollo corriendo en: http://localhost:${PORT}`);
});
