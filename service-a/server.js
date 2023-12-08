const http = require('http');

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // wait 1 sec
    setTimeout(() => {
        console.log('Send response');
        res.end('Hello World\n');
    }, 500);
});

server.listen(3000,  () => {
    console.log('Server running at http://127.0.0.1:3000/');
});