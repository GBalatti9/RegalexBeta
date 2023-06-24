

const controller = {
    getFormOne: (req, res) => {
        res.render('formOne', {
            name: req.session.name,
            bienvenida: {},
            data: {}
        });
    },

    postFormOne: (req, res) => {
        console.log(req.body);
        res.render('completeForms', {
            bienvenida: {},
            data: req.body
        });
    },

    getCompleteForms: (req, res) => {
        res.render('completeForms', {
            name: req.session.name,
            bienvenida: {},
            data: {},
        })
    },

    postCompleteForms: (req, res) => {
        console.log(req.body);
        res.render('completeForms', {
            data: req.body,
            bienvenida: {}
        })
    }

};

module.exports = controller;