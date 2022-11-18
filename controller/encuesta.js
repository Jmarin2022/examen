const { response } = require('express')
const Encuesta = require('../models/encuesta')

const getEncuesta = async (req, res = response) => {
     const { edad } = req.query
   const encuesta = await Encuesta.find()
    res.json({
        msg: 'GET API Encuesta',
        encuesta
    })
}

const postEncuesta = async (req, res) => {
    //Desestructuracion
    const { Nombreencuesta,Fecha,Documentoencuensta,Nombreencuestado,edad,genero,empleado} = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const encuesta = new Encuesta({ Nombreencuesta,Fecha,Documentoencuensta,Nombreencuestado,edad,genero,empleado })


    await encuesta.save()

    res.json({
        msg: 'POST API Encuesta',
        encuesta
    })
}

const putEncuesta = async( req, res )=> {
    // Destructuración 

    const { Nombreencuestaanterior, Nombreencuestanuevo,Fechaantarior,Documentoencuenstaantarior,Nombreencuestadoantarior,edadantarior,generoantarior,empleadoantarior,Fechanuevo,Documentoencuenstanuevo,Nombreencuestadonuevo,edadnuevo,generonuevo,empleadonuevo} = req.body
const encuesta = await Encuesta.findOneAndUpdate({Nombreencuesta: Nombreencuestaanterior,Fecha:Fechaantarior,Documentoencuensta:Documentoencuenstaantarior,Nombreencuestado:Nombreencuestadoantarior,edad:edadantarior,genero:generoantarior,empleado:empleadoantarior}, {Nombreencuesta:Nombreencuestanuevo,Fecha:Fechanuevo,Documentoencuensta:Documentoencuenstanuevo,Nombreencuestado:Nombreencuestadonuevo,edad:edadnuevo,genero:generonuevo,empleado:empleadonuevo})
    res.json({
    msg: 'PUT API Encuesta',
    encuesta})
}

const patchEncuesta = async(req, res ) => {
    const { Nombreencuesta, Fecha } = req.body
    const encuesta = Encuesta.findByIdAndUpdate({Nombreencuesta: Nombreencuesta}, {Fecha: Fecha})
}



const deleteEncuesta = async( req, res ) => {
    const { Nombreencuesta } = req.query

    const encuesta = await Encuesta.findOneAndDelete({Nombreencuesta : Nombreencuesta })
    res.json({
        msg:'DELETE API Encuesta',
        encuesta
    })
}

module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
patchEncuesta,
    deleteEncuesta
}