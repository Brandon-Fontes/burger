const mysql = require('mysql');

var connection = mysql.createPool({
	connectionLimit: 5,
    host: "us-cdbr-east-03.cleardb.com",
    port: 3306,
    user: "bfb68d7fb9eca7",
    password: "467c6aad",
    database: "heroku_2e9c7320e7b6078"
});

connection.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = connection;