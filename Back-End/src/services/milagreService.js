const milagresModel = require('../models/milagreModel')



const getAll = async () => {
  const result = await milagresModel.getAll()
  return result
}

const getAllByID = async (id) => {
  const result = await milagresModel.getAllByID(id)

  if (!result) return { status: 404, message: 'Post não encontrado' }
  return { status: null, message: result }
}

const newPost = async (title, date, milagres, user_id) => {
  if (!title || !date || !milagres)
    return {
      status: 400, message: 'Todos os campos tem que esta preenchido'
    }
  const result = await milagresModel.newPost(title, date, milagres, user_id)

  return { status: null, message: result }
}

const updatePost = async (title, date, milagres, id, user_id) => {
  
  if (!title || !date || !milagres)
  return {
    status: 400, message: 'Todos os campos tem que esta preenchido'
  }

  const result = await milagresModel.updatePost(title, date, milagres, id, user_id)
  return { status: null, message: result }
}

const deletePost = async (id) => {
  await milagresModel.deletePost(id)
  return { status: 200, message: 'post deletado com sucesso' }
}

module.exports = {
  getAll,
  newPost,
  getAllByID,
  deletePost,
  updatePost,
}