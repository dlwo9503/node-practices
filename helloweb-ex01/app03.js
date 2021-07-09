const connect = require('connect');
const serveStatic = require('serve-static');

const port = 8080;

const app = connect();
app.use(serveStatic(__dirname+ '/public'));  //  미들웨어(중간단계), __dirname 현재 프로젝트 위치
app.listen(port,function() {
    console.log(`Http Server running on port ${port}`);
});