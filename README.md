# JKMySQL Easy 

- This is the one of Backend Support NPM Package with Node.js
- in this package the developer not need to type sql Queries

## Documentation

- in order to this NPM package there are 6 functions

| Function | Description |
|-----|------|
| ConnectToDatabase(host, user, password, database) | to connect to Mysql Server |
| SelectAllData(connection, tableName, callback) | Select all data in named table in database | 
| SelectData(connection, tableName, columnsData, callback) | Select one Recode according to Given column and value |
| insertData(connection, tableName, data, callback) | Insert data to named table |
| updateDataById(connection, tableName, UpdateColumn, id, newData, callback) | Update the data according to given column and value |
| deleteDataById(connection, tableName, DeleteColumn, id, callback) | Delete the data according to given column and value |


## Function Explain

### ConnectToDatabase(host, user, password, database)

- This function help to make connection between node.js and the mysql Database 
- in this function have 4 return values

- - host - your_host (mostly localhost )
- - user - your_user (user )
- - password - your_password (password of database )
- - database - your_database name (name of the Database )

### SelectAllData(connection, tableName, callback)

- This function to get all data in given table (view all data in selected table)
- - connection - for connection function
- - tableName - selected talbe
- - callback - return data
- if no data return will be 0

### SelectData(connection, tableName, columnsData, callback)

- same as above function
- This function will get only selected row data 
- - connection - for connection function
- - tableName - selected talbe
- - columnsData - selected column
- - callback - return data
- if no data return will be 0

### insertData(connection, tableName, data, callback)

- This function help to insert data to database table
- - connection - for connection function
- - tableName - selected talbe
- - data - data that want to insert to database
- - callback - return message

### updateDataById(connection, tableName, UpdateColumn, id, newData, callback)

- This function help to update data according to given column and value in named table
- - connection - for connection function
- - tableName - selected talbe
- - UpdateColumn - the column name that want to update
- - id - the column data that want to update
- - newData - data that want to update 
- - callback - return message

### deleteDataById(connection, tableName, DeleteColumn, id, callback)

- This function help to Delete data according to given column and value in named table
- - connection - for connection function
- - tableName - selected talbe
- - DeleteColumn - the column  name that want to delete
- - id - the column data that want to delete
- - callback - return message


## How to use

- install the package

```js

    npm i jkmysql-easy

```

- in server.js file in backend (node.js)

``` js 

const JKMysql = require('mysql-easy');

```

- and then work of functions

``` js 

// function for SelectAllData

const tableName = 'name_of_the_table';

mysqlHelper.SelectAllData(connection, tableName, (results) => {
    console.log('The Fetched Data:', results);
})


// function for SelectData

const tableName = 'name_of_the_table';
const columnsData = { email: "email2@123.com" }; // Example columns data object

mysqlHelper.SelectData(connection, tableName, columnsData, (results) => {
    console.log('The Fetched Data:', results);
})





```
