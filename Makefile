.PHONY: docker
docker:
	docker-compose up -d

.PHONY: env
env:
	cp dev.env .env

.PHONY: web
web:
	npm start