const fs = require("fs")



try{

    //1. crear archivo
    fs.writeFileSync("datos.txt","Bienvenido al manejo de archivos de node.js")
    //2. leer archivo e imprimir
    let datos = fs.readFileSync("datos.txt", "utf-8")
    console.log(datos)
    //3. actualizar contenido
    fs.appendFileSync("datos.txt", "\n\nEste archivo ha sido actualizado exitosamente")
    //4. cambiar nombre archivo
    fs.renameSync("datos.txt", "datosCambiados")
    //5. eliminar un nuevo archivo
    fs.writeFileSync("datos2.txt","Segundo archivo para sacrificar")
    fs.unlinkSync("datos2.txt")

}catch{

        console.log("error en la actividad")

}
