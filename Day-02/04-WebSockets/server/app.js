
var nodejsWebSocket = require('nodejs-websocket');
var http=require('http');

var server = nodejsWebSocket.createServer(function(connection){
    console.log("A new client connected");
    connection.on("text", function(msg){
        for(var i=0; i<server.connections.length; i++){
             var con = server.connections[i];
            con.sendText(msg);
        }
    })
});

server.listen(9999);
console.log("Socket server listening on port 9999");
