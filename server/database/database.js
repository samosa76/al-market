const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    database: 'db_almarket',
    user:'root',
    password: ''
})

module.exports = db;