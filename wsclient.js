const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

// load config beside exe/script
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

// config values
const host = config.wshost || 'localhost';
const port = config.wsport || 8080;

// websocket url
const wsUrl = `ws://${host}:${port}`;

console.log('[log]:{CFG}:', config);
console.log('[log]:{URL}:', wsUrl);

// websocket client
const ws = new WebSocket(wsUrl);

ws.on('open', () => {
    console.log('[log]:{C}:(01)');

    // test message
    ws.send('Testing 123456789 !?-/*=)ç&"é');
});

ws.on('message', (data) => {
    console.log('[log]:{C.M}:', data.toString());
});

ws.on('error', (error) => {
    console.error('[log]:{C.E}:', error);
});

ws.on('close', () => {
    console.log('[log]:{C}:(-)');
});
