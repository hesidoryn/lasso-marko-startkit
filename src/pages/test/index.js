var template = require('./template.marko');

module.exports = function(req, res) {
  template.render({
    show2: false,
    nothing: { yes: true }
  }, res);
};
