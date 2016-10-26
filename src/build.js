require('./configure');

var path =   require('path');
var async =  require('async');
var lasso =  require('lasso');

var pages = [
  "pages/test",
  "pages/aga",
  "pages/index"
];

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
    throw err;
  }

  console.log('Build complete!');
});

