//Test your connection with this command:
//node testConnection.js

const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Configure the connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

// Test the connection
async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('Connected to PostgreSQL');
        client.release();
    } catch (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } finally {
        await pool.end(); // Make sure to close the pool
    }
}

testConnection();