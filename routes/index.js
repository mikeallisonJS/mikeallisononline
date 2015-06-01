var projects = require('../models/projects');

/* GET home page. */
module.exports = function (app) {
    var year = new Date().getFullYear();
    app.route('/').get(function(req, res) {
        res.render('index', {
            title: 'Home',
            description: 'A Lead Web Application Developer & Architect in Nashville, TN focusing on Node.JS, c#, .net, Angular, jQuery, Knockout, Bootstrap UI and other AJAX technologies.',
            projects: projects,
            year: year,
            isHome: true
        });
    });
};

