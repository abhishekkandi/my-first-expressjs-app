var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('User Page');
});

/* GET users listing. */
router.get('/user/detail', function(req, res, next) {
  res.send('User details page');
});

module.exports = router;
