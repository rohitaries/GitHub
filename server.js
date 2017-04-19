var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var users = require("./routes/rohit");


var app = express();


app.use(logger('dev'));
//app.use (bodyParser.json());
app.use('/', users);


app.set('views', path.join(__dirname , 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
//app.use(express.static(path.join(__dirname , 'public')));


app.listen(8080, function(req,res){
        console.log("Server is running at port 8080....");
});
