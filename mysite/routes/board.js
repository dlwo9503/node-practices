const express = require('express');
const controller = require('../controllers/board');

const router = express.Router();
router.route("/list").get(controller.list);
router.route('/view/:no').get(controller.view);
router.route("/write").get(controller.write);
router.route("/write").post(controller._write);
router.route("/modify/:no").get(controller.modify);
router.route("/modify/:no").post(controller._modify);
router.route('/delete/:no').get(controller.delete);

module.exports = router;