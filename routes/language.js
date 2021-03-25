var express = require('express');
var router = express.Router();
var modelCatalogs = require('../models/language');

//GET/feedback
router.get('/', modelCatalogs.show);/* GET home page. */

module.exports = router;
