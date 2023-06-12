
const userServices = require('../services/Userservice')

const getUserAll = async (_req, res) => {
  const result = await userServices.getUserAll()
  res.status(200).json(result)
}

const getUserId = async (req, res) => {
  const { id } = req.params
  const { status, message } = await userServices.getUserId(id)

  if (status === 404) return res.status(status).json({ message })
  return res.status(200).json(message)
  
}

const createUser = async (req,res) => {
  const { name, email, password } = req.body
  
  const { status, message } = await userServices.createUser(name, email, password)

  if (status === 409) return res.status(status).json({ message })
  return res.status(201).json({ token: message })
}

module.exports = {
  getUserAll,
  createUser,
  getUserId,
}
