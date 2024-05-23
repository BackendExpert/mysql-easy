const mysql = require('mysql2');
const nodemailer = require('nodemailer');

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

function updateDataById(connection, tableName, UpdateColumn, id, newData, callback) {
    const query = `UPDATE ${tableName} SET ? WHERE ${UpdateColumn} = ?`;

    connection.query(query, [newData, id], (error, results) => {
        if (error) throw error;
        callback(results.affectedRows);
    });
}

function deleteDataById(connection, tableName, DeleteColumn, id, callback) {
    const query = `DELETE FROM ${tableName} WHERE ${DeleteColumn} = ?`;

    connection.query(query, [id], (error, results) => {
        if (error) throw error;
        callback(results.affectedRows);
    });
}

// v1.1.0--------------------
function SendEmailConfig(EmailService, from, Senderpass) {
    return  nodemailer.createTransport({
        service: EmailService,
        auth: {
          user: from,
          pass: Senderpass
        }
    });
}
// v1.1.0--------------------

// v1.1.0------------------------

function SendEmailTo(transporter, EmailFrom, EmailTo, EmailSubject, EmailBody){
    var mailOptions = {
        from: EmailFrom,
        to: EmailTo,
        subject: EmailSubject,
        text: EmailBody, 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) throw error;
        console.log('Email Successfully sent: ' + info.response);
    });
}

// v1.1.0------------------------



// v1.2.0---------------------

// function SelectData(connection, tableName, columnsData, callback) {
//     const query = `SELECT * FROM ${tableName} WHERE ?`;

//     connection.query(query, columnsData, (error, results, fields) => {
//         if (error) throw error;
//         callback(results);
//     });
// }

function SelectDataAnd(connection, tableName, dataColumns, conditions, callback) {
    const query = `SELECT * FROM ${tableName}`;
    const ValueConditions = conditions ? Object.values(conditions) : [];

    if(dataColumns && dataColumns.length > 0){
        const NameDataClumns = dataColumns.join(', ')
        query = `SELECT ${NameDataClumns} FROM ${tableName}`
    }

    if(conditions && Object.keys(conditions).length > 0){
        const Keycondition = Object.keys(conditions);
        // const ValueConditions = Keycondition.map(key => conditions[key]);
        const whereData = Keycondition.map(key => `${key} = ?`).join(' AND ')
        query += `WHERE ${whereData}`;
    }

    // connection.query(query, ValueConditions, (err, results, fields) => {
    //     if (err) throw err;
    //     callback(results);
    // })
    connection.query(query, ValueConditions, (error, results, fields) => {
  
        if (error) throw error;
        callback(results);
      });
}


module.exports = {    
    ConnectToDatabase,
    SendEmailConfig,
    SelectAllData,
    SelectData,
    insertData,
    updateDataById,
    deleteDataById,
    SendEmailTo,
    SelectDataAnd,
};