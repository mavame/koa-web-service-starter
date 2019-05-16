# koa-web-service-starter

A simple docker + koajs + Postgresql-enabled web application starter, with common middleware to help you quickly create web service back-ends more quickly.

The project helps you with the following:

- set up a local nodejs + Postgresql + Redis development environment quickly using docker
- write simple web services and endpoints using koa
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

## Configuration

The project makes use of `dotenv`. All environment variables are validated at runtime through `server/config.js`. That module uses `Joi` to do some runtime validation on variables, and can stop the process from running if the environment isn't configured correctly.

The following command copies environment variables.

```bash
$ cp dev.env .env
```

Once `.env` exists, any process requiring the environment and app configuration through `server/config.js` will run some validation against the configuration, which is helpful if some environment or configuration is required for the app to run successfully. For example, if the variable named `variable` was required but was not set correctly, you might receive the following in the terminal:

```bash
$ make web
ValidationError: child "variable" fails because ["variable" is required]
```

