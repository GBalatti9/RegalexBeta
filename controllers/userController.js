const usersModel = require('../models/usersModel');

const controller = {

    getRegister: (req, res) => {
        res.render('register', {
            session: req.session
        });
    },

    postRegister: (req, res) => {
        const { name } = req.body;

        req.session.name = name;

        let newUser = req.body;

        usersModel.createOne(newUser);

        res.redirect('/products');
    }
}

module.exports = controller;