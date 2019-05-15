.PHONY: docker
docker:
	docker-compose up -d

.PHONY: web
web:
	npm start