var jadedown = require('./../lib/jadedown')
  , fs = require('fs')
  , assert = require('assert');

module.exports = {
  'test tags': function() {
    var expected = '<p>Example: <blockquote>Example 1</blockquote></p>'
      , input = 'Example: blockquote[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test tags with attributes': function() {
    var expected = '<p><a href="http://example.com">Example 1</a></p>'
      , input = 'a(href="http://example.com")[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test tags with a class': function() {
    var expected = '<p><a class="example" href="http://example.com">Example 1</a></p>'
      , input = 'a.example(href="http://example.com")[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test tags with an id': function() {
    var expected = '<p><a id="nav" href="http://example.com">Example 1</a></p>'
      , input = 'a#nav(href="http://example.com")[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test tags with classes': function() {
    var expected = '<p><a class="example1 example2" href="http://example.com">Example 1</a></p>'
      , input = 'a.example1.example2(href="http://example.com")[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test tags with classes and an id': function() {
    var expected = '<p><a id="id" class="example1 example2" href="http://example.com">Example 1</a></p>'
      , input = 'a#id.example1.example2(href="http://example.com")[Example 1]';

    assert.equal(expected, jadedown(input));
  },

  'test multiple tags with classes and an id': function() {
    var expected = ''
      , input = '';

    expected += '<p>';
    expected += 'Link 1: <a id="id" class="example1 example2" href="http://example.com">Example 1</a> ';
    expected += 'and link 2 <a id="id2" class="example1 example2" href="http://example.com/2">Example 2</a></p>';

    input += 'Link 1: a#id.example1.example2(href="http://example.com")[Example 1] ';
    input += 'and link 2 a#id2.example1.example2(href="http://example.com/2")[Example 2]';

    assert.equal(expected, jadedown(input));
  }
};
