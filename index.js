var parse5 = require('parse5');
var assign = require('object-assign');
var jstransform = require('jstransform/simple');
var defaults = {
  es6: true,
  harmony: true,
  es6module: true,
  extension: 'vue'
};
var config = assign(defaults, global.env.conf.vue);

var allowProgress = filename => {
  var parts = filename.split('.');
  var len = parts.length;

  if (len) {
    return config.extension.indexOf(parts[len - 1]) > -1;
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

  return jstransform.transform(script, config).code;
};

exports.handlers = {
  beforeParse: e => {
    if (allowProgress(e.filename)) {
      e.source = progress(e.source);
    }
  }
};
