const {Schema, model} = require('mongoose')

const ProdutosSchema = Schema({
    Nombreencuesta:{
        type: String
    },
    Fecha:{
        type: String
    },
    Documentoencuensta:{
        type: Number
    },
    Nombreencuestado:{
        type: String
    },
    edad:{
        type:  Number
    },
    genero:{
        type: String
    },
    empleado:{
        type: String
    },
})


module.exports = model('Productos',ProdutosSchema)