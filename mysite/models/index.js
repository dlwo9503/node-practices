const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        timezone: "+09:00",
        dialect: 'mysql' // 어떤 db를 쓸거냐?
    }
);

const User = require('./User')(sequelize);
const Guestbook = require('./Guestbook')(sequelize);
const Gallery = require('./Gallery')(sequelize);
const Site = require('./Site')(sequelize);

User.sync({ // 싱크 옵션
    force: process.env.TABLE_CREATE_ALWAYS === 'true', // 트루면 트루로 세팅됨
    alter: process.env.TABLE_ALTER_SYNC === 'true' // 개발중에는 true가 나음, 우린 이미 개발했으니 true ㄲ
})
Guestbook.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
})
Gallery.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
})
Site.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_SYNC === 'true'
})

module.exports = {Sequelize ,User, Guestbook, Gallery, Site};