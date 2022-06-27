const http = require('http');
const fs = require('fs').promises;



http.createServer(async (request, response) => {
    try {
        const data = await fs.readFile('./server2.html');
        response.writeHead(200, { 'Content-Type': 'text/html; charset-utf-8' });
        response.end(data);
    } catch (err) {
        console.error(err);
        response.writeHead(500, { 'Content-Type': 'text/plain; charset-utf-8' });
        response.end(err.mesage);
    }

}).listen(8081, () => {
    console.log('8081 포트에서 서버 대기중입니다.');
});
