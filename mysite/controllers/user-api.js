const models = require('../models');

module.exports = {
    checkemail: async function(req, res, next){
        try {
            const user = await models.User.findOne({
                attributes: ['no'],
                where: {
                    email: req.query.email || ''
                }
            })
            res.send({
                result: "success",
                data: user !== null, // false가 나오면 없다
                message: null
            })
        } catch (e) {
            next(e);
        }
    }
}