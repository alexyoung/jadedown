/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"lines":4,"EOF":5,"P_END":6,"text":7,"TEXT":8,"PRE_TEXT":9,"BLOCK_TAG":10,"BLOCK_END":11,"LINK":12,"TAG":13,"SPACE":14,"EOL":15,"P_START":16,"PRE_START":17,"PRE_END":18,"LIST_START":19,"LIST_ITEM":20,"LIST_END":21,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"P_END",8:"TEXT",9:"PRE_TEXT",10:"BLOCK_TAG",11:"BLOCK_END",12:"LINK",13:"TAG",14:"SPACE",15:"EOL",16:"P_START",17:"PRE_START",18:"PRE_END",19:"LIST_START",20:"LIST_ITEM",21:"LIST_END"},
productions_: [0,[3,2],[3,2],[4,0],[4,2],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: yy.c(yytext); return $$[$0-1]; 
break;
case 2: yy.c('</p>'); 
break;
case 5: yy.c($$[$0]); 
break;
case 6: yy.ch($$[$0]); 
break;
case 7: yy.c('BLOCK_TAG', $$[$0]); 
break;
case 8: yy.c('BLOCK_END', $$[$0]); 
break;
case 9: yy.c('LINK', $$[$0]); 
break;
case 10: yy.c('TAG', $$[$0]); 
break;
case 11: yy.c($$[$0]); 
break;
case 12: yy.c($$[$0]); 
break;
case 13: yy.c('<p>'); 
break;
case 14: yy.c('</p>\n'); 
break;
case 15: yy.c($$[$0]); 
break;
case 16: yy.c($$[$0]); 
break;
case 17: yy.c($$[$0]); 
break;
case 18: yy.c($$[$0]); 
break;
case 19: yy.c($$[$0]); 
break;
}
},
table: [{3:1,4:2,5:[2,3],6:[2,3],8:[2,3],9:[2,3],10:[2,3],11:[2,3],12:[2,3],13:[2,3],14:[2,3],15:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],20:[2,3],21:[2,3]},{1:[3]},{5:[1,3],6:[1,4],7:5,8:[1,6],9:[1,7],10:[1,8],11:[1,9],12:[1,10],13:[1,11],14:[1,12],15:[1,13],16:[1,14],17:[1,15],18:[1,16],19:[1,17],20:[1,18],21:[1,19]},{1:[2,1]},{1:[2,2],5:[2,14],6:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],20:[2,14],21:[2,14]},{5:[2,4],6:[2,4],8:[2,4],9:[2,4],10:[2,4],11:[2,4],12:[2,4],13:[2,4],14:[2,4],15:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],20:[2,4],21:[2,4]},{5:[2,5],6:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],20:[2,5],21:[2,5]},{5:[2,6],6:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],20:[2,6],21:[2,6]},{5:[2,7],6:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],20:[2,7],21:[2,7]},{5:[2,8],6:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],20:[2,8],21:[2,8]},{5:[2,9],6:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],20:[2,9],21:[2,9]},{5:[2,10],6:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[2,10],17:[2,10],18:[2,10],19:[2,10],20:[2,10],21:[2,10]},{5:[2,11],6:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],20:[2,11],21:[2,11]},{5:[2,12],6:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],20:[2,12],21:[2,12]},{5:[2,13],6:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],20:[2,13],21:[2,13]},{5:[2,15],6:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],20:[2,15],21:[2,15]},{5:[2,16],6:[2,16],8:[2,16],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],15:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[2,16],20:[2,16],21:[2,16]},{5:[2,17],6:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],15:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[2,17]},{5:[2,18],6:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],14:[2,18],15:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[2,18]},{5:[2,19],6:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],14:[2,19],15:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],21:[2,19]}],
defaultActions: {3:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
  this.begin('li');
  yy_.yytext = '<ul>\n<li>';
  return 19;

break;
case 1:
  if (yy_.yytext.length > 1) {
    yy_.yytext = '</li>\n</ul>\n';
    this.popState();
    return 21;
  }

break;
case 2:
  yy_.yytext = '</li>\n</ul>\n';
  this.popState();
  return 5;

break;
case 3:
  yy_.yytext = '</li>\n<li>';
  return 20;

break;
case 4:
  this.begin('ol');
  yy_.yytext = '<ol>\n<li>';
  return 19;

break;
case 5:
  if (yy_.yytext.length > 1) {
    this.popState();
    yy_.yytext = '</li>\n</ol>\n';
    return 21;
  }

break;
case 6:
  yy_.yytext = '</li>\n</ol>\n';
  this.popState();
  return 5;

break;
case 7:
  yy_.yytext = '</li>\n<li>';
  return 20;

break;
case 8:
  yy_.yytext = {
      tag: 'a'
    , attr: 'href="' + yy.lexer.matches[1] + '"'
    , html: yy.lexer.matches[2]
  }
  return 12;

break;
case 9:
  var attr = yy.lexer.matches[6]
    , selector = yy.lexer.matches[2];

  if (attr || yy.lexer.matches[8]) {
    yy_.yytext = {
        tag:  yy.lexer.matches[1]
      , html: yy.lexer.matches[8]
      , attr: attr
      , selector: selector
    };
    return 13;
  } else {
    return 'TEXT';
  }

break;
case 10:
  // Tags in the form text[innerHTML]
  if (yy.lexer.matches[2]) {
    yy_.yytext = {
        tag:  yy.lexer.matches[1]
      , html: yy.lexer.matches[3]
    };
    return 13;
  } else {
    return 'TEXT';
  }

break;
case 11:
  yy_.yytext = '<pre><code>' + yy.h(yy.lexer.matches[2])
  this.begin('preblock');
  return 8;

break;
case 12:
  return 15;

break;
case 13:
  yy_.yytext = '</code></pre>\n';
  return 5;

break;
case 14:
  yy_.yytext = yy.h(yy.lexer.matches[2])
  return 8;

break;
case 15:
  yy.lexer.unput(yy_.yytext);
  yy_.yytext = '</code></pre>\n';
  this.popState();

break;
case 16:
  this.begin('b');

  yy_.yytext = {
    tag: yy.lexer.matches[1]
  };

  return 10;

break;
case 17:
  yy_.yytext = {
    tag: 'strong'
  , html: yy.lexer.matches[1]
  };
  return 13;

break;
case 18:
  yy_.yytext = {
    tag: 'em'
  , html: yy.lexer.matches[1]
  };
  return 13;

break;
case 19:
  yy_.yytext = {
    tag: 'code'
  , html: yy.h(yy.lexer.matches[1])
  };
  return 13;

break;
case 20:return 14;
break;
case 21:this.begin('pre'); return 17;
break;
case 22:this.popState(); return 18;
break;
case 23:return 9;
break;
case 24:return 8;
break;
case 25:this.popState(); return 11;
break;
case 26:return 8;
break;
case 27:this.popState(); return 6;
break;
case 28:return 8;
break;
case 29:this.begin('p'); yy.lexer.unput(yy_.yytext); return 16;
break;
case 30:return 8;
break;
case 31:this.popState(); return 15;
break;
case 32:return 5;
break;
case 33:return 6;
break;
}
};
lexer.rules = [/^^\*\s+/,/^\n+/,/^$/,/^^\*\s+/,/^^#\s+/,/^\n+/,/^$/,/^^#\s+/,/^\(([^)]*)\)\[([^\]]*)\]/,/^([a-zA-Z0-9]+)(((\.|#)([^ (]*))+)?\(([^)]*)\)(\[([^\]]*)\])?/,/^([a-zA-Z0-9]+)(\[([^\]]*)\])/,/^^(\t| {4,})(.*)/,/^\n+/,/^$/,/^^(\t| {4,})(.*)/,/^^[^\s]/,/^^(h[1-6]|bq|blockquote)\s+/,/^\*([^*]*)\*/,/^_([^_]*)_\b/,/^`([^`]*)`/,/^\s\b/,/^<(pre|code)>/,/^<\/(pre|code)>/,/^./,/^\n+/,/^\n+/,/^./,/^\n+/,/^\n+/,/^^./,/^./,/^\n\b/,/^$/,/^$/];
lexer.conditions = {"b":{"rules":[8,9,10,17,18,19,25,26,31,32],"inclusive":false},"p":{"rules":[8,9,10,17,18,19,27,30,33],"inclusive":false},"pre":{"rules":[22,23,24],"inclusive":false},"preblock":{"rules":[12,13,14,15],"inclusive":false},"li":{"rules":[1,2,3,8,9,10,17,18,19,26],"inclusive":false},"ol":{"rules":[5,6,7,8,9,10,17,18,19,26],"inclusive":false},"INITIAL":{"rules":[0,4,11,16,20,21,28,29,31,32],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}