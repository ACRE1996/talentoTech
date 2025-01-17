const fs = require("fs")

const archivo = fs.readFileSync("archivo.txt", "utf-8")

console.log(archivo)

fs.writeFileSync("introduccionNode.txt", "Este cuerpo es mi titulo\n Ahora tengo este cuerpo de texto")

let introduccionNode = fs.readFileSync("introduccionNode.txt", "utf-8")

console.log(introduccionNode)

const archivoModificado = introduccionNode.replace(/cuerpo/g, "parrafo")

fs.writeFileSync("introduccionNode.txt",archivoModificado)

introduccionNode = fs.readFileSync("introduccionNode.txt", "utf-8")

console.log(introduccionNode)