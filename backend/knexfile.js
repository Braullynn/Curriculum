// Update with your config settings.
const { db } = require('./.env')

module.exports = {

      client: 'postgresql',
      connection: db,
      pool: {
        min: 2,
        max: 100
      },
      migrations: {
        tableName: 'knex_migrations'
      }
  };
  