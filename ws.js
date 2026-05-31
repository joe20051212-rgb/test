const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

console.log('[log]:{S}:(01)'); // 01 means server started

wss.on('connection', (ws) => {
  console.log('[log]:{S}:(+)'); // new user
//  ws.send(''); // not used
  ws.on('close', () => {
    console.log('[log]:{S}:(-)'); // lost user
  });
});
