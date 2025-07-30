/* Basic HelloWorld Node.JS example */
var http = require('http');

//Node function called each time our event loop receives a new HTTP request
function onRequest(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello ' + req.connection.remoteAddress + '!');
    
    /* Write the IP addresses of our connecting client to console */
    console.log('Incoming connection from ' + req.connection.remoteAddress);
}

//Listen for connections on the port provided to us by the host process
var server = http.createServer(onRequest).listen(3000);