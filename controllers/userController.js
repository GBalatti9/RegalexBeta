const usersModel = require('../models/usersModel');
const { validationResult } = require('express-validator');

const controller = {

    getRegister: (req, res) => {
        res.render('register', {
            session: req.session,
            errors: {},
            oldData: {},
            register: {},
        });
    },

    postRegister: (req, res) => {
        let validations = validationResult(req);
        const emailErrors = validations.mapped().email;

        if(!emailErrors && usersModel.findByEmail(req.body.email)){
            return res.render('register', {
                errors: validations.mapped(),
                oldData: req.body,
                register: {
                    msg: 'Ya tienes cuenta'
                }
            });
        };

        if(validations.errors.length > 0){
            return res.render('register', {
                errors: validations.mapped(),
                oldData: req.body,
                register: {}
            })
        }

        const { name } = req.body;

        req.session.name = name;

        let newUser = req.body;

        usersModel.createOne(newUser);

        res.redirect('/products');
    },

    getLogin: (req, res) => {
        res.render('login', {
        errors: {},
        oldData: {}
        });
    },

    postLogin: (req, res) => {

        if(usersModel.findByEmail(req.body.email)){
            res.redirect('/products')
        } else{
            res.redirect('/users/login?Error=No tenes cuenta');
        }
    }
}

module.exports = controller;