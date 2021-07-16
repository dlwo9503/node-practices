const models = require('../models');

module.exports = {
    create: async function(req, res, next){
        try {
            console.log(req.body);
            // sql insert
            res.status(200).send({
                result: "success",
                data: Object.assign(req.body, {
                    no: 10, //
                    password: '',
                    regDate: new Date()
                }),
                message: null
            })
        } catch (e) {
            next(e);
        }
    },
    read: async function(req, res, next){
        try {
            
        } catch (e) {
            next(e);
        }
    },
    delete: async function(req, res, next){
        try {
            
        } catch (e) {
            next(e);
        }
    },
}