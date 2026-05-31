const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

console.log('[log]:{S}:(01)'); // 01 means server started

wss.on('connection', (ws) => {
  console.log('[log]:{S}:(+)'); // new user
  ws.send('+');
  
  ws.on('message', (data) => {
    console.log('[log]:{M}:', data); // new messege
  });
  
  ws.on('error', (error) => {
    console.error('[log]:{E}:', error); // client and other errors
  });
  
  ws.on('close', () => {
    console.log('[log]:{S}:(-)'); // lost user
  });
});

wss.on('error', (error) => {
  console.error('[log]:{S.E}:', error); // server errors get there own line
});
