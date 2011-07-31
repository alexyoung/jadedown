build:
	@node_modules/.bin/jison lib/grammar.y lib/lexer.l
	@mv grammar.js lib/parser.js

clean:
	@rm lib/parser.js

test: build
	@node_modules/.bin/expresso
