require("./style.less");

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {};
  },

  getTemplateData: function(state, input) {
    return {};
  }
});

