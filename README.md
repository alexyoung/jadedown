# Jadedown

An *experiment* to combine [Jade](http://jade-lang.com/) and [Markdown](http://daringfireball.net/projects/markdown/).

This has been developed purely for fun to see what I can do with Jade's convenient selector-based syntax.

## Syntax

Basic principles:

* Tags take the form: `tagName#id.class1.class2(attr1="value", attr2="value 2")[innerHTLM]`
* If a line starts with a recognised tag, then the line is wrapped in that tag.  For example: `h3 This is a header`
* If a line starts with `*` or `#` it is a unordered or ordered list
* There is also shorthand for commonly used tags, like strong, em, links, and code
* Content in pre-formatted tags (pre, code) is escaped

Shorthand:

* Code can be written with backticks: `var a = 1;`
* Code blocks can be created by using four spaces or a tab at the start of each line
* Asterisks and underscores are used for bold and italic
* Other lines are converted to paragraphs
* Unordered lists start with asterisks
* Ordered lists start with a hash

## Examples

There are some rough examples I used to develop the basic lexer and parser; these can be found in `test/fixtures/`.

## Installation

As an npm module:

    npm install -g jadedown

There's also a browser version in jadedown.js.

    <script src="jadedown.js"></script>
    <script>
      jadedown('*Example*');
    </script>

## Usage

This library comes with a command-line script:

    jadedown file.jd
   
Or as a CommonJS module:

    var jadedown = require('jadedown');
    jadedown('h3 Example');

## License

Copyright (C) 2011 by Alex R. Young

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

