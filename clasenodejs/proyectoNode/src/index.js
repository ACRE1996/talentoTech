/* const funcion = require("../src/funciones");
const {boot} = require("../src/objetos");
const {cursoboot, dificultad, nivel} = boot; */ //forma anterior

import {obtenerTitulo, obtenerDocente} from "../src/funciones.js";
import {boot} from "./objetos.js";
const {cursoboot, dificultad, nivel} = boot;

console.log(obtenerTitulo());
console.log(obtenerDocente("Jhonatan", "Devrier"));

console.log(`El curso ${cursoboot} es dificultad ${dificultad} y nivel ${nivel}`)

