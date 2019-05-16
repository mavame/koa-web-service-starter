const bcrypt = require("bcryptjs");
const { BaseModel } = require("./base");

class UsersModel extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static async createUserData({ email, password }) {
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(`${password}${salt}`, 10);
    return {
      email,
      hash,
      salt
    };
  }
}

module.exports = UsersModel;