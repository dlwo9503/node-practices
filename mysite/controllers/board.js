const models = require('../models');
const moment = require('moment');

module.exports = {
    list: async function(req, res, next) {
        try {
            const results = await models.Board.findAll({
                order: [['no','DESC']],
                where: {},
                include: { // join
                    model: models.User,
                    require: true // inner
                },
                offset : 0, limit: 5
            });
            res.render('board/list', {
                list: results || [],
                moment: moment
            });
        } catch (e) {
            next(e);
        }
    },
    modify: async function(req, res) {
        const results = await models.Board.findOne({
            attributes: ['title', 'contents'],
            where: {
                no: req.params.no || 0
            }
        });
        res.render('board/modify', {
            vo: results,
            moment: moment,
            no: req.params.no || 0
        })
    },
    _modify: async function(req, res, next){
        try {
            const updateObject = Object.assign(req.body);
            await models.Board.update(updateObject, {
                where: {
                    no: req.params.no || 0
                }
            });
            res.redirect("/board/modify/" + req.params.no);
        } catch(e) {
            next(e);
        }   
    },
    view: async function(req, res) {
        const results = await models.Board.findOne({
            attributes: ['title', 'contents','hit'],
            where: {
                no: req.params.no || 0
            }
        });
        await models.Board.update(
            {hit : results.hit + 1}, 
            {where: {
                no: req.params.no || 0
            }}
        );
        res.render('board/view', {
            vo: results,
            moment: moment,
            no: req.params.no || 0
        });
    },
    write: function(req, res) {
        res.render('board/write', {
            no: req.params.no || 0
        });
    },
    _write: async function(req, res, next) {
        try {
            const result = await models.Board.create({
                title: req.body.title,
                contents: req.body.content,
                hit: 0,
                groupNo: 0,
                orderNo: 0,
                depth: 0,
                userNo: req.session.authUser.no
            });
            res.redirect("/board/list");
        } catch (e) {
            next(e);
        }
    },
    delete: async function(req, res, next) {
        try {
            await models.Board.destroy({
                where: {
                    no: req.params.no || 0
                }
              });
            res.redirect("/board/list");
        } catch (e) {
            next(e);
        }
    },
}