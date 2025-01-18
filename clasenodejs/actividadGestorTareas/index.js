import { tareas } from "./tareas.js";
import {agregarTarea, preguntar} from "./gestorTareas.js";
import readline from "readline"

let id=0
let titulo=""
let descripcion=""
let completada = false

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


async function mostrarMenu(){
    let opcion = "";

    while (opcion !== "0") {
        opcion = await preguntar(
          `Elige una opción: 
            1) Agregar tarea
            2) Listar tareas
            3) Marcar tarea
            4) Eliminar tarea
            0) Salir\n`
        );
            
            if (opcion == "1"){

                console.log("----------AGREGAR TAREA------------")
                id = await preguntar("Por favor ingrese el id: ")
                titulo = await preguntar("Por favor ingrese el titulo: ")
                descripcion = await preguntar("Por favor ingrese la descripcion: ")
                completada = await preguntar("Por favor ingrese true o false si esta completada: ")
                agregarTarea(tareas,id,titulo,descripcion,completada);
                
            }else if (opcion == "2"){
                console.log("----------LISTAR TAREAS------------")
                console.log(tareas)
            }else if (opcion == "3"){
                console.log("----------MARCAR TAREA------------")
            }else if (opcion == "4"){
                console.log("----------ELIMMINAR TAREA------------")
            }else{
                console.log("Gracias por usar el gestor de tareas!\nAdios")
                rl.close()
            }
    
        }
    }
mostrarMenu()

