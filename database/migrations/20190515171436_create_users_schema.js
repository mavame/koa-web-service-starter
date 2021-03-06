exports.up = async knex => {
  await knex.schema.createTable("users", table => {
    table
      .uuid("id")
      .primary()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));
    table.text("email").notNullable().unique();
    table.text("hash").notNullable().unique();
    table.text("salt").notNullable();
    table.timestamps(false, true);
  });

  await knex.schema.raw(`
  CREATE TRIGGER trigger_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE PROCEDURE updated_at();`);
};

exports.down = async knex => {
  await knex.schema.dropTable("users");
};
