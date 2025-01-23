import express from "express"
import mongoose from "mongoose"
import {Libros} from "./models/libro.js"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename)//ruta del archivo
console.log(__dirname)//ruta del directorio
dotenv.config()

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, "/public")))
console.log(path.join(__dirname, "/public"))
app.get("/index.js", (req, res)=> res.sendFile(path.join(__dirname, "/public/index.js")))

app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname + `/public/index.html`))
    })

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Conexion exitosa")).catch((error)=>console.log("Error de conexion a la base de datos: ", error))

app.post("/libros", async (req, res)=>{
    try {
        const {titulo, anio, autor, paginado}=req.body
        const nuevoLibro = new Libros({titulo, anio, autor, paginado})
        await nuevoLibro.save()
        res.status(201).json({
            message: "¡Libro creado con exito!", libro: nuevoLibro
        })
    } catch (error) {
        res.status(500).json({
            message: "Error, libro no creado", error
        })
    }
})

app.get("/libros", async (req, res)=>{
    try {
        const books = await Libros.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({
            message: "Error, no se pudo obtener el libro", error
        })
    }
})

app.put("/libros/:id", async(req, res)=>{
    try {
        const actualizarLibro = await Libros.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(actualizarLibro)
    } catch (error) {
        res.status(500).json({message: "error al actualizar libro", error})
    }
    
})

app.delete("/libros/:id", async(req, res)=>{
    try {
        await Libros.findByIdAndDelete(req.params.id)
        res.status(200).json("libro eliminado")
    } catch (error) {
        res.status(500).json({message: "error al eliminar libro", error})
    }
    
})

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`servidor inicializado en el puerto: ${PORT}`)
})