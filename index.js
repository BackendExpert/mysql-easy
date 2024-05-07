const mysql = require('mysql2');

function ConnectToDatabase(host, user, password, database) {
    return mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
    });
}
function SelectAllData(connection, tableName, callback) {
    const query = `SELECT * FROM ${tableName}`;

    connection.query(query, (error, results, fields) => {
        if (error) throw error;
        callback(results);
    });
}


function SelectData(connection, tableName, columnsData, callback) {
    const query = `SELECT * FROM ${tableName} WHERE ?`;

    connection.query(query, columnsData, (error, results, fields) => {
        if (error) throw error;
        callback(results);
    });
}

function insertData(connection, tableName, data, callback) {
    const query = `INSERT INTO ${tableName} SET ?`;

    connection.query(query, data, (error, results) => {
        if (error) throw error;
        callback(results.insertId);
    });
}

function updateDataById(connection, tableName, id, newData, callback) {
    const query = `UPDATE ${tableName} SET ? WHERE id = ?`;

    connection.query(query, [newData, id], (error, results) => {
        if (error) throw error;
        callback(results.affectedRows);
    });
}

function deleteDataById(connection, tableName, id, callback) {
    const query = `DELETE FROM ${tableName} WHERE id = ?`;

    connection.query(query, [id], (error, results) => {
        if (error) throw error;
        callback(results.affectedRows);
    });
}

module.exports = {    
    ConnectToDatabase,
    SelectAllData,
    SelectData,
    insertData,
    updateDataById,
    deleteDataById
};