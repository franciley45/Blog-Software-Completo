const mysql = require('mysql2/promise');

require('dotenv').config();

async function connect() {
  const connection = await mysql.createConnection(process.env.DATABASE);
  return connection
}

module.exports = connect;

