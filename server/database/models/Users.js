const { authSalt } = require("../../config");
const bcrypt = require("bcryptjs");
const { BaseModel } = require("./index");

class UsersModel extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static async createUserData({ email, password }) {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(`${password}${authSalt}`, 10);
    return {
      email,
      hash,
      salt
    };
  }
}

module.exports = UsersModel;