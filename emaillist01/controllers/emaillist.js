// 이메일리스트 컨트롤러
const model = require('../models/emaillist');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res) {
        res.render('form');
    },
    add: async function(req, res) {
        const results = await model.insert(req.body);
        console.log(results);
        res.redirect("/");
    }
}

/*
원래는 이렇게 쓰는게 맞음
exports.index = function(req, res){
}
exports.form = function(req, res){
}
exports.add = function(req, res){
}
*/ 