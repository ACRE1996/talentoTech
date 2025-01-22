const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()

const Usuarios = require("./models/usuario")
const app = express()

app.use(express.json())

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Conexion exitosa")).catch((error)=>console.log("Error de conexion a la base de datos: ", error))

app.post("/usuarios", async (req, res)=>{
    try {
        const {nombre, email, telefono, edad}=req.body
        const nuevoUsuario = new Usuarios({nombre, email, telefono, edad})
        await nuevoUsuario.save()
        res.status(201).json({
            message: "¡Usuario creado con exito!", usuario: nuevoUsuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error, usuario no creado", error
        })
    }
})

app.get("/usuarios", async (req, res)=>{
    try {
        const users = await Usuarios.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: "Error, no se pudo obtener el usuario", error
        })
    }
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`servidor inicializado en el puerto: ${PORT}`)
})