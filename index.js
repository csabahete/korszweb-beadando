'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('superagent');

// var bmf = require('./app/bmf').create();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/albums/:album_id/best?', function(req, res) {
  res.send({}).json();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Best Music Finder Service is listening at http://%s:%s', host, port);
});

module.exports = app;