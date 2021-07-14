const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'webdb', 'webdb', 'webdb', { // user, pw, db
        host: '192.168.254.65',
        port: 3307,
        dialect: 'mysql' // 어떤 db를 쓸거냐?
    }
);

const User = require('./User')(sequelize);
// const Guestbook = require('./Guestbook')(sequelize);

User.sync({ // 싱크 옵션
    force: false,
    alter: true // 개발중에는 true가 나음, 우린 이미 개발했으니 true ㄲ
})
// Guestbook.sync({
//     force: false,
//     alter: true
// })

module.exports = {User};
// module.exports = {User, Guestbook};