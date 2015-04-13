var projects = require('../models/projects');

/* GET home page. */
module.exports = function (app) {
    var year = new Date().getFullYear();
    app.route('/Projects/:projectId').get(function(req, res, next) {
        if (!req.project) {
            res.redirect('/');
            return;
        }
        res.render('projects/' + req.project.url, {
            title: req.project.title,
            project: req.project,
            layout: 'project',
            description: req.project.description,
            year: year
        });
    });

    app.param('projectId', function (req, res, next, id) {
        req.project = projects[id];
        next();
     });
};
