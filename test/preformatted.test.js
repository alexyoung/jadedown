var jadedown = require('./../lib/jadedown')
  , assert = require('assert');

module.exports = {
  'test HTML is escaped in pre tags': function() {
    var expected = '<pre>This is a &lt;tag&gt;</pre>'
      , input = '<pre>This is a <tag></pre>';

    assert.equal(expected, jadedown(input));
  },

  'test HTML is escaped in code tags': function() {
    // I'm not sure if this should insert paragraphs or not
    var expected = '<code>This is a &lt;tag&gt;</code>'
      , input = '<code>This is a <tag></code>';

    assert.equal(expected, jadedown(input));
  },

  'test HTML is escaped in code shorthand': function() {
    var expected = '<p><code>This is a &lt;tag&gt;</code></p>'
      , input = '`This is a <tag>`';

    assert.equal(expected, jadedown(input));
  }
};


