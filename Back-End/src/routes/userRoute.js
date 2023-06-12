const express = require('express');
const userController = require('../controllers/userController');
const { userFields } = require('../middlewares/userFields');


const userRouter = express.Router();

userRouter.get('/', userController.getUserAll)
userRouter.get('/:id', userController.getUserId)
userRouter.post('/', userFields, userController.createUser)

module.exports = userRouter