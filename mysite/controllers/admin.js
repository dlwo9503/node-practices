const models = require('../models');

module.exports = {
    main: async function(req, res, next) {
        try {
            const results = await models.Site.findOne();
            res.render('admin/main', {
                vo: results
            });
        } catch (e) {
            next(e);
        }
    },
    update: async function(req, res, next) {
        try {
            //const [...updateObject] = Object.assign(req.body);
            console.log("update");
            // await models.Site.update(updateObject, {
                
            // });
            res.redirect("/admin");
        } catch (e) {
            next(e);
        }
    },
}