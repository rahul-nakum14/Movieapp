const express = require('express');
const userRouter = express.Router();
const authenticateUser = require('./authHelper');
const { signup, signin, signup_get, signin_get,dashboard,recommendation, wishlist } = require('../controller/userController');


userRouter.get('/login', signin_get);
userRouter.get('/signup', signup_get);

userRouter.post('/login', signin);
userRouter.post('/signup', signup);

userRouter.get('/dashboard', authenticateUser, dashboard);

userRouter.get('/recommendation', authenticateUser, recommendation);
userRouter.get('/trending', authenticateUser, recommendation);
userRouter.get('/wishlist', authenticateUser, wishlist);

module.exports = userRouter;
