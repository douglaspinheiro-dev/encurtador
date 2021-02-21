// Update with your config settings.

require('dotenv').config()

module.exports = {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DATABASE,
      user:     process.env.USER,
      password: process.env.PASSWORD
    },
    // connection: process.env.URI,
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
