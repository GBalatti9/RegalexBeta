let { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un correo electrónico'),
];

module.exports = validations;