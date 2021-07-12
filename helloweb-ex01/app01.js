const http = require('http');

const port = 8080; // port number
const server = http.createServer(function(req, resp){ // 매개변수로 (요청, 응답)
    resp.writeHead(200, { // Header
        'Content-Type': 'text/html'
    });
    resp.end('<h1>Hello Web</h1>'); // Body
})

server.listen(port, function(){ // port number bind
    console.log(`Http Server running on port ${port}`);
})