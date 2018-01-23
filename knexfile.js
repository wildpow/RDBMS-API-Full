// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/poopypants.sqlite3'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'stuff',
      user:     'aaron',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
