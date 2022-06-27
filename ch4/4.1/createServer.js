const http = require('http')

http.createServer((request, response) => {
    //여기에 어떻게 응답할지 적습니다.
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h1>Heollo Node!<h1>');
    response.end('<p>Heollo Server!</p>')
}).listen(8082, () => {
    console.log('8082번 포트에서 서버 대기중입니다!');
})