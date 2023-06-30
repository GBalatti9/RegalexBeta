// siguiente representa el INDICE de la pregunta a la que se tiene que redirigir la pagina cuando el usuario contesta esa opción

const preguntas = [
    {
        pregunta: "Qué actividad disfrutás hacer más",
        respuestas: [
            { opcion: "A", texto: "Comer", siguiente: 1 },
            { opcion: "B", texto: "Cocinar", siguiente: 5 },
            { opcion: "C", texto: "Tomar", siguiente: 6 },
            { opcion: "D", texto: "Leer", siguiente: 7 },
            { opcion: "E", texto: "Escuchar música", siguiente: 8 },
            { opcion: "F", texto: "Hacer deporte", siguiente: 9 },
            { opcion: "G", texto: "Jardinería", siguiente: 10 },
            { opcion: "H", texto: "Arte", siguiente: 11 }
        ]
    },
    {
        pregunta: "Qué te gusta más",
        respuestas: [
            { opcion: "A", texto: "Dulce", siguiente: 2 },
            { opcion: "B", texto: "Salado", siguiente: 2 }
        ]
    },
    {
        pregunta: "En qué momento lo disfrutás más",
        respuestas: [
            { opcion: "A", texto: "Desayuno", siguiente: 3 },
            { opcion: "B", texto: "Almuerzo", siguiente: 3 },
            { opcion: "C", texto: "Merienda", siguiente: 3 },
            { opcion: "D", texto: "Cena", siguiente: 3 }
        ]
    },
    {
        pregunta: "¿Qué tipo de comida te gusta más?",
        respuestas: [
            { opcion: "A", texto: "Italiana", siguiente: 4 },
            { opcion: "B", texto: "Española", siguiente: 4 },
            { opcion: "C", texto: "Parrillada", siguiente: 4 },
            { opcion: "D", texto: "Oriental", siguiente: 4 },
            { opcion: "E", texto: "Vegetariana-vegana", siguiente: 4 },
        ]
    },
    {
        pregunta: "¿Con quién te gustaria compartir ese momento?",
        respuestas: [
            { opcion: "A", texto: "Familia", siguiente: 0 },
            { opcion: "B", texto: "Amigos", siguiente: 0 },
            { opcion: "C", texto: "Pareja", siguiente: 0 },
            { opcion: "D", texto: "Solo", siguiente: 0 },
        ]
    }
]

module.exports = preguntas;