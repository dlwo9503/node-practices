
const guestbook = require('../../guestbook01/models/guestbook');
const models = require('../models');
const moment = require('moment');

module.exports = {
    list: async function(req, res, next) {
        try {
            const results = await models.Guestbook.findAll({
                order: [['no','DESC']]
            });
            res.render('guestbook/list', {
                list: results || [],
                moment: moment
            });
        } catch (e) {
            next(e);
        }
    },
    form: function(req, res) {
        res.render('guestbook/deleteform', {
            no: req.params.no || 0
        });
    },
    add: async function(req, res, next) {
        try {
            const result = await models.Guestbook.create({
                name: req.body.name,
                password: req.body.pass,
                message: req.body.content
                // regDate: new Date()
            });
            res.redirect("/guestbook/list");
        } catch (e) {
            next(e);
        }
    },
    delete: async function(req, res, next) {
        try {
            await models.Guestbook.destroy({
                where: {
                  no: req.body.no,
                  password: req.body.password
                }
              });
            res.redirect("/guestbook/list");
        } catch (e) {
            next(e);
        }
    }
}