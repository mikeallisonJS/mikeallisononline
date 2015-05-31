var projects = require('../models/projects');

/* GET home page. */
module.exports = function (app) {
    var year = new Date().getFullYear();
    app.route('/contact').get(function(req, res) {
        res.render('contact', {
            title: 'Contact',
            projects: projects,
            year: year,
            isContact: true
        });
    });
};