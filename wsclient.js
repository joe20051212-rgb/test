const WebSocket = require('ws');
const config = require('./config.json'); // local config only

const wsUrl = `ws://localhost:${config.wsport}`; // websocket server url
const ws = new WebSocket(wsUrl);

ws.on('open', () => {
  console.log('[log]:{C}:(01)'); // 01 means client connected
});

ws.on('message', (data) => {
  console.log('[log]:{C.M}:', data); // received message
});

ws.on('error', (error) => {
  console.error('[log]:{C.E}:', error); // client errors
});

ws.on('close', () => {
  console.log('[log]:{C}:(-)'); // client disconnected
});

// Example: send a message to the server
// ws.send('Hello Server!');
