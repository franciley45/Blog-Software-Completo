// src/app.js
const express = require('express');

const loginRouter = require('./routes/loginRoute');
const milagresRouter = require('./routes/milagresRoute');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(express.json());
app.use('/milagres', milagresRouter)
app.use('/user', userRouter)
app.use('/login', loginRouter)

module.exports = app;