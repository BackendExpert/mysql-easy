const mysql = require('mysql2');

function connectToMySQL(host, user, password, database) {

    const connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });

    return connection;
}

module.exports = {
    connectToMySQL
};