// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    // connection: {
    //   filename: './dev.postgresql'
    // }
    connection: {
      // database: process.env.database,
      // user:    process.env.user,
      // password: process.env.password
      database: "postgres",
      user:    "postgres",
      password: "0583264489"

    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.database,
      user:    process.env.user,
      password: process.env.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.database,
      user:    process.env.user,
      password:process.env.password
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
