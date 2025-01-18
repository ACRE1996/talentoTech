import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export function agregarTarea(arreglo, id, titulo, descripcion, completada){
    const objeto = {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        completada: completada
    }
    arreglo.push(objeto)
}
export function preguntar(pregunta) {
    return new Promise((resolve) => {
      rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
  }