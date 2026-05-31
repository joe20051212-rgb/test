const config = require('./config.json'); // local config only
const WebSocket = require('ws');
const port = config.wsport; // config

const wss = new WebSocket.Server({ port: port }); // websocket port

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
// note : ive tested nothing if it works
// i hope it works
//.... do i suffer or do i suffer ?
//f##k it ima just go to sleep its already 1am at night (2026.06.1/1:07)
