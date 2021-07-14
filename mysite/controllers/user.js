const models = require('../models');

module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        res.render('user/join');
    },
    _join: async function(req, res) { // db가 필요한것들을 async
        const result = await models.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        });
        console.log(result);
        res.redirect('/user/joinsuccess');
    },
    login: function(req, res) {
        res.render('user/login');
    },
    _login: async function(req, res) {
        const user = await models.User.findOne({
            attributes: ['no', 'name', 'role'],
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });
        
        if(user == null){
            res.render('user/login', Object.assign(req.body, {
                result: 'fail',
                password: ''
            }));
            return; // 충돌방지
        }

        // 로그인 처리
        req.session.authUser = user;
        res.redirect('/');
    },
    logout: async function(req, res){
        await req.session.destroy();
        res.redirect('/');
    },
    update: async function(req, res){
        const user = await models.User.findOne({
            attributes: ['name', 'email', 'gender'],
            where: {
                no: req.session.authUser.no
            }
        });
        res.render('user/update', {user : user.dataValues});
    },
    _update: async function(req, res){
        const result = await models.User.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
        }, {
            where: {
              no: req.session.authUser.no
            }
          });
        req.session.authUser.name = req.body.name;
        res.redirect('/user/update');
    }
}