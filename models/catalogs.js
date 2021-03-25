var db=require('./config/database');//add model database to connect database
var ejs = require ('ejs');
var data=[]; 
var obj ={};

// show all book
exports.list = function(req, res, next){
    let sql = `SELECT * FROM kirjasto`;
    db.query(sql, function( err, result){
        if(err){
            throw err;
        }else{
            obj = {list: result};
            res.render("catalog_list",obj);
        }});
}
// Render addNew page
exports.addnew = function(req,res,next){
    res.render("catalog_addnew");
}

// Show detail of book by ID
exports.detail = function(req,res,next){
    var id = req.params.id;
    let sql = `SELECT * FROM kirjasto where ID = "${id}"`;
    db.query(sql, function(err,result){
        if (err) {
            throw err;
        } else {
            obj = {idBook: result};
            res.render("details",obj);
        }});
}

exports.detailEdit = function(req,res,next){
    var id = req.params.id;
    let sql = `SELECT * FROM kirjasto where ID = "${id}"`;
    db.query(sql, function(err,result){
        if (err) {
            throw err;
        } else {
            obj = {idEdit: result};
            res.render("edit",obj);
        }});
}

// creat new book
exports.create = function(req,res,next){
    var book=req.body.book;
    var author=req.body.author;
    var category = req.body.category;
    var picture = req.body.picture;
    var content = req.body.content;
    var location = req.body.location;
    var availabe = req.body.availabe;
    let sql = `insert into kirjasto(Book, Author, Category, Picture, Content, Location, Availabe) values("${book}","${author}", "${category}","${picture}","${content}","${location}","${availabe}")`;
    db.query(sql,function(err,result){
        if (err) {
            throw err;
        } else {
            res.redirect('/cat');
        }});
}

//update record in table
exports.update = function(req,res,next){
    var book=req.body.book;
    var author=req.body.author;
    var category = req.body.category;
    var picture = req.body.picture;
    var content = req.body.content;
    var location = req.body.location;
    var availabe = req.body.availabe;
    var id = req.params.id;
    console.log(id);
    let sql = `UPDATE kirjasto SET book = "${book}", author = "${author}", category = "${category}", picture = "${picture}", content = "${content}", location ="${location}", availabe = "${availabe}"  where ID = "${id}"`;
    db.query(sql,function(err,result){
        if (err) {
            throw err;
        } else {
            res.redirect("/cat");
        }});
}
// dalete 1 record from table
exports.delete = function(req,res,next){
    var id = req.params.id;
    var sql = `DELETE FROM kirjasto where ID = "${id}"`;
    db.query(sql,function(err,result){
        if (err) {
            throw err;
        } else {
            res.redirect("back");
        }});
}
