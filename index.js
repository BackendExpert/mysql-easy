const mysql = require('mysql2');

async function ConnectDatabase(dbHost, dbUser, dbPass, dbName) {
    const connection = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: dbName
    })

    // Connect to MySQL
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL');
            return;
        }
        console.log('Connected to MySQL as id ');
    });

    return connection;
}

module.exports = ConnectDatabase;
