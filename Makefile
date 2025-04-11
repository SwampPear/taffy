test:
	cp ./src/styles/taffy.css ./docs/static/css

	npx webpack
	cp ./dist/taffy.js ./docs/static/js/

	python3 docs/manage.py runserver 3000
