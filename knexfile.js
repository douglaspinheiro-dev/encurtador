// Update with your config settings.

require('dotenv').config()

module.exports = {
    client: 'pg',
    connection: {
      database: process.env.database,
      user:     process.env.user,
      password: process.env.password
    },
    searchPath: ['knex', 'public'],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: "./database/seeds"
    }


};
