# Binaries
GULP_BIN = $(realpath node_modules/.bin/gulp)
GRAPH_BIN = $(realpath node_modules/.bin/browserify-graph)

all:
	$(GULP_BIN)

install:
	npm install

html:
	$(GULP_BIN) html

css:
	$(GULP_BIN) css

cssmin:
	$(GULP_BIN) cssmin

html-watch:
	$(GULP_BIN) html-watch

css-watch:
	$(GULP_BIN) css-watch

watch:
	$(GULP_BIN) watch

.PHONY: all install html css cssmin html-watch css-watch watch
