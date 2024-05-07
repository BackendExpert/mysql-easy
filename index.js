const mysql = require('mysql');

function ConnectDatabase(dbHost, dbUser, dbPass, dbName) {
    const connection = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: dbName
    })
}