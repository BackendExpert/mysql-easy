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

// insert data function

function insertData(tableName, data, callback) {
    const query = `INSERT INTO ${tableName} SET ?`;
    connection.query(query, data, (error, results, fields) => {
        if (error) throw error;
        callback(results.insertId);
    });
}

module.exports = {
    connectToMySQL,
    insertData
};