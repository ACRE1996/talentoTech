import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const rutaArchivo = fileURLToPath(import.meta.url)
const __dirname = path.dirname(rutaArchivo)

const ruta = express.Router()

ruta.get("/", (req, res)=>res.sendFile(path.join(__dirname, "../public/html/principal.html")))
ruta.get("/principal.js", (req, res)=>res.sendFile(path.join(__dirname, "../public/js/principal.js")))
ruta.get("/principal.css", (req, res)=>res.sendFile(path.join(__dirname, "../public/css/principal.css")))


export default ruta