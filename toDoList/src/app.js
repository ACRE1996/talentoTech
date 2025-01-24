import express from "express"
import dotenv from "dotenv"
import path from "path"
import {fileURLToPath} from "url"
import ruta from "./rutas.js"
import postTarea from "../controllers/postTarea.js"

const rutaArchivo = fileURLToPath(import.meta.url)
const __dirname = path.dirname(rutaArchivo)

dotenv.config()

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))

app.use(ruta)
app.use(postTarea)

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Servidor escuchando a traves de: ${port}` )
})