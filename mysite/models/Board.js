const {Sequelize, DataTypes} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('Board', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(200),
            allowNull: false // notnull
        },
        contents: {
            field: 'contents',
            type: DataTypes.TEXT,
            allowNull: false // notnull
        },
        regDate: {
            field: 'reg_date',
            type: DataTypes.DATE,
            allowNull: false, // notnull
            defaultValue: Sequelize.NOW
        },
        hit: {
            field: 'hit',
            type: DataTypes.INTEGER,
            allowNull: false // notnull
        },
        groupNo: {
            field: 'group_no',
            type: DataTypes.INTEGER,
            allowNull: false // notnull
        },
        orderNo: {
            field: 'order_no',
            type: DataTypes.INTEGER,
            allowNull: true // notnull
        },
        depth: {
            field: 'depth',
            type: DataTypes.INTEGER,
            allowNull: true // notnull
        },
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'board'
    });
}