const operacion = require("./math.js");
const chalk = require("chalk")

console.log(chalk.blue(`suma de 10 y 5 = ${operacion.suma(10,5)}`))
console.log(chalk.blue(`resta de 20 y 8 = ${operacion.resta(20,8)}`))
console.log(chalk.blue(`multiplicacion de 6 y 7 = ${operacion.multiplicacion(6,7)}`))
console.log(chalk.blue(`division de 15 y 3 = ${operacion.division(15,3)}`))
console.log(chalk.red(`division de 15 y 0 = ${operacion.division(15,0)}`))