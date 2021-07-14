# Mysite on Node(Express)

## project manifest 파일(package.json) 생성
npm init -y

## 설치패키지
npm i express
npm i express-session
npm i ejs
npm i dotenv
npm i sequelize
npm i mysql2
npm i -D nodemon

## scripte in package.json

"scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js"
},

## 프로젝트 구조
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- /node-mobules
    |--- /config
    |--- /public
    |--- /routes
    |--- /controllers
    |--- /models
    |--- /views
            |--- /main
            |--- /user
            |--- /guestbook
            |--- /board
            |--- /gallery
            |--- /admin


 mkdir config
 mkdir public
 mkdir routes
 mkdir controllers
 mkdir models
 mkdir views