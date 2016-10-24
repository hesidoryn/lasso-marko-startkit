require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      value: input.value || 0
    };
  },

  getTemplateData: function(state) {
    return {
      value: state.value,
      className: className(state.value)
    };
  },

  dec: function() {
    this.setState('value', this.state.value - 1);
  },

  inc: function() {
    this.setState('value', this.state.value + 1);
  }
});


// Helper function
function className(value) {
  var className = 'number-spinner';

  if (value < 0) {
    className += ' negative';
  } else if (value > 0) {
    className += ' positive';
  }

  return className;
}