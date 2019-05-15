exports.up = async knex => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .raw(
      `
      CREATE OR REPLACE FUNCTION updated_at()
      RETURNS TRIGGER AS $$
          BEGIN
              NEW.updated_at = now();
              RETURN NEW;
          END;
      $$ LANGUAGE plpgsql;`
    )
};

exports.down = async knex => {
  // not worth undoing these things.
};