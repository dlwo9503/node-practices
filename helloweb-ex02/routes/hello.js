const express = require('express');

const router = express.Router();
router.route("/01").get(function(req, res){
    res.render('hello/01');
});

router.route("/02").get(function(req, res){
    res.render('hello/02', {
        no: req.query.no || "", // false 일 시 디폴트 값 설정
        email: req.query.email  || "" // false 일 시 디폴트 값 설정
    });
});

module.exports = router;