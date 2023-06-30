const express = require('express');

const productController = require('../controllers/productController')

const router = express.Router();

// @GET /products/
router.get('/', productController.getFormOne);

// @POST /products/
router.post('/', productController.postFormOne);

// @GET /products/forms
router.get('/forms', productController.getCompleteForms);

// @POST /products/formulario
router.post('/forms', productController.postCompleteForms);

// @GET /products/formulario
router.get('/formulario', productController.getFormulario);

module.exports =  router;