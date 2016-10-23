/**
 * The following line allows application-level modules to be required as if
 * they were installed into the node_modules directory.
 * IMPORTANT: The search path should be modified before any modules are loaded!
 *
 * Instead of this:
 *    var module = require('../../../module')
 *
 * You can write this:
 *    var module = require('src/path/to/module')
 */
require('app-module-path').addPath(__dirname + "/..");

/**
 * Marko provides a custom Node.js require extension that allows Marko templates
 * to be require'd just like a standard JavaScript module.
 *
 * Instead of this:
 *     var template = require('marko').load(require.resolve('./template.marko'));
 *
 * You can write:
 *     var template = require('./template.marko');
 */
require('marko/node-require').install();


/**
 * Dependencies can be "required" inside a JavaScript module as shown in the following
 * sample JavaScript code:
 *
 *    require('./style.less');
 *
 * The only caveat to using a require() call to add a non-JavaScript module dependency is
 * that by default Node.js will try to load the required file as a JavaScript module if the
 * code runs on the server. To prevent Node.js from trying to load a Less file or other
 * non-JavaScript files as JavaScript modules you enable 'no-op' for the following extensions:
 */
require('lasso/node-require-no-op').enable('.less', '.css');


var express = require('express');
var compression = require('compression');
var marko = require('marko');

// Configure the Lasso.js
require('lasso').configure({
  plugins: [
    'lasso-marko',
    'lasso-less'
  ]
});

var app = express();
var port = 8080;

app.use(compression()); // Enable gzip compression for all HTTP responses

/**
 * Lasso includes optional middleware for both Express and Koa that can be used to serve
 * up the static files that it generates:
 */
app.use(require('lasso/middleware').serveStatic());

app.get('/', require('./pages/index'));

app.listen(port, function() {
  console.log('Listening on port %d', port);

  // This is how we communicate to "browser-refresh"
  // that application is ready to start serving traffic:
  if (process.send) {
    process.send('online');
  }
});