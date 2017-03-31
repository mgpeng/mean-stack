
const Rx=require('rxjs/Rx');
const WebSocketServer=require('websocket').server;
const http=require('http');

//ws port
const server = http.createServer();
server.listen(1337);

// create the server
wsServer= new WebSocketServer({
    httpServer:server
});

Rx.Observable.fromEvent(wsServer,'request')
   .map(req=>req.accept(null,req))
   .subscribe(conn=>{
       conn.sendUTF(JSON.stringify({msg:'Hello socket'}))
   });