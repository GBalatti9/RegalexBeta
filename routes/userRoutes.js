const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// @GET /users/register
router.get('/register', userController.getRegister);

// @POST /users/register
router.post('/register', userController.postRegister);

module.exports = router;