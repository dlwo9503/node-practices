const logger = require('../logging');
module.exports = {
    error404: function(req, res){
        res.status(404).render('error/404')
    },
    error500: function(err, req, res, next){
        // 로깅처리
        // err.name, err.message, err.stack
        logger.error(err.stack);

        // 사과페이지
        // res.status(500).render('error/500');
        res.status(500).send(`<pre>${err.stack}</pre>`);
    }
}