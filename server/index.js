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

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist') + '/index.html')
});

module.exports = app;
