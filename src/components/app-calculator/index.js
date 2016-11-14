module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function(input) {
    return {
      name: input.name || "Calculator",
      first: "",
      action: "",
      second: "",
      equal: "",
      result: null
    };
  },

  getTemplateData: function(state) {
    return {
      name: state.name,
      first: state.first,
      action: state.action,
      second: state.second,
      equal: state.equal,
      result: state.result
    };
  },

  set: function(number) {
    if (action == "") {
      this.setState('first', number)
    } else {
      this.setState('second', number)
    }
  },

  setAction: function(action) {
    this.setState('action', action)
  },
});
