var express = require('express');
var router = express.Router();


router.get('/', function(req ,res){
  console.log('Default route is called');
  res.render('index');
});



module.exports = router;
