const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,

});

module.exports = connection;