const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route("/list").get(controller.list);
router.route('/add').post(controller.add);
router.route('/delete/:no').get(controller.form);
router.route('/delete').post(controller.delete);

module.exports = router;
// -> controllers