const mysql = require('mysql2/promise');

require('dotenv').config();


const connection = mysql.createPool({ 
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
}, 
{ pooling: { enabled: true, maxIdleTime: 10000, maxSize: 45, queueTimeout: 60000 } });

module.exports = connection;