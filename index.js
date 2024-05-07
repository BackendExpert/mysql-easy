// mysqlConnection.js
const mysql = require('mysql2');

// Function to establish MySQL connection
function connectToMySQL(host, user, password, database) {
    // MySQL connection configuration
    const connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    // Return the connection object
    return connection;
}

module.exports = {
    connectToMySQL
};