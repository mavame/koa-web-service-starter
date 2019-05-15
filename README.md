# koa-web-service-starter

A simple docker + koajs + Postgresql-enabled web application starter, with common middleware to help you quickly do the following for your web service back-ends:

- spin up a local development environment using docker
- write simple endpoints using koa
- model data in Postgresql using knex
- query and access relational data in your database using the objection ORM

## Running the project

#### Install dependencies
```bash
$ npm i
```

#### Makefile
The project uses a Makefile. This hopefully helps you type less `npm run *` and feels more natural.

#### Docker up

```bash
$ make docker # or docker-compose up -d
```

#### Run the web server

```bash
$ make web
```