require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      value: asInt(input.value, 0)
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

  change: function(e, el) {
    this.setStateDirty('value', asInt(el.value, this.state.value));  // force update, even if state is the same
  }
});


/**
 * Build class name from value
 * @param value
 * @returns {string}
 */
function className(value) {
  var className = 'number-spinner';

  if (value < 0) {
    className += ' negative';
  } else if (value > 0) {
    className += ' positive';
  }

  return className;
}

/**
 * Converts to integer
 * @param value Value to parse as decimal integer
 * @param defaultValue Value to use as fallback
 * @returns {int}
 */
function asInt(value, defaultValue) {
  defaultValue = defaultValue || 0;

  var result = parseInt(value, 10);
  if (isNaN(result)) {
    return defaultValue;
  }

  return result;
}