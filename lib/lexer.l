%x b
%x p
%x pre
%x preblock
%x li
%x ol

%%

^"*"\s+ %{
  this.begin('li');
  yytext = '<ul>\n<li>';
  return 'LIST_START';
%}

<li>\n+ %{
  if (yytext.length > 1) {
    yytext = '</li>\n</ul>\n';
    this.popState();
    return 'LIST_END';
  }
%}

<li><<EOF>> %{
  yytext = '</li>\n</ul>\n';
  this.popState();
  return 'EOF';
%}

<li>^"*"\s+ %{
  yytext = '</li>\n<li>';
  return 'LIST_ITEM';
%}

^"#"\s+ %{
  this.begin('ol');
  yytext = '<ol>\n<li>';
  return 'LIST_START';
%}

<ol>\n+ %{
  if (yytext.length > 1) {
    this.popState();
    yytext = '</li>\n</ol>\n';
    return 'LIST_END';
  }
%}

<ol><<EOF>> %{
  yytext = '</li>\n</ol>\n';
  this.popState();
  return 'EOF';
%}

<ol>^"#"\s+ %{
  yytext = '</li>\n<li>';
  return 'LIST_ITEM';
%}

<p,b,ol,li>\(([^)]*)\)\[([^\]]*)\] %{
  yytext = {
      tag: 'a'
    , attr: 'href="' + yy.lexer.matches[1] + '"'
    , html: yy.lexer.matches[2]
  }
  return 'LINK';
%}

<p,b,ol,li>([a-zA-Z0-9]+)(((\.|"#")([^ (]*))+)?\(([^)]*)\)(\[([^\]]*)\])? %{
  var attr = yy.lexer.matches[6]
    , selector = yy.lexer.matches[2];

  if (attr || yy.lexer.matches[8]) {
    yytext = {
        tag:  yy.lexer.matches[1]
      , html: yy.lexer.matches[8]
      , attr: attr
      , selector: selector
    };
    return 'TAG';
  } else {
    return 'TEXT';
  }
%}

<p,b,ol,li>([a-zA-Z0-9]+)(\[([^\]]*)\]) %{
  // Tags in the form text[innerHTML]
  if (yy.lexer.matches[2]) {
    yytext = {
        tag:  yy.lexer.matches[1]
      , html: yy.lexer.matches[3]
    };
    return 'TAG';
  } else {
    return 'TEXT';
  }
%}

^(\t|" "{4,})(.*) %{
  yytext = '<pre><code>' + yy.h(yy.lexer.matches[2])
  this.begin('preblock');
  return 'TEXT';
%}

<preblock>\n+ %{
  return 'EOL';
%}

<preblock><<EOF>> %{
  yytext = '</code></pre>\n';
  return 'EOF';
%}

<preblock>^(\t|" "{4,})(.*) %{
  yytext = yy.h(yy.lexer.matches[2])
  return 'TEXT';
%}

<preblock>^[^\s] %{
  yy.lexer.unput(yytext);
  yy.c('\n</code></pre>');
  this.popState();
%}

^("h"[1-6]|"bq"|"blockquote")\s+ %{
  this.begin('b');

  yytext = {
    tag: yy.lexer.matches[1]
  };

  return 'BLOCK_TAG';
%}

<p,b,ol,li>"*"([^*]*)"*" %{
  yytext = {
    tag: 'strong'
  , html: yy.lexer.matches[1]
  };
  return 'TAG';
%}
<p,b,ol,li>"_"([^_]*)"_" %{
  yytext = {
    tag: 'em'
  , html: yy.lexer.matches[1]
  };
  return 'TAG';
%}
<p,b,ol,li>"`"([^`]*)"`" %{
  yytext = {
    tag: 'code'
  , html: yy.h(yy.lexer.matches[1])
  };
  return 'TAG';
%}
\s                                       return 'SPACE';
"<"("pre"|"code")">"                     this.begin('pre'); return 'PRE_START';
<pre>"</"("pre"|"code")">"               this.popState(); return 'PRE_END';
<pre>.                                   return 'PRE_TEXT';
<pre>\n+                                 return 'TEXT';
<b>\n+                                   this.popState(); return 'BLOCK_END';
<b,ol,li>.                               return 'TEXT';
<p>\n+                                   this.popState(); return 'P_END';
\n+                                      return 'TEXT';
^.                                       this.begin('p'); yy.lexer.unput(yytext); return 'P_START';
<p>.                                     return 'TEXT';
<INITIAL,b>\n                            this.popState(); return 'EOL';
<INITIAL,b><<EOF>>                       return 'EOF';
<p><<EOF>>                               return 'P_END';

%%
