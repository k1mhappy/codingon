const express = require('express');
const router = express.Router();
// controller 파일
const controller = require('../controller/Cvisitor');

router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);

router.post('/visitor', controller.post_visitor);

module.exports = router;