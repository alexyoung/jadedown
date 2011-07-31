%start file 

%%

/* Recursively process blocks */

file
  : lines EOF
    { yy.c(yytext); return $1; }
  | lines P_END
    { yy.c('</p>'); }
  ;

lines
  :
  | lines text
  ;

text
  : TEXT
    { yy.c($1); }
  | PRE_TEXT
    { yy.ch($1); }
  | BLOCK_TAG
    { yy.c('BLOCK_TAG', $1); }
  | BLOCK_END
    { yy.c('BLOCK_END', $1); }
  | LINK
    { yy.c('LINK', $1); }
  | TAG
    { yy.c('TAG', $1); }
  | SPACE
    { yy.c($1); }
  | EOL
    { yy.c($1); }
  | P_START
    { yy.c('<p>'); }
  | P_END
    { yy.c('</p>\n'); }
  | PRE_START
    { yy.c($1); }
  | PRE_END
    { yy.c($1); }
  | LIST_START
    { yy.c($1); }
  | LIST_ITEM
    { yy.c($1); }
  | LIST_END
    { yy.c($1); }
  ;

