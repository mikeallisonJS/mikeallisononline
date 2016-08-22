var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var compress = require('compression');
var app = express();

app.use(compress());

app.use(favicon(__dirname + '/../dist/favicon.ico'));

var cacheTime = 60*60*24;
var staticOptions = {maxAge: cacheTime};
app.use(express.static(path.join(__dirname, '../dist'), staticOptions));

//routes
require('./api')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
