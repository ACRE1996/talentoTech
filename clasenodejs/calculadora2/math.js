export const suma = (a,b) => a+b;
export const resta = (a,b) => a-b;
export const multiplicacion = (a,b) => a*b;
export function division(a,b){
    let resultado = 0
    if (b == 0){
        resultado = "Error!, no se puede dividir entre 0"
        return resultado
    }else{
        resultado = a/b
        return resultado
    }
}