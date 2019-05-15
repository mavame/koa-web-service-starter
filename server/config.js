require("dotenv").config();
const Joi = require("joi");

/**
 * Validates and transforms an object of configuration environment variables.
 *
 * @throws {Error} A Joi error containing error messages. See https://github.com/hapijs/joi/blob/v11.1.1/API.md#errors.
 * @returns {Object} A valid configuration object containing values of the expected type.
 */
function configure(input, schema) {
  let config = null;
  Joi.validate(input, schema, (error, value) => {
    if (error) {
      throw error;
    }

    config = value;
  });

  return config;
}

const schema = Joi.object().keys({
  env: Joi.string()
    .valid(["test", "development", "staging", "production"])
    .required(),
  host: Joi.string().required(),
  port: Joi.number()
    .integer()
    .required(),
  authSalt: Joi.string().required()
});

module.exports = configure({
  env: process.env.NODE_ENV || "development",
  host: process.env.HOST,
  port: process.env.PORT,
  authSalt: process.env.AUTH_SALT
}, schema);
