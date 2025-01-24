import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const conexionBDD = async()=>{
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Conexion exitosa")).catch((error)=>console.log("Error de conexion a la base de datos: ", error))
}

export default conexionBDD