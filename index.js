const mysql = require('mysql2');

function ConnectDatabase(dbHost, dbUser, dbPass, dbName) {
    const connection = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: dbName
    })
}

module.exports = {
    ConnectDatabase
};