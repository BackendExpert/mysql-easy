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