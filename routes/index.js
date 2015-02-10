var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Humanoids Spring 2015' });
});

router.get('/hw2', function(req, res, next) {
  res.render('hw2', { title: 'Homework 2', code: "submission/ass2-arm.zip" });
});

//router.get('/hw2', function(req, res, next) {
//  res.render('hwtemplate', { title: 'Homework 2', description: 'Here is our submission for homework 2',code: "images/test.jpg" });
//});


module.exports = router;
