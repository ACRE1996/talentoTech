const express = require("express")
const path  = require("path")

const iniciarServidor = (option)=>{
    const {port, public_path = "public"} = option

    const app = express()

    app.use(express.static(public_path))

    app.get("/", (req, res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=>{
        console.log("Ejecutando en el puerto: " + port)
    })


}

module.exports = {
    iniciarServidor
}