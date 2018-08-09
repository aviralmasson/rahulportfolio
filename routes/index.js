var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'PORTFOLIO',

  });
});


/* GET home page. */
router.get( '/Home',function(req, res, next) {

  res.render('Home', {
    title:'Home',

  });
});

/* GET About page. */
router.get( '/About',function(req, res, next) {

    res.render('About', {
        title:'About',

    });
});

/* GET Services page. */
router.get( '/Services',function(req, res, next) {

    res.render('Services', {
        title:'Services',

    });
});

/* GET Portfolio page. */
router.get( '/Portfolio',function(req, res, next) {

    res.render('Portfolio', {
        title:'Portfolio',

    });
});

/* GET Contact page. */
router.get( '/Contact',function(req, res, next) {

    res.render('Contact', {
        title:'Contact',

    });
});


module.exports = router;
