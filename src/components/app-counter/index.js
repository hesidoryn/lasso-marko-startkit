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
  },

  change: function() {
    var input = this.getEl('input');
    var val = parseInt(input.value, 10) || this.state.value;

    this.setState('value', val);
    this.setStateDirty('value');  // force update, even if state is the same
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