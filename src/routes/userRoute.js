const express = require('express');
const userController = require('../controllers/userController')


const userRouter = express.Router();

userRouter.get('/', userController.getUserAll)
userRouter.get('/:id', userController.getUserId)
userRouter.post('/', userController.createUser)

module.exports = userRouter