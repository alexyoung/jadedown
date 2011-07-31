function jadedown() {
  var parser = require('./parser').parser
    , result = '';

  /**
   * Escapes brackets and ampersands.
   * 
   * @param {String} Text to escape
   * @return {String}
   */
  parser.yy.h = function(text) {
    return text.replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;');
  }

  parser.yy.ch = function(text) {
    result += parser.yy.h(text);
  };

  parser.yy.c = function() {
    if (arguments.length === 1) {
      result += arguments[0];
    } else if (arguments.length === 2) {
      result += Nodes[arguments[0]](arguments[1]);
    }
  }

  parser.parse(arguments[0].trim());

  // TODO: The parser should catch this
  if (Nodes.openTags.length > 0)
    result += Nodes.popOpenTag();

  return result;
}

var Nodes = require('./nodes');
Nodes.parser = jadedown;
module.exports = jadedown;
