Issues with async loader.

Try minimal reproducible project. Maybe Gist?

1. All css files are loaded, even when bundling is false.

    require('lasso-loader').async(function(err) {
      require('./theme-black.less');
    }
    
    require('lasso-loader').async(function(err) {
      require('./theme-normal.less');
    }
    
With JS all is ok.


2. Async require on already bundled CSS throws error.

    require('lasso-loader').async(function(err) {
      require('./style.less');
    }

