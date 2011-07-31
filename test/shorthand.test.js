var jadedown = require('./../lib/jadedown')
  , fs = require('fs')
  , assert = require('assert');

module.exports = {
  'test strong': function() {
    var expected = '<p><strong>Example 1</strong></p>'
      , input = '*Example 1*';

    assert.equal(expected, jadedown(input));
  },

  'test multiple strong': function() {
    var expected = '<p><strong>Important</strong>: The <strong>lazy fox</strong></p>'
      , input = '*Important*: The *lazy fox*';

    assert.equal(expected, jadedown(input));
  },

  'test em': function() {
    var expected = '<p><em>Example 1</em></p>'
      , input = '_Example 1_';

    assert.equal(expected, jadedown(input));
  },

  'test code': function() {
    var expected = '<p><code>var a = 1 * 5;</code></p>'
      , input = '`var a = 1 * 5;`';

    assert.equal(expected, jadedown(input));
  },

  'test multiple code': function() {
    var expected = '<p>Given that <code>var a = 1 * 5;</code> and <code>var b = Math.PI;</code>, then:</p>'
      , input = 'Given that `var a = 1 * 5;` and `var b = Math.PI;`, then:';

    assert.equal(expected, jadedown(input));
  },

  'test link shorthand': function() {
    var expected = '<p><a href="http://example.com">Example 1</a></p>'
      , input = '(http://example.com)[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test multiple links': function() {
    var expected = '<p><a href="http://example.com">Example 1</a> and <a href="http://example.com/2">Example 2</a> are links</p>'
      , input = '(http://example.com)[Example 1] and (http://example.com/2)[Example 2] are links';

    assert.equal(expected, jadedown(input));
  }
};

