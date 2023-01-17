const connection = require('./db/connection')

const login = async (email) => {
const [[result]] = await connection.execute('SELECT * FROM user WHERE email = ?', [email])

return result
}
module.exports = {
    login,
}