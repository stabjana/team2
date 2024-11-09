const mariadb = require('mariadb'); //if we are still going to use MariaDB

// Create a connection pool
const pool = mariadb.createPool({
    host: process.env.DB_HOST || 'localhost',//correct later
    user: process.env.DB_USER || 'root',//correct later
    password: process.env.DB_PASSWORD || 'yourpassword',//password for players. Correct later
    database: process.env.DB_NAME || 'your_database',//name of the database. Correct later
    connectionLimit: 5
});

//getting DB a connection
module.exports = {
    async getConnection() {
        return await pool.getConnection();
    }
};