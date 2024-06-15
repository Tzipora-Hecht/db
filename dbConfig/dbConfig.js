require('dotenv').config();

module.exports = {
    DATABASE: process.env.DB_DATABASE,
    USERNAME: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT
}

