var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Humanoids submission' });
});

router.get('/hw1', function(req, res, next) {
  res.render('hw1', { title: 'Homework 1' });
});

module.exports = router;
