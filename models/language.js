var db=require('./config/database');//add model database to connect database
var ejs = require ('ejs');

exports.show = function(req, res, next){
    res.render('language');
}