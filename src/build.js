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
  "pages/test",
  "pages/aga",
  "pages/index"
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

    var name = path.basename(page);
    var packagePath = path.join(__dirname, page, "browser.json");
    var from = path.join(__dirname, page);

    lasso.lassoPage({
        name: name,
        packagePath: packagePath,
        from: from
      },
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


