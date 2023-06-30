const formularioCompleto = require('../models/preguntasModel');

const controller = {
    getFormOne: (req, res) => {
        res.render('formOne', {
            name: req.session.name,
            bienvenida: {},
            data: {},
            formularioCompleto,
            preguntaRespuestas: {}
        });
    },

    postFormOne: (req, res) => {
        // console.log(req.body);
        const preguntas = require('../models/preguntasModel');
        let indicePreguntaActual = req.session.indicePreguntaActual || 0;
        const mostrarSiguientePregunta = respuestaUsuario => {
            const preguntaActual = preguntas[indicePreguntaActual];
            console.log(preguntaActual);
            if (preguntaActual.respuestas) { 
                const opcionElegida = preguntaActual.respuestas.find(opcion => opcion.texto === respuestaUsuario);
                console.log(opcionElegida);
                if (opcionElegida && opcionElegida.siguiente !== undefined) {
                    const siguientePregunta = preguntas[opcionElegida.siguiente];
                    if (siguientePregunta) {
                        // const indiceSiguientePregunta = preguntas.indexOf(siguientePregunta);
                        return siguientePregunta;
                    } else {
                        return 'Error: Pregunta siguiente no encontrada';
                    }
                } else {
                    return 'Error: Opción inválida seleccionada';
                }
            } else {
                return 'Formulario completado';
            }
        }

        const respuestaUsuario = req.body.respuesta;
        const resultado = mostrarSiguientePregunta(respuestaUsuario);
        // console.log(resultado);
        req.session.indicePreguntaActual = (resultado === 'Formulario completado') ? 0 : indicePreguntaActual + 1;
        res.render('formOne', { 
            preguntaRespuestas: resultado,
            data: req.body,
            bienvenida: {},
            formularioCompleto: [] });
    },

    // if(opcionElegida){
    //     indicePreguntaActual = preguntas.indexOf(opcionElegida) + 1;
    // }
    // pregunta: siguientePregunta.pregunta, respuestas: siguientePregunta.respuestas

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
    },
    getFormulario: (req, res) => {
        res.render('formulario', {
            preguntaRespuestas: {},
            bienvenida: {},
            data: {},
        });
    }
};

module.exports = controller;