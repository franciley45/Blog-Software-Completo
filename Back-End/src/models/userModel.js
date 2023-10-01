/* const connection = require('./db/connection') */
const connect = require("./db/connection")

const getUserAll = async() => {
  const [result] = await (await connect()).query('SELECT * FROM user');
  return result
}
const getUserId = async(id) => {
  const [[result]] = await (await connect()).query('SELECT * FROM user WHERE user_id = ?', [id]);
  return result
}

const getUserByEmail = async (email) => {
  const [[result]] = await (await connect()).query('SELECT * FROM user WHERE email = ?', [email]);
  return result
}

const createUser = async (name, email, password ) => {
  const [{ insertId }] = await (await connect()).query(
    'INSERT INTO user (name, email, password) VALUE (?,?,?)',
    [name, email, password],
  )
  return insertId;
}
module.exports = {
  getUserAll,
  getUserByEmail,
  createUser,
  getUserId,
}