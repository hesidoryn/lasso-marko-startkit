require('./configure');

var async = require('async');
var path = require('path');
var lasso = require('lasso');

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

process(files, pages);


// ---------------------------
// Processing of files and pages
// ---------------------------

function process(files, pages) {
  processFiles(files, function(err) {
    if (err) {
      throw err;
    }

    console.log('Files processed!');

    processPages(pages, function(err) {
      if (err) {
        throw err;
      }

      console.log('Build complete!');
    })
  });
}

function processFiles(files, callback) {
  async.eachSeries(files, function(file, callback) {
    lasso.lassoResource(path.join(__dirname, file), function(err, result) {
      if (err) {
        console.log('Failed to process file: ', err);
        callback(err);
        return;
      }

      var url = result.url; // URL for the output resource
      console.log('File "' + file + '" processed.');
      callback(null);
    });

  }, function(err) {
    if (err) {
      callback(err);
      return;
    }

    callback();
  });
}

function processPages(pages, callback) {
  async.eachSeries(pages, function(page, callback) {

    var from = path.join(__dirname, page);
    var pagePath = path.join(from, 'page.json');

    var config = {};
    if (require('fs').existsSync(pagePath)) {
      config = require(pagePath);
    }

    config.from = from;

    if (!config.name) {
      config.name = path.basename(page);
    }

    if (!config.packagePath) {
      // Look for an browser.json in the same directory
      config.packagePath = path.join(from, 'browser.json');
    }

    if (!config.cacheKey) {
      // Filename of the compiled template is the default cache key
      config.cacheKey = path.join(from, 'template.marko.js');
    }

    lasso.lassoPage(config,
      function(err, lassoPageResult) {
        if (err) {
          console.log('Failed to lasso page: ', err);
          callback(err);
          return;
        }

        console.log('Page "' + page + '" processed.');
        callback(null);
      }
    );

  }, function(err) {
    if (err) {
      callback(err);
      return;
    }

    callback();
  });
}


