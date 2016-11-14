require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function() {
    return {
      first: '',
      action: '',
      second: '',
      error: '',
      wand: true
    };
  },

  getTemplateData: function(state) {
    this.wandAction;
    return {
      first: state.first,
      action: state.action,
      second: state.second,
      error: state.error,
      wand: state.wand
    };
  },

  init: function() {
    const self = this;
    setInterval(() => {
      const wand = !self.state.wand;
      this.setState('wand', wand);
    }, 500);
  },

  set: function(e) {
    if (this.state.error !== '') {
      this.setState('error', '');
    }
    if (this.state.action === '') {
      var first = this.state.first.toString() + e.target.value;
      this.setState('first', first);
    } else {
      var second = this.state.second.toString() + e.target.value;
      this.setState('second', second);
    }
  },

  setAction: function(e) {
    if (this.state.error !== '') {
      this.setState('error', '');
    }
    this.setState('action', e.target.value);
  },

  getResult: function() {
    if (this.state.second === '') {
      this.setState('error', 'Malformed expression');
    } else {
      try {
        const result = eval(`${this.state.first}${this.state.action}${this.state.second}`);
        if (typeof result === 'number' && isFinite(result)) {
          this.setState('action', '');
          this.setState('second', '');
          this.setState('first', result);
        } else {
          this.setState('error', 'Malformed expression');
        }
      } catch (err) {
        this.setState('error', 'Malformed expression');
      }
    }
  },

  clear: function() {
    this.setState('first', '');
    this.setState('action', '');
    this.setState('second', '');
    this.setState('error', '');
  },
});
