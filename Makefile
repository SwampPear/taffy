.PHONY: docs cp-src build runserver clean

# builds an runs documentation site
docs: build cp-src runserver

# copies build artifacts
cp-src:
	cp ./src/styles/taffy.css ./docs/static/css/
	cp ./dist/taffy.js ./docs/static/js/

# builds typescript
build:
	npx webpack

# runs the documentation server
runserver:
	python3 docs/manage.py runserver 3000

# cleans up build aritifacts
clean:
	rm -rf ./dist
