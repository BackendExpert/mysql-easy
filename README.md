# JKMySQL Easy 

- This is the one of Backend Support NPM Package with Node.js
- in this package the developer not need to type sql Queries

## Releases

### v1.0.0 - 07 May 2024 

- initial release of Project

### v1.1.0 - 17 May 2024 

- Updating NPM Package
- Adding Sending Email

### v1.2.0 - 23 May 2024 

- Updating NPM Package
- Adding Select Data by AND , OR

### v1.3.0 - 24 May 2024 

- Updating NPM Package
- Adding Search data Function

## Documentation

- in order to this NPM package there are 6 functions

### v1.0.0 - 07 May 2024 

| Function | Description |
|-----|------|
| ConnectToDatabase(host, user, password, database) | to connect to Mysql Server |
| SelectAllData(connection, tableName, callback) | Select all data in named table in database | 
| SelectData(connection, tableName, columnsData, callback) | Select one Recode according to Given column and value |
| insertData(connection, tableName, data, callback) | Insert data to named table |
| updateDataById(connection, tableName, UpdateColumn, id, newData, callback) | Update the data according to given column and value |
| deleteDataById(connection, tableName, DeleteColumn, id, callback) | Delete the data according to given column and value |


### v1.1.0 - 17 May 2024 

| Function | Description |
|-----|------|
| SendEmailConfig(EmailService, from, Senderpass) | confiarate the email trasnporter |
| SendEmailTo(transporter, EmailFrom, EmailTo, EmailSubject, EmailBody) | Sending Email in Here 5 Veriables |


### v1.2.0 - 23 May 2024 

| Function | Description |
|-----|------|
| SelectByAnd(connection, tableName, dataColumns, conditions, callback) | AND operation Select Data |
| SelectByOR(connection, tableName, dataColumns, conditions, callback) | OR operation Select Data |


### v1.3.0 - 24 May 2024 

| Function | Description |
|-----|------|
| SearchData(connection, tableName, searchColumns, callback) | Seacrch data using LIKE |



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

<hr>

### SendEmailConfig(EmailService, from, Senderpass)

- This function configarate the email environment in nodejs
- EmailService - mostly (Gmail) Plesase use Gmail other services are not still working
- from - senders email address (this in .env file)
- Senderpass - your App Password (this in .env file)



### SendEmailTo(transporter, EmailFrom, EmailTo, EmailSubject, EmailBody)

- IMPORTANT - you must use transporter as veriable in nodejs othervise this not working

- This function help to send the Email
- transporter - when you create the configaration of the email sending `SendEmailConfig(EmailService, from, Senderpass)`
- EmailFrom - same as from in `SendEmailConfig(EmailService, from, Senderpass)`
- EmailTo - you want to send email (receiver of email)
- EmailSubject - subject of the Email
- EmailBody - body (content of the Email)

<hr>

### function SelectByAnd(connection, tableName, dataColumns, conditions, callback)

- in this function has 5 veriables
- AND operation Select Data

### function SelectByOR(connection, tableName, dataColumns, conditions, callback)

- in this function has 5 veriables
- OR operation Select Data

### IMPORTANT

- if you want to get all data via these 2 funtion you have to mention dataColumns and conditions as empty veriables if not this will not working


<hr>

### SearchData(connection, tableName, searchColumns, callback)

- This function has 4 veriables
- - connection for connect database
- - tableName for name of the table you need to search data
- - searchColumns for colums that you use to seach data
- - callback for get the result


## How to use

- install the package

```js

    npm i jkmysql-easy

```

- in server.js file in backend (node.js)

``` js 

const JKMysql = require('jkmysql-easy');

```

- and then work of functions

``` js 

// function for SelectAllData

const tableName = 'name_of_the_table';

JKMysql.SelectAllData(connection, tableName, (results) => {
    console.log('The Fetched Data:', results);
})


// function for SelectData

const tableName = 'name_of_the_table';
const columnsData = { email: "email2@123.com" }; // Example columns data object

JKMysql.SelectData(connection, tableName, columnsData, (results) => {
    console.log('The Fetched Data:', results);
})


// function for insertData

const tableName = 'users';
const data = { username: 'John', email: 'email2@123.com', create_at: new Date(), role: "user", is_active: 1, password: '123'};
        
JKMysql.insertData(connection, tableName, data, (insertedId) => {
    console.log('Data Enterd Successful');
});

// function for updateDataById

const tableName = "users"
const idToUpdate = "email2@123.com"
const updateColumn = "email"
const newData = { username: 'Amara', role: "SuperAdmin" };

JKMysql.updateDataById(connection, tableName, updateColumn, idToUpdate, newData, (affectedRows) => {
    console.log('Data Updated Successful');
});

// function for updateDataById


const tableName = 'users';
const emailtoDelete = 'email@123.com'; // The ID of the row you want to update
const DeleteColumn = 'email'

JKMysql.deleteDataById(connection, tableName, DeleteColumn, emailtoDelete, (affectedRows) => {
    console.log('Recode Deleted Succefull');
});


```

### v1.1.0 functions

``` js 

const JKMysql = require('jkmysql-easy');

// configarate the email
// you must use veriable as `transporter` if not this will not working
const transporter = JKmysql.SendEmailConfig("Gmail", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

// sending email

const EmaiMe = "exmple@123.com"
const EmailMeSubject = "Successfully work jkmysqlEasy"
const EmalmeBody = "Working Successful"


// you must use veriable as `transporter` if not this will not working
JKmysql.SendEmailTo(transporter, process.env.EMAIL_USER, EmaiMe, EmailMeSubject, EmalmeBody)

// optional
return res.json({Status: "Success"})



```
 

### v1.2.0 functions

``` js 

const JKMysql = require('jkmysql-easy');

// AND opertaion Select data

const tableName = 'tableName'
const columns = []
const conditions = {
    coloumn: "coloumn",
    coloumn: "coloumn",
}
JKmysql.SelectDataAnd(connection, tableName, columns, conditions, (query) => {
    console.log(query)
})

// if you want to get all data set columns and conditions as empty 
// if you not mentions the columns and conditions this will not warking

// OR opertaion Select data

const tableName = 'tableName'
const columns = []
const conditions = {
    coloumn: "data",
    coloumn2: "data2"
}
JKmysql.SelectDataOR(connection, tableName, columns, conditions, (query) => {
    console.log(query)
})

// if you want to get all data set columns and conditions as empty 
// if you not mentions the columns and conditions this will not warking


```


### v1.3.0 functions

``` js 

const JKMysql = require('jkmysql-easy');

const tableName = "tableName"
const searchColumns = {
    coloumn: "data",
    coloumn2: "data2"
}
JKmysql.SearchData(connection, tableName, searchColumns, (result) => {
    console.log(result)
})

```



## Developers

- [JehanKandy](https://github.com/BackendExpert) - Developer
- [Anupa Gamage](https://github.com/Anupa1998) - Developer