const http2 = require('http2');
const fs = require('fs');



http2.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로')
    ]
}, (res, req) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>')
    res.end('<p>Hello Server!</p>')
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기중입니다.');
    })