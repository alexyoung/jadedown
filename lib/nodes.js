function aliases(tag) {
  switch (tag) {
    case 'bq':
      return 'blockquote';
    break;

    default:
      return tag;
  }
}

function Nodes() {
  this.openTags = [];
}

Nodes.prototype = {
  pushOpenTag: function(tag) {
    this.openTags.push(tag);
  },

  popOpenTag: function() {
    return '</' + this.openTags.pop() + '>';
  },

  makeAttr: function($1) {
    var attr = []
      , id = $1.selector ? $1.selector.match(/#([^.([]*)/) : null
      , classes = $1.selector;

    if (id && id[1]) {
      attr.push('id="' + id[1] + '"');
      classes = classes.replace(/#([^.([]*)/, '');
    }

    if (classes) {
      classes = classes.split(/\./);
      if (classes.length > 0) {
        attr.push('class="' + classes.join(' ').trim() + '"');
      }
    }

    if ($1.attr) {
      attr.push($1.attr);
    }

    if (attr.length === 0) {
      return '';
    } else {
      return ' ' + attr.join(' ');
    }
  },

  makeTag: function($1) {
    var attr = this.makeAttr($1);
    $1.tag = aliases($1.tag);

    if (!$1.html) {
      this.pushOpenTag($1.tag);
      // TODO: self-closing, plus on/off for xhtml/html
      var end = $1.tag === 'img' ? '/>' : '>';
      return '<' + $1.tag + attr + end;
    } else {
      return '<' + $1.tag + attr + '>' + $1.html + '</' + $1.tag + '>';
    }
  },

  TAG: function($1) {
    return this.makeTag($1);
  },

  LINK: function($1) {
    return this.makeTag($1);
  },

  BLOCK_TAG: function($1) {
    return this.makeTag($1);
  },

  BLOCK_END: function() {
    return this.popOpenTag() + '\n';
  }
};

var nodes = new Nodes();

if (typeof module !== 'undefined') {
  module.exports = nodes;
}
