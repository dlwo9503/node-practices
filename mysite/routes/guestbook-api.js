const express = require('express');
const controller = require('../controllers/guestbook-api');

const router = express.Router();
router.route("").get(controller.read); // R
router.route("/:no").delete(controller.delete); // D
router.route("").post(controller.create); // C

module.exports = router;
// -> controllers