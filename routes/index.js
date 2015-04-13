var express = require('express');
var router = express.Router();
var projects = require('../models/projects');

/* GET home page. */
router.get('/', function(req, res, next) {
    var year = new Date().getFullYear();
    res.render('index', {
        title: 'Home',
        description: 'A Lead Web Application Developer & Architect in Nashville, TN focusing on Node.JS, c#, .net, Angular, jQuery, Knockout, Bootstrap UI and other AJAX technologies.',
        projects: projects,
        year: year
    });
});

module.exports = router;
