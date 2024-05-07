const mysql = require('mysql2');

function establishConnection(host, user, password, database) {
    return mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
}

module.exports = establishConnection;