const loginService = require('../services/loginService')

const login = async (req, res) => {
    const { email, password } = req.body

    const { status, message } = await  loginService.login(email, password)
    if(status) return res.status(status).json({ message })
    return res.status(200).json({ token:  message })
}

module.exports = {
    login,
}