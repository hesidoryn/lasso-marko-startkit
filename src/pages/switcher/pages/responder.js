var markoWidgets = require('marko-widgets');

function extendViewData(viewdata) {
  // To avoid duplicate IDs we need to provide Marko Widget with a unique ID prefix
  var idprefix = 'w' + require('shortid').generate();
  if (viewdata.$global != null) {
    viewdata.$global.widgetIdPrefix = idprefix;
  } else {
    viewdata.$global = { widgetIdPrefix: idprefix };
  }

  return viewdata;
}

exports.respond = function(viewdata, template, component, req, res) {

  if (req.query.preload !== undefined) {
    viewdata = extendViewData(viewdata);
    var result = component.render(viewdata);
    var state = markoWidgets.getRenderedWidgets(result.out);

    // Serialize the HTML and the widget state and IDs to the browser
    res.json({ html: result.html, state: state });
    return;
  }

  template.render(viewdata, res);
};
