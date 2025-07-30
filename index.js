/* Basic Hello from POD IP example in Node.js */
const http = require('http');
const os = require('os');

// Funcție pentru a obține IP-ul local de pe interfața 'eth0'
function getPodIP() {
    const interfaces = os.networkInterfaces();
    const eth0 = interfaces['eth0'];
    if (!eth0) return 'unknown';

    for (const iface of eth0) {
        if (iface.family === 'IPv4' && !iface.internal) {
            return iface.address;
        }
    }

    return 'unknown';
}

const podIP = getPodIP();

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello ' + podIP + '!\n');

    console.log('Served request from ' + req.connection.remoteAddress);
}

const port = 3000;
http.createServer(onRequest).listen(port, () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});