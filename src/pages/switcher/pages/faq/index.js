var template = require('./template.marko');
var component = require('../../components/app-faq');
var responder = require('../responder');

module.exports = function(req, res) {
  responder.respond({}, template, component, req, res);
};
