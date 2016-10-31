require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      open: input.open === undefined ? false : input.open,
      textShow: input.textShow || "Show",
      textHide: input.textHide || "Hide",
      height: input.open == true ? "auto" : "0"
    };
  },

  getTemplateData: function(state) {
    return {
      open: state.open,
      className: className(state.open),
      moreClassName: state.open ? "app-section-show-more--open" : "app-section-show-more--closed",
      linkTitle: state.textShow,
      linkIndicator: state.open ? "&rarr;" : "&rarr;",
      height: state.height
    };
  },

  toggle: function(e) {
    e.preventDefault();

    var newOpen = !this.state.open;
    this.setState('open', newOpen);

    if (!newOpen) {
      this.setState('height', "0");
    } else {
      var content = this.getEl("content");
      var contentWrapper = this.getEl("contentWrapper");
      this.setState('height', contentWrapper.clientHeight + "px");
    }
  },

  init: function() {
    if (this.state.open) {
      var content = this.getEl("content");
      var contentWrapper = this.getEl("contentWrapper");
      this.setState('height', contentWrapper.clientHeight + "px");
    }
  }
});

/**
 * Build class name from value
 * @param open
 * @returns {string}
 */
function className(open) {
  var className = '';

  if (open) {
    className += ' app-section-content--open';
  } else {
    className += ' app-section-content--closed';
  }

  return className;
}
