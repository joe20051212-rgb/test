const WebSocket = require('ws');
const config = require('./config.json'); // local config only

const wsUrl = `ws://localhost:${config.wsport}`; // websocket server url , it is set to localhost for tests , ill change it later
const ws = new WebSocket(wsUrl);

ws.on('open', () => {
  console.log('[log]:{C}:(01)'); // 01 means client connected
  // Send message only after connection is open
  ws.send('Testing 123456789 !?-/*=)ç&"é'); // bug fixes
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
