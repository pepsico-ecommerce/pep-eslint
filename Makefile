.PHONY: build clean lint

build: node_modules/
	npm run build

node_modules/: package.json
	npm install
	touch node_modules/
