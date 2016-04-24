var parse5 = require('parse5')

var progress = function (source) {
  var fragment = parse5.parseFragment(source)
  var node = fragment.childNodes.find(function (node) {
    return node.nodeName === 'script'
  })

  return parse5.serialize(node)
}

exports.handlers = {
  beforeParse: function (e) {
    if (/\.vue$/.test(e.filename)) {
      e.source = progress(e.source)
    }
  }
}
