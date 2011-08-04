build:
	@node_modules/.bin/jison lib/grammar.y lib/lexer.l
	@mv grammar.js lib/parser.js

clean:
	@rm lib/parser.js

test: build
	@node_modules/.bin/expresso

browser: build
	@cat lib/browser/start.js lib/nodes.js lib/parser.js lib/jadedown.js lib/browser/end.js > jadedown.js
