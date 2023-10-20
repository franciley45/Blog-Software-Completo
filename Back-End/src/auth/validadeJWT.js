const jwt = require('jsonwebtoken');

const secret = 'deus seja louvado';

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = { statusCode: 401, message: 'Token not found' };
    return res.status(err.statusCode).json(err.message)
  }
  
  console.log(token)
  console.log("oiii",token.indexOf("Bearer"));
  const tokenSlice = token.slice(7);
/*   console.log(tokenSlice) */
 
  try {
    const result = jwt.verify(tokenSlice, secret);
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