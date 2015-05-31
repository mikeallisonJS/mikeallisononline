var projects = require('../models/projects');

/* GET home page. */
module.exports = function (app) {
    var year = new Date().getFullYear();
    app.route('/blog').get(function(req, res) {
        res.render('blog', {
            title: 'Blog',
            projects: projects,
            year: year,
            isBlog: true
        });
    });
};