const usersModel = require('../models/usersModel');
const { validationResult } = require('express-validator');

const controller = {

    getRegister: (req, res) => {
        res.render('register', {
            session: req.session,
            errors: {},
            oldData: {},
            register: {},
            bienvenida: {},
        });
    },

    postRegister: (req, res) => {
        let validations = validationResult(req);
        const emailErrors = validations.mapped().email;

        if(!emailErrors && usersModel.findByEmail(req.body.email)){
            return res.render('register', {
                errors: validations.mapped(),
                oldData: req.body,
                bienvenida: {},
                register: {
                    msg: 'Ya tienes cuenta'
                }
            });
        };

        if(validations.errors.length > 0){
            return res.render('register', {
                errors: validations.mapped(),
                oldData: req.body,
                register: {},
                bienvenida: {},
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
        oldData: {},
        bienvenida: {},
        });
    },

    postLogin: (req, res) => {

        let user = usersModel.findByEmail(req.body.email);

        if(user){
            req.session.name = user.name;
            res.render('formOne', {
                bienvenida: {
                    msg: `Te extrañábamos ${user.name}`
                }
            })
        } else{
            res.redirect('/users/login?Error=No tenes cuenta');
        }
    }
}

module.exports = controller;