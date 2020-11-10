'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('about', { title: 'About Page' });
});

/* GET about page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
