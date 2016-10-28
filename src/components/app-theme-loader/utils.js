exports.addClass = function (node, newClass) {
  var cls = node.getAttribute("class");
  if (!cls) {
    node.setAttribute("class", newClass);
    return;
  }

  var list = cls.split(' ');
  list.push(newClass);
  node.setAttribute("class", list.join(' '));
};

exports.removeClassesStartedWith = function (node, startsWith) {
  var cls = node.getAttribute("class");
  if (!cls) {
    return;
  }

  var newList = [];
  var list = cls.split(' ');

  var i = 0;
  for (i = 0; i < list.length; i++) {
    var item = list[i];
    if (!item.startsWith(startsWith)) {
      newList.push(item);
    }
  }

  node.setAttribute("class", newList.join(' '));
};