

const controller = {
    getFormOne: (req, res) => {
        res.render('formOne', {
            name: req.session.name,
        });
    },

    postFormOne: (req, res) => {

        console.log(req.body);
    }

};

module.exports = controller;