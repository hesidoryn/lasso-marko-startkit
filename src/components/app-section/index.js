require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      open: input.open === undefined ? false : input.open,
      textShow: input.textShow || "Show",
      textHide: input.textHide || "Hide"
    };
  },

  getTemplateData: function(state) {
    return {
      open: state.open,
      className: className(state.open),
      linkTitle: state.open ? state.textHide : state.textShow,
      linkIndicator: state.open ? "&darr;" : "&rarr;"
    };
  },

  toggle: function(e) {
    e.preventDefault();
    this.setState('open', !this.state.open);
  }
});

/**
 * Build class name from value
 * @param open
 * @returns {string}
 */
function className(open) {
  var className = 'app-section';

  if (open) {
    className += ' app-section--open';
  } else {
    className += ' app-section--closed';
  }

  return className;
}
