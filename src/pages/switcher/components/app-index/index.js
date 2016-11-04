module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  init: function() {
    console.log('init'); // eslint-disable-line no-console
  },

  onBeforeDestroy: function() {
    console.log('onBeforeDestroy'); // eslint-disable-line no-console
  },

  onDestroy: function() {
    console.log('onDestroy'); // eslint-disable-line no-console
  }

});

