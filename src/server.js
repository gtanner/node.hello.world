var express = require('express'),
    cons = require('consolidate');

module.exports = function () {
  var app = express();
  app.engine('html', cons.swig);
  app.set('view engine', 'html');
  app.set('views', __dirname + '/../views');
  return app;
};
