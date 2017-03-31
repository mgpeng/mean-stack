const WebSocketClient = require('websocket').client;
const websocket=new WebSocket('ws://localhost:1337');

Rx.Observable.fromEvent(websocket,'message')
  .map(msg=>JSON.stringify(msg.data))
  .pluck('msg')
  .subscribe(console.log);