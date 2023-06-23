let { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un correo electrónico'),
    body('fechaNacimiento').notEmpty().withMessage('Debes ingresar una fecha de nacimiento'),
    body('mailEnviado').notEmpty().withMessage('Debes ingresar un correo enviado')
];

module.exports = validations;