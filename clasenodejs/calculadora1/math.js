const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const multiplicacion = (a,b) => a*b;
function division(a,b){
    let resultado = 0
    if (b == 0){
        resultado = "Error!, no se puede dividir entre 0"
        return resultado
    }else{
        resultado = a/b
        return resultado
    }
}

module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}