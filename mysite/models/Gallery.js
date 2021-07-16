const {Sequelize, DataTypes} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('Gallery', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            field: 'comment',
            type: DataTypes.STRING(200),
            allowNull: false // notnull
        },
        url: {
            field: 'url',
            type: DataTypes.STRING(200),
            allowNull: false // notnull
        }
    }, {
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'gallery'
    });
}