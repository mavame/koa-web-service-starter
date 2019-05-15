const { env } = require("../../config");
const knex = require("knex");
const knexConfig = require("../../../knexfile");
const { Model } = require("objection");

// set up the database connection and ORM
Model.knex(knex(knexConfig[env]));

class BaseModel extends Model { }

module.exports = { knex, Model, BaseModel };