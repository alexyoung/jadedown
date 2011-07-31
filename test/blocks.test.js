var jadedown = require('./../lib/jadedown')
  , fs = require('fs')
  , assert = require('assert');

module.exports = {
  'test line start': function() {
    var expected = '<blockquote>This is a quote</blockquote>'
      , input = 'blockquote This is a quote\n';

    assert.equal(expected, jadedown(input));
  },

  'test line start and inline': function() {
    var expected = '<blockquote>This is a <em>quote</em></blockquote>'
      , input = 'blockquote This is a _quote_\n';

    assert.equal(expected, jadedown(input));
  }

  // TODO: Blocks with IDs, classes, etc.
};

