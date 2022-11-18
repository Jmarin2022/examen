const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.port
        this.productosPath = "/api/encuesta"
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    async dbConectar(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.productosPath, require('../routes/encuesta'))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde http://localhost:${this.port}`)
        })
    }

}

module.exports = Server