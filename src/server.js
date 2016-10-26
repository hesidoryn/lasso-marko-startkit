require('./configure.js');

var port = 8080;
var express = require('express');
var app = express();

var compression = require('compression');
app.use(compression()); // Enable gzip compression for all HTTP responses

/**
 * Lasso includes optional middleware for both Express and Koa that can be used to serve
 * up the static files that it generates:
 */
app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./pages/index'));
app.get('/test', require('./pages/test'));
app.get('/aga', require('./pages/aga'));

app.listen(port, function() {
  console.log('Listening on port %d', port);

  // This is how we communicate to "browser-refresh"
  // that application is ready to start serving traffic:
  if (process.send) {
    process.send('online');
  }
});