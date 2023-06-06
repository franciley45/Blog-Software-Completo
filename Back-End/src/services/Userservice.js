const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')

const secret = 'deus seja louvado';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getUserAll = async () => {
  const result = await userModel.getUserAll()
  return result
}

const getUserId = async (id) => {
  const result = await userModel.getUserId(id)
  
  if (!result) return { status: 404, message: 'User não encontrado' }
  return { status: null, message:result }
}

const createUser = async (name, email, password) => {
  
  const user = await userModel.getUserByEmail(email)

  if (user) return { status: 409, message: 'User already registered' };

   const result = await userModel.createUser(name, email, password )

  const payload = { data: { email, user_id: result, name }};
  const token = jwt.sign(payload, secret, jwtConfig);

return { status: null, message: token };
};

module.exports = {
  getUserAll,
  createUser,
  getUserId,
}