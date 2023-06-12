const userFields =  async (req, res, next) => {
    const { name, email, password } = req.body;

  if (!name || !email || !password) return res.status(404).json({ message: 'todos os campos tem que ser preenchido' })
  
  next()
}

module.exports = {
    userFields,
  };