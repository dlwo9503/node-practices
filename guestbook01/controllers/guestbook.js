const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res) {
        console.log(req.params.no);
        res.render('deleteform', {
            no: req.params.no || 0
        });
    },
    add: async function(req, res) {
        const results = await model.insert(req.body);
        console.log(results);
        res.redirect("/");
    },
    delete: async function(req, res) {
        console.log(req.body);
        const results = await model.delete(req.body);
        res.redirect("/");
    }
}