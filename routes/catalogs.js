var express = require('express');
var router = express.Router();
var modelCatalogs = require('../models/catalogs');
var ejs = require ('ejs');

router.get('/', modelCatalogs.list);
router.get('/addnew', modelCatalogs.addnew);
router.get('/details/:id/:book', modelCatalogs.detail)
router.get('/edit/:id', modelCatalogs.detailEdit)
router.post('/store', modelCatalogs.create);
router.put('/:id', modelCatalogs.update);
router.delete('/:id', modelCatalogs.delete);

module.exports = router;