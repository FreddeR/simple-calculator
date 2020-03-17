run:
	npm start $(filePath)

run-docker:
	docker build -t calculator .
ifeq ($(fileName),)
	docker run -it calculator
else
	docker run --env fileName=$(fileName) calculator
endif