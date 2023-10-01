const connect = require("./db/connection")

const login = async (email) => {
const [[result]] = await (await connect()).query('SELECT * FROM user WHERE email = ?', [email])

return result
}
module.exports = {
    login,
}