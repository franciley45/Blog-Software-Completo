const milagresModel = require('../models/milagreModel')

const checkUserId =  async (req, res, next) => {
    const { id } = req.params;
    const { user_id } = req.user.data;
    const checkID = await milagresModel.getAllByID(id)

  if (!checkID) return res.status(404).json({ message: 'Post not found!' })
  
  if (checkID.user_id !== user_id) return res.status(402).json({ message: 'this post is not yours!' })
  next()
}

module.exports = {
    checkUserId,
  };