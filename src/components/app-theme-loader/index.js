require('./style.less');

var loader = require('lasso-loader');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  loadBlack: function() {
    loader.async(function(err) {
      if (err) {
        return;
      }

      require('./theme-black')();
    });
  },

  loadNormal: function() {
    loader.async(function(err) {
      if (err) {
        return;
      }

      require('./theme-normal')();
    });
  }

});