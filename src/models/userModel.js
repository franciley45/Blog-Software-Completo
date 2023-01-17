const connection = require('./db/connection')

const getUserAll = async() => {
  const [result] = await connection.execute('SELECT * FROM user')
  /* console.log(result) */
  return result
}
const getUserId = async(id) => {
  const [[result]] = await connection.execute('SELECT * FROM user WHERE user_id = ?', [id])
  /* console.log(result) */
  return result
}

const getUserByEmail = async (email) => {
  const [[result]] = await connection.execute('SELECT * FROM user WHERE email = ?', [email])
  /* console.log(result) */
  return result
}

const createUser = async (name, email, password ) => {
  const [{ insertId }] = await connection.execute(
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