/* eslint no-console: 0 */

require('./configure');
var extras = require('lasso-marko-extras');
require('raptor-logging').configure({
  loggers: {
    'lasso-marko-extras': 'INFO'
  }
});


// Specify any files that needs to be copied to assets folder (build/static)
var files = [
  'layouts/base/favicon.ico'
];

// Specify pages
var pages = [
  'pages/index',
  'pages/switcher/pages/index',
  'pages/switcher/pages/about',
  'pages/switcher/pages/faq'
];

extras.process(__dirname, files, pages, function(err) {
  if (err) {
    console.log('Failed to process assets!');
    throw err;
  }

  console.log('Assets processed!');
});
