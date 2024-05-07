const mysql = require('mysql2');

function ConnectDatabase(host, user, password, database) {
    return mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
}
