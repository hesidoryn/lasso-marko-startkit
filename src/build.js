require('./configure');

// Enable logging for 'lasso-marko-extras'
require('raptor-logging').configure({
  loggers: {
    'lasso-marko-extras': 'INFO'
  }
});

// Build static assets
require('lasso-marko-extras').build({
  baseDir: __dirname,
  files: [
    'layouts/base/favicon.ico'
  ],
  pages: [
    'pages/index',
    'pages/switcher/pages/index',
    'pages/switcher/pages/about',
    'pages/switcher/pages/faq'
  ]
});
