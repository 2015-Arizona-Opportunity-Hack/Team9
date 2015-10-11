var express = require('express'),
    https = require('https');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/location', function(req, res){
  res.render('location');
});

module.exports = router;
