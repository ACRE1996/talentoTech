import mongoose from "mongoose";

const esquemaTareas = new mongoose.Schema({
    nombreTarea: {type:String, required: true},
    descripcion: {type:String, required: true},
    fechaOpcional: {type:Boolean, required: true},
    fechaLimite: {type:Date, required: true},
    estado: {type:String, required: true}
})

export const Tareas = mongoose.model("tareas", esquemaTareas)