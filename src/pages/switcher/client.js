var $ = require('jquery/dist/jquery.min.js');

exports.clickLink = function(url, flag) {

  document.body.setAttribute('class', 'slowlyhide');

  var widgetResult = null;

  var widgetRendered = false;
  var assetsLoaded = false;
  var timeoutPassed = false;

  loadWidgetAssets(url, function (/* err */) {
    assetsLoaded = true;
    done();
  });

  loadWidgetOutput(url, function (err, result) {
    widgetResult = result;
    widgetRendered = true;
    done();
  });

  if (!flag) {
    var name = url.split('/').pop();
    window.history.pushState({'name': name}, name, url);
  }

  function done() {
    if (widgetRendered && assetsLoaded && !timeoutPassed) {

      document.body.setAttribute('class', 'hideme');

      setTimeout(function() {
        timeoutPassed = true;
        done();
      }, 400);
      return;
    }


    if (widgetRendered && assetsLoaded && timeoutPassed) {
      document.body.setAttribute('class', '');
      scroll(0, 0);
      initWidgets(widgetResult);
    }
  }

};

function initWidgets(widget) {
  $('#page-content').html(widget.html);

  // Initialize the widgets to bind behavior!
  require('marko-widgets').initWidgets(widget.state);
}

function loadWidgetOutput(url, callback) {
  $.getJSON(url + '?preload', function(result) {
    callback(null, result);
  });
}

function loadWidgetAssets(url, callback) {
  loadAsync(urlToComponent(url), function(err) {
    callback(err);
  });
}

function urlToComponent(url) {
  if (url.endsWith('/switcher')) {
    return 'app-index';
  } else if (url.endsWith('/switcher/about')) {
    return 'app-about';
  } else if (url.endsWith('/switcher/faq')) {
    return 'app-faq';
  }
}

function loadAsync(component, callback) {
  switch (component) {
  case 'app-index': require('lasso-loader').async(['require: ./components/app-index'], callback); break;
  case 'app-about': require('lasso-loader').async(['require: ./components/app-about'], callback); break;
  case 'app-faq': require('lasso-loader').async(['require: ./components/app-faq'], callback); break;
  default: throw 'Invalid component name "' + component + '"';
  }
}
