const jwt = require('jsonwebtoken');

const secret = 'deus seja louvado';

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (!token) {
    const err = { statusCode: 401, message: 'Token not found' };
    return res.status(err.statusCode).json(err.message)
  }
  
  /* const tokenSlice = token.slice(7); */

  try {
    const result = jwt.verify(token, secret);
    req.user = result
    next();
  } catch (e) {
    const err = { statusCode: 401, message: 'Expired or invalid token' };
    return res.status(err.statusCode).json(err.message)
  }
};

module.exports = {
  validateJWT,
};