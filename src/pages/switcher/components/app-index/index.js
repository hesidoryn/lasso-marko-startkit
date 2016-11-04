module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return { };
  },

  getTemplateData: function(state) {
    return { };
  },

  init: function() {
    console.log('init');
  },

  onBeforeDestroy: function() {
    console.log('onBeforeDestroy');
  },

  onDestroy: function() {
    console.log('onDestroy');
  }

});

