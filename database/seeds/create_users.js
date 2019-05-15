const UsersModel = require("../../server/database/models/Users");

exports.seed = async knex => {
  const userData = await UsersModel.createUserData({
    email: "example@example.com",
    password: "password"
  });
  await knex("users").insert(userData);
};