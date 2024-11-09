const mariadb = require('mariadb'); //if we are still going to use MariaDB
require('dotenv').config();

// Create a connection pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST || 'localhost', // Database host
    user: process.env.DB_USER,                // User from environment variables
    password: process.env.DB_PASSWORD,        // Password from environment variables
    database: process.env.DB_NAME,            // Database name from environment variables
    connectionLimit: 5                        // Connection limit
});

//getting DB a connection
module.exports = {
    async getConnection() {
        return await pool.getConnection();
    }
};