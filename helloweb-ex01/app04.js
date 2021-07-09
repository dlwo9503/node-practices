const connect = require('connect');
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 8080;
const app = connect();

app.use(serveStatic(__dirname + '/public')); // __dirname : 현재 프로젝트 위치
app.use(connectRoute(function(router){
    router.get("/", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': "text/html"
        })
        resp.end("<h1>main</h1>");
    })
    router.get("/user", function(req, resp){
        console.log(req._parsedUrl.query);

        req.query = {};
        params = (req._parsedUrl.query || "").split("&"); // null 이면 ""됨
        params.forEach(param => {
            tokens = param.split("=");
            params[tokens[0]] = tokens[1];
        });
        console.log(params);

        resp.writeHead(200, {
            'Content-Type': "text/html"
        })
        resp.end("<h1>user no:" + params.no + "</h1>");
    })
    router.get("/guestbook", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': "text/html"
        })
        resp.end("<h1>guestbook list</h1>");
    })
    router.get("/board", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': "text/html"
        })
        resp.end("<h1>board list</h1>");
    })
    router.get("/board/:no", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': "text/html"
        })
        resp.end("<h1>board view(" + req.params.no + ")</h1>");
    })
}))
app.listen(port, function(){
    console.log(`Http Server running on port ${port}`);
})