const milagreService = require('../services/milagreService')

const getAll = async (_req, res) => {
  const result = await milagreService.getAll()
  return res.status(200).json(result)
};
const getAllByID = async (req, res) => {
  const { id } = req.params;
 
  const { status, message } = await milagreService.getAllByID(id)

  if (status) return res.status(status).json({ message })
  return res.status(200).json(message)
}

const newPost = async (req, res) => {
  const { data } = req.user
  const { title, date, milagres } = req.body 

  const { status, message } = await milagreService.newPost(title, date, milagres, data.user_id)

  if (status) return res.status(status).json({ message })
  return res.status(201).json(message)
}

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { data } = req.user
  const { title, date, milagres } = req.body
  
  const { status, message } = await milagreService.updatePost(title, date, milagres, id, data.user_id)
  
  if (status) return res.status(status).json({ message })
  return res.status(201).json(message)
}

const deletePost = async (req, res) => {
  const { id } = req.params;

  const { status, message } = await milagreService.deletePost(id)

return res.status(status).json({ message })
}

module.exports = {
  getAll,
  newPost,
  getAllByID,
  deletePost,
  updatePost,
}