import http from 'node:http';

http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    response.end('Olá senhor!')
}).listen(3000);

