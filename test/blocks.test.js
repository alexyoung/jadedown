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
  },

  'test space indentation becomes code': function() {
    var expected = '<p>Here is some code:</p>\n<pre><code>var a = 1;</code></pre>\n'
      , input = 'Here is some code:\n    var a = 1;\n';

    assert.equal(expected, jadedown(input));
  },

  'test extra space indentation becomes code': function() {
    var expected = '<p>Here is some code:</p>\n<pre><code>var a = 1;</code></pre>\n'
      , input = 'Here is some code:\n      var a = 1;\n';

    assert.equal(expected, jadedown(input));
  },

  'test multiple lines of code': function() {
    var expected = '<p>Here is some code:</p>\n<pre><code>var a = 1;\nfunction() { return a * 100; }</code></pre>\n'
      , input = 'Here is some code:\n      var a = 1;\n    function() { return a * 100; }\n';

    assert.equal(expected, jadedown(input));
  },

  'test indented code tags are closed correctly': function() {
    var expected = '<p>Here is some code:</p>\n<pre><code>var a = 1;    a++;    console.log(a);\n</code></pre>\n<p>Example.</p>'
      , input = 'Here is some code:\n    var a = 1;    a++;    console.log(a);\nExample.\n';

    assert.equal(expected, jadedown(input));
  },

  'test tab indentation becomes code': function() {
    var expected = '<p>Here is some code:</p>\n<pre><code>var a = 1;</code></pre>\n'
      , input = 'Here is some code:\n\tvar a = 1;\n';

    assert.equal(expected, jadedown(input));
  }

  // TODO: Blocks with IDs, classes, etc.
};
