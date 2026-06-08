const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

// loads the config
const configPath = path.join(process.cwd(), 'config.json');

let config = {};

try {
    config = JSON.parse(
        fs.readFileSync(configPath, 'utf8')
    );
} catch (error) {
    console.error('[log]:{C.E}: Failed to load config.json');
    console.error(error);
    process.exit(1);
}

// config port
const port = config.wsport || 8080;

// websocket server
const wss = new WebSocket.Server({ port });

console.log('[log]:{S}:(01)');
console.log('[log]:{CFG}:', config);
console.log('[log]:{PORT}:', port);

wss.on('connection', (ws) => {
    console.log('[log]:{S}:(+)');

    ws.send('+');

    ws.on('message', (data) => {
        console.log('[log]:{M}:', data.toString());
    });

    ws.on('error', (error) => {
        console.error('[log]:{E}:', error);
    });

    ws.on('close', () => {
        console.log('[log]:{S}:(-)');
    });
});

wss.on('error', (error) => {
    console.error('[log]:{S.E}:', error);
});
