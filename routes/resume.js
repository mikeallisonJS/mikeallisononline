var projects = require('../models/projects');

module.exports = function (app) {
    var year = new Date().getFullYear();
    app.route('/resume').get(function(req, res) {
        res.render('resume', {
            title: 'Resume',
            projects: projects,
            year: year,
            isResume: true
        });
    });
};