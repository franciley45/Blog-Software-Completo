const userFields =  async (req, res, next) => {
    const { name, email, password } = req.body;

  if (!name || !email || !password) return res.status(422).json({ message: 'all fields must be filled in!' })
  
  next()
}

module.exports = {
    userFields,
  };