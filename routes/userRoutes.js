const express = require('express');

const userController = require('../controllers/userController');

const authMiddleware = require('../middlewares/authMiddleware');
const authMiddlewareLogin = require('../middlewares/authMiddlewareLogin');


const router = express.Router();

// @GET /users/register
router.get('/register', userController.getRegister);

// @POST /users/register
router.post('/register', authMiddleware, userController.postRegister);

// @GET /users/register
router.get('/login', userController.getLogin);

// @POST /users/register
router.post('/login', authMiddlewareLogin, userController.postLogin);

module.exports = router;