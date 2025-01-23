import mongoose from "mongoose"

const libroSchema = new mongoose.Schema({
    titulo: {type:String, required: true},
    anio: {type:Number, required: true},
    autor: {type:String, required: true},
    paginado: {type:Number, required: true},
})

export const Libros = mongoose.model("libros", libroSchema)