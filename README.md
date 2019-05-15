# koa-web-service-starter

A simple docker + koajs + Postgresql-enabled web application starter, with common middleware to help you quickly create web service back-ends more quickly.

The project helps you with the following:

- set up a local nodejs + Postgresql + Redis development environment quickly using docker
- write simple web services using koa
- connect to and model data in Postgresql using knex
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

#### Copy environment variables

The project makes use of the `dotenv` project to specify and share environment variables.

```bash
$ make env # or cp dev.env .env
```

#### Run the web server

```bash
$ make web # or npm start
```