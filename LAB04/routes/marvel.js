var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res) {
  res.render('home'); // views/home.ejs
});

// Iron Man page
router.get('/ironman', function(req, res) {
  res.render('ironman'); // views/ironman.ejs
});

// Spider-Man page
router.get('/spiderman', function(req, res) {
  res.render('spiderman'); // views/spiderman.ejs
});

// Thor page
router.get('/thor', function(req, res) {
  res.render('thor'); // views/thor.ejs
});

// Hulk page
router.get('/hulk', function(req, res) {
  res.render('hulk'); // views/hulk.ejs
});

module.exports = router;
