var parse5 = require('parse5');
var extension = 'vue';

var allowProgress = filename => {
  var parts = filename.split('.');
  var len = parts.length;

  if (len) {
    return parts[len - 1] === extension;
  }
  return false;
};

var progress = source => {
  var fragment = parse5.parseFragment(source);
  var script = '';

  fragment.childNodes.map(node => {
    if (node.nodeName === 'script') {
      script = parse5.serialize(node);
    }
  });

  return script;
};

exports.handlers = {
  beforeParse: e => {
    if (allowProgress(e.filename)) {
      e.source = progress(e.source);
    }
  }
};
