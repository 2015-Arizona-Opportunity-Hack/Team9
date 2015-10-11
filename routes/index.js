var express = require('express'),
    https = require('https');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var options = {
  //   hostname: 'api.twitter.com',
  //   port: 443,
  //   path: '/oauth2/token',
  //   method: 'POST'
  // };
  // var req = https.request(options, function(res) {
  //   console.log("statusCode: ", res.statusCode);
  //   console.log("headers: ", res.headers);
  //
  //   res.on('data', function(d) {
  //     process.stdout.write(d);
  //   });
  // });
  res.render('home', { title: 'Express' });
});

module.exports = router;
