require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      open: input.open
    };
  },

  getTemplateData: function(state) {
    return {
      open: state.open,
      className: className(state.open),
      linkTitle: state.open ? "Hide" : "And friends",
      linkIndicator: state.open ? "&uarr;" : "&darr;"
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
  var className = 'app-friends';

  if (open) {
    className += ' app-friends__open';
  } else {
    className += ' app-friends__closed';
  }

  return className;
}
