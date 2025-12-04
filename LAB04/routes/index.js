var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/ironman', function(req, res) {
  res.render('ironman');
});

router.get('/spiderman', function(req, res) {
  res.render('spiderman');
});

router.get('/thor', function(req, res) {
  res.render('thor');
});

router.get('/hulk', function(req, res) {
  res.render('hulk');
});

module.exports = router;
