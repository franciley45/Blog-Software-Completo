const loginModel = require('../models/loginModel')
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'deus seja louvado';

const login = async (email, password) => {

  if (!email || !password)
    return {
      status: 400, message: 'Todos os campos tem que esta preenchido'
    }

  const result = await loginModel.login(email)
  if (!result || result.password !== password)
    return {
      status: 400, message: 'User não cadrastrado ou password errado'
    }

  const { user_id, name } = result
  const payload = { data: { email, user_id, name  } };
  const token = jwt.sign(payload, secret, jwtConfig);
  return { status: null, message: { user_id, name, token }}
}

module.exports = {
  login
}