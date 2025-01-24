import conexionBDD from "./conexionBDD.js";
import express from "express"
import {Tareas} from "../models/tareas.js"

const ruta = express.Router()

conexionBDD()

ruta.post("/agregarTarea", async (req, res) =>{

    const estado = "pendiente"

    try {
        const {nombreTarea, descripcion, fechaOpcional, fechaLimite} = req.body
        const nuevaTarea = new Tareas({nombreTarea, descripcion, fechaOpcional, fechaLimite, estado})
        await nuevaTarea.save()

        res.status(201).json({
            message: "Tarea registrada con exito!"
        })
    } catch (error) {
        res.status(501).json({
            message: "Error, no se registro la tarea tolete"
        })
    }
})

export default ruta