require('./style.less');

module.exports = require('marko-widgets').defineComponent({
  template: require('./template.marko'),

  getInitialState: function() {
    return {
      first: '',
      action: '',
      second: '',
      expression: '',
      error: '',
      wand: true
    };
  },

  getTemplateData: function(state) {
    return {
      expression: state.expression.substr(-22),
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
      const first = this.state.first.toString() + e.target.value;
      this.setState('first', first);
      this.setState('expression', first);
    } else {
      const second = this.state.second.toString() + e.target.value;
      this.setState('second', second);
      const newExpression = `${this.state.first}${this.state.action}${this.state.second}`;
      this.setState('expression', newExpression);
    }
  },

  setAction: function(e) {
    if (this.state.error !== '') {
      this.setState('error', '');
    }

    if (this.state.second !== '') {
      this.calculate();
    }

    this.setState('action', e.target.value);
    const newExpression = `${this.state.first}${this.state.action}`;
    this.setState('expression', newExpression);
  },

  getResult: function() {
    if (this.state.second === '' && this.state.action !== '') {
      this.setState('error', 'Malformed expression');
    } else {
      this.calculate();
    }
  },

  calculate: function() {
    try {
      const result = eval(`${this.state.first}${this.state.action}${this.state.second}`);
      if (typeof result === 'number' && isFinite(result)) {
        this.setState('action', '');
        this.setState('second', '');
        this.setState('first', result);
        this.setState('expression', result.toString());
      } else {
        this.setState('error', 'Malformed expression');
      }
    } catch (err) {
      this.setState('error', 'Malformed expression');
    }
  },

  clear: function() {
    this.setState('first', '');
    this.setState('action', '');
    this.setState('second', '');
    this.setState('expression', '');
    this.setState('error', '');
  },
});
