const models = require('../models');

module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        res.render('user/join');
    },
    _join: async function(req, res, next) { // db가 필요한것들을 async, async를 하게되면 예외처리 해줘야 함
        try {
            const result = await models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender
            });
            console.log(result);
            res.redirect('/user/joinsuccess');
        } catch (e) {
            next(e);
        }
    },
    login: function(req, res) {
        res.render('user/login');
    },
    _login: async function(req, res, next) {
        try {
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
        } catch (e) {
            next(e);
        }
    },
    logout: async function(req, res, next){
        try {
            await req.session.destroy();
            res.redirect('/');
        } catch (e) {
            next(e);
        }
    },
    update: async function(req, res, next){
        try {
            const user = await models.User.findOne({
                attributes: ['name', 'email', 'gender'],
                where: {
                    no: req.session.authUser.no
                }
            });
            res.render('user/update', {user : user.dataValues});
        } catch (e) {
            next(e);
        }
    },
    _update: async function(req, res, next){
        try {
            // const updateObject = Object.assign(req.body);
            // if(req.body['password' == '']){
            //     delete updateObject['password'];
            // }

            const {[req.body.password == '' ? 'password' : '']: remove, ...updateObject} = req.body; // 패스워드 비었을때 처리
            await models.User.updat(updateObject, {
                where: {
                    no: req.session.authUser.no    
                }
            });
            res.redirect("/user/update");
        } catch(e) {
            next(e);
        }   
    }
}