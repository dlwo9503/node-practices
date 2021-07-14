const {Sequelize, DataTypes} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('User', { // 유저라는 객체의 정보를 넣으면 됨
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false // notnull
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(200),
            allowNull: false // notnull
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(45),
            allowNull: false // notnull
        },
        gender: {
            field: 'gender',
            type: DataTypes.ENUM(['male', 'female']),
            allowNull: false // notnull
        },
        role: {
            field: 'role',
            type: DataTypes.ENUM(['ADMIN', 'USER']),
            allowNull: true, // notnull
            defaultValue: 'USER' // 디폴트값
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'user'
    });
}