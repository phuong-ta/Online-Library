var db=require('./config/database');//add model database to connect database
var ejs = require ('ejs');
var data=[]; 
var obj ={};

exports.list = function(req, res, next){
    let sql = `SELECT * FROM kirjasto`;
    db.query(sql, function( err, result){
        if(err){
            throw err;
        }else{
            obj = {list: result};
            res.render("index",obj);
        }
    });
}

exports.feedback = function(req, res, next){
    res.render("feedback");
}