const http = require('http');

http.createServer((res, req) => {
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>')
    res.end('<p>Hello Server!</p>')
})
    .listen(8081, () => {
        console.log('8081번 포트에서 서버 대기중입니다.');
    })