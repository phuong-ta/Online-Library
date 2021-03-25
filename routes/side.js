var express = require('express');
var router = express.Router();
var modelCatalogs = require('../models/side');

//GET/feedback
router.get('/feedback', modelCatalogs.feedback);
router.get('/', modelCatalogs.list);/* GET home page. */

module.exports = router;
