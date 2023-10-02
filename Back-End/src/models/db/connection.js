//banco MYSQL
const mysql = require('mysql2/promise');
require('dotenv').config();

async function connect() {
  const connection = await mysql.createConnection(process.env.DATABASEMYSQL);
  return connection
}

module.exports = connect;


//banco POSTGRESQL
/* const { Pool } = require('pg')
require('dotenv').config();

async function connect() {
  const pool = new Pool({
    connectionString: process.env.DATABASEPOSTGRESQL
  })
  const client = await pool.connect()
  client.release()
  return client
}

module.exports = connect; */


