const {Sequelize, DataTypes} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('Site', { // 유저라는 객체의 정보를 넣으면 됨
        title: {
            field: 'title',
            type: DataTypes.STRING(50),
            primaryKey: true,
            allowNull: false // notnull
        },
        welcome: {
            field: 'welcome',
            type: DataTypes.STRING(45),
            allowNull: false // notnull
        },
        profile: {
            field: 'profile',
            type: DataTypes.STRING(200),
            allowNull: false // notnull
        },
        description: {
            field: 'description',
            type: DataTypes.TEXT,
            allowNull: false, // notnull
        }
    }, {
        underscored: true, // 스네이크
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'site'
    });
}