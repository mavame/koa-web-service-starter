.PHONY: docker
docker:
	docker-compose up -d

.PHONY: env
env:
	cp dev.env .env

.PHONY: web
web:
	npm start

.PHONY: migration
migration:
	@while [ -z "$$MIGRATION_NAME" ]; do \
		read -r -p "Enter Migration Name: " MIGRATION_NAME; \
	done ; \
	npx knex migrate:make "$$MIGRATION_NAME"

.PHONY: migrate
migrate:
	npx knex migrate:latest