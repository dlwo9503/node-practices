const express = require('express');
const http = require('http');
const path = require('path');
const dotnev = require('dotenv');

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

// Enviroment Variables(환경변수)
dotnev.config({
    path: path.join(__dirname, 'config/app.env')// 어떤 애를 줄거냐?, __dirname: 현재 디렉토리
});

// Application Setup
const application = express()
    // 1. static serve 
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // 2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json())                       // application/json
    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // 4. request router
    .all('*', function(req, res, next) {
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter) // -> routes
    .use('/user', userRouter)
    .use((req, res) => res.render('error/404'))// 이상하게 입력한 경로 처리, 404파일로 보냄

// Server Setup    
http.createServer(application)
    .on('listening', function(){
        console.info(`Http Server running on port ${process.env.PORT}`);
    })
    .on('error', function(error){
        if(error.syscall !== 'listen'){
            throw error;
        }
        switch(error.code){
            case 'EACCESS':
                console.error(`Port:${process.env.PORT} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`Port:${process.env.PORT} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(process.env.PORT);