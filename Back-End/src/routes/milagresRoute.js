const express = require('express');
const { validateJWT } = require('../auth/validadeJWT');
const { checkUserId } = require('../middlewares/checkUserId');
const milagreController = require('../controllers/milagreController');



const milagresRouter = express.Router();

milagresRouter.get('/',milagreController.getAll)
milagresRouter.get('/:id', milagreController.getAllByID)
milagresRouter.delete('/:id', validateJWT, checkUserId, milagreController.deletePost)
milagresRouter.post('/', validateJWT, milagreController.newPost)
milagresRouter.put('/:id', validateJWT, checkUserId, milagreController.updatePost)

module.exports = milagresRouter
