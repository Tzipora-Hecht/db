require('dotenv').config();

module.exports = {
    client: process.env.DB_CONNECTION,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/migrations'  // Adjust the path to your migrations folder
    },
    seeds: {
        directory: __dirname + '/seeds'  // Adjust the path to your seeds folder
    }
};
