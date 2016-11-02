module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getTemplateData: function(state, input) {
    return { attrs: input['*'] };
  },

  linkClicked: function(e, el) {
    e.preventDefault();
    require("../../client").clickLink(el.href);
  }
});

