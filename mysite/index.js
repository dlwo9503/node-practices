const express = require('express');
const session = require('express-session');
const http = require('http');
const path = require('path');
const dotnev = require('dotenv');

// Enviroment Variables(환경변수)
dotnev.config({path: path.join(__dirname, 'config/app.env')});// 어떤 애를 줄거냐?, __dirname: 현재 디렉토리
dotnev.config({path: path.join(__dirname, 'config/db.env')});

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

// Application Setup
const application = express()
    // 1. static serve 
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // 2. session enviroment
    .use(session({
        secret: 'mysite-session', // 쿠키 변조를 방지하기 위한 값
        resave: false,            // 요청 처리에서 세션의 변경사항이 없어도 항상 저장
        saveUninitialized: false  // 새로 세션을 생성할 때 "Uninitialized" 상태로 둔다. 따라서 로그인 세션에서는 false로 하는것이 좋다.
    }))
    // 3. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json())                       // application/json
    // 4. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // 5. request router
    .all('*', function(req, res, next) { // 모든 url
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