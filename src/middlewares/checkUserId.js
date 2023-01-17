const milagresModel = require('../models/milagreModel')

const checkUserId =  async (req, res, next) => {
    const { id } = req.params;
    const { user_id } = req.user.data;
    const checkID = await milagresModel.getAllByID(id)

  if (!checkID) return res.status(404).json({ message: 'Post não encontrado' })
  
  if (checkID.user_id !== user_id) return res.status(400).json({ message: 'esse post não é seu' })
  next()
}

module.exports = {
    checkUserId,
  };