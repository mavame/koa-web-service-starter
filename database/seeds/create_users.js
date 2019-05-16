const UsersModel = require("../../server/database/models/users");

exports.seed = async knex => {
  await knex.raw("truncate table users cascade");
  const userData = await UsersModel.createUserData({
    email: "example@example.com",
    password: "password"
  });
  await knex("users").insert(userData);
};