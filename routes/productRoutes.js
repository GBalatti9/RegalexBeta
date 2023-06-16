const express = require('express');

const productController = require('../controllers/productController')

const router = express.Router();

// @GET /products/
router.get('/', productController.getFormOne);

// @POST /products/
router.post('/', productController.postFormOne);

module.exports =  router;