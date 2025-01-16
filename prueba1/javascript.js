console.log("--------------------------------------------Ejercicio #1--------------------------------------------");
let num1 = 10;
let num2 = 15;
let num3 = 20;
console.log("La suma de los 3 numeros es:\n+" + num1 + "\n+" + num2 + "\n+" + num3 + "\n______________\n" + (num1+num2+num3));

console.log("\n\n\n--------------------------------------------Ejercicio #2--------------------------------------------");
num1=1.5;
num2=2.5;
console.log("La multiplicacion de los decimales es:\n  " + num1 + "\nX " + num2 + "\n________\n" + (num1*num2));

console.log("\n\n\n--------------------------------------------Ejercicio #3--------------------------------------------");
num1=4.5;
num2=3;
num3=5;
let num4=4.8;
console.log("El promedio de las cuatro notas es:\n+" +num1 + "\n+" + num2 +"\n+" + num3 + "\n+" + num4 + "\n___________\n  " + (num1+num2+num3+num4) + "\n/ " + 4 + "\n__________\n" + (num1+num2+num3+num4)/4);

console.log("\n\n\n--------------------------------------------Ejercicio #4--------------------------------------------");
let base=30;
let altura=20;
console.log("El area del triangulo es:\n " + base + "\n*" + altura + "\n___________\n " + (base*altura) + "\n/2 \n___________\n" + (base*altura)/2);

console.log("\n\n\n--------------------------------------------Ejercicio #5--------------------------------------------");
num1 = 25;
console.log("La raiz cuadrada del numero " + num1 + " es: " + Math.sqrt(num1));

console.log("\n\n\n--------------------------------------------Ejercicio #6--------------------------------------------");
num1 = 20;
console.log("La conversion de grados Celsius a Fahrenheit es:\n " + num1 + "\n*" + 1.8 + "\n___________\n " + (num1*(9/5)) + "\n" + "+32 \n____________\n" + ((num1*(9/5)+32)));

console.log("\n\n\n--------------------------------------------Ejercicio #7--------------------------------------------");
console.log("La base " + num1 + " elevada al exponente " + 2 + " es: " + num1**2);

console.log("\n\n\n--------------------------------------------Ejercicio #8--------------------------------------------");
let nombre = "Daniel";
let apellido = "Arce";
console.log("El nombre de la persona es:\nNombre: " + nombre + "\nApellido: " + apellido + "\n\nConcatenado: " + nombre + " " + apellido);

console.log("\n\n\n--------------------------------------------Ejercicio #9--------------------------------------------");
let radioCirculo = 10;
console.log("El perimetro del circulo es:\nRadio del circulo: 10\n\n " + 2 + "\n*3.1416\n*" + radioCirculo + "\n___________\n" + 2*Math.PI*radioCirculo);

console.log("\n\n\n--------------------------------------------Ejercicio #10--------------------------------------------");
let numGrande1 = 50000;
let numGrande2 = 20000;
console.log("La resta de los numeros grandes es:\n " + numGrande1 + "\n-" + numGrande2 + "\n___________\n" + (numGrande1-numGrande2));


//----------------------Ejercicio Java script 2------------------------------
function votar(event){
    event.preventDefault();
    let edad = prompt("Ingrese su edad");

    if(edad<18){
        alert("Usted es menor de edad, por lo cual NO puede votar");
    }else{
        alert("Usted es mayor de edad, por lo cual SI puede votar");
    }
}

function conducir(event){
    event.preventDefault();
    let edad = prompt("Ingrese su edad");

    if(edad<18){
        alert("Usted es menor de edad, por lo cual NO puede conducir");
    }else{
        alert("Usted es mayor de edad, por lo cual SI puede conducir");
    }
}

function par(event){
    event.preventDefault();
    let numero = prompt("Ingrese el numero que desea evaluar");

    let resultado = numero % 2;

    if(resultado==0){
        alert("El numero es Par");
    }else{
        alert("El numero es impar");
    }
}

function mayor(event){
    event.preventDefault();
    let edad = prompt("Ingrese su edad");

    if(edad<18){
        alert("Usted es menor de edad");
    }else{
        alert("Usted es mayor de edad");
    }
}

function aprobar(event){
    event.preventDefault();
    let nota = prompt("Ingrese su nota final");

    if(nota>6){
        alert("Usted a APROBADO el curso");
    }else{
        alert("Usted a SUSPENDIDO el curso");
    }
}

function positivo(event){
    event.preventDefault();
    let numero = prompt("Por favor digite el numero a evaluar");

    if (numero>0){
        alert("El numero digitado es POSITIVO");
    }else if(numero<0){
        alert("El numero digitado es NEGATIVO");
    }else{
        alert("El numero es 0");
    }
}

function descuento(event){
    event.preventDefault();
    let edad = prompt("Ingrese su edad");

    if (edad<18 || edad>65){
        alert("Usted aplica SI para el descuento");
    }else{
        alert("Usted NO aplica para el descuento");
    }
}

function temporada(event){
    event.preventDefault();
    let mes = prompt("Ingrese el mes del año");
        if (mes == 1 || mes == 2 || mes == 12){
            alert("El mes es INVIERNO");
        }else if(mes >=3 && mes<=5 ){
            alert("El mes es PRIMAVERA");
        }else if(mes >=6 && mes <=8){
            alert("El mes es VERANO");
        }else if(mes >=9 && mes <=11){
            alert("El mes es OTOÑO");
        }else{
            alert("Mes ingresado invalido");
        }
}

function invitacion(event){
    event.preventDefault();

    let invitacion = prompt("¿Tienes invitacion?");

    if (invitacion == "si" || invitacion == "Si" || invitacion == "sI" || invitacion == "SI"){
        alert("Puedes asistir");
    }else if (invitacion == "no" || invitacion == "No" || invitacion == "nO" || invitacion == "NO"){
        alert("NO puedes asistir");
    }else{
        alert("Respuesta invalida");
    }
}

function alcohol(event){
    event.preventDefault();
    let edad = prompt("Ingrese su edad");

    if(edad<18){
        alert("Usted es menor de edad, por lo tanto NO puede comprar alcohol");
    }else{
        alert("Usted es mayor de edad, por lo tanto SI puede comprar alcohol");
    }
}

//-------------------EJERCICIO JAVASCRIPT 3----------------------------------------
function ciclo(event){
    event.preventDefault();
    for(let i=5;i>0;i--){
        alert("El numero es: " + i);
    }
}

function cicloW(event){
    event.preventDefault();

    let i=0;
    while(i<10){
        alert("Numero: " + i);
        i++;
    }
}

function cicloDo(event){
    event.preventDefault();
    let i = 1;
    do{
        
        let n = 0;
        alert("2 X " + i + " = " + (n = i*2))
        i++;
    }while(i<=10)
}

function sumaTotal(event){
    event.preventDefault();
    let seleccion = 1;
    let sumaNumeros = 0;
    let numero = 0;
    while(seleccion == 1){
        seleccion = prompt("seleccione una opcion:\n\n1- Ingresar numero\n\n2- Ejecutar suma total");
        if(seleccion==1){
            numero = parseInt(prompt("Digite el numero"));
            sumaNumeros = sumaNumeros + numero;
        }else if (seleccion == 2){
            alert("La suma de los numeros es: " + sumaNumeros + "\n\nGracias por usar la aplicacion");
        }else{
            alert("Seleccion invalida");
            seleccion=1;
        }
    }
}

function unoAlDiez(event){
    event.preventDefault();
    for(let i=1;i<=10;i++){
        alert("El numero es: " + i);
    }
}

function contarMayores(event){
    event.preventDefault();
    let seleccion = 1;
    let sumaNumeros = 0;
    let edad = 0;
    while(seleccion == 1){
        seleccion = prompt("seleccione una opcion:\n\n1- Ingresar edad\n\n2- Ejecutar suma de personas mayores de edad");
        if(seleccion==1){
            edad = parseInt(prompt("Digite la edad"));
            if(edad>=18){
                sumaNumeros = sumaNumeros + 1;
            }
        }else if (seleccion == 2){
            alert("La cantidad de personas mayores es: " + sumaNumeros + "\n\nGracias por usar la aplicacion");
        }else{
            alert("Seleccion invalida");
            seleccion=1;
        }
    }
}

function numerosImpares(event){
    event.preventDefault();
    let numero = prompt("digite el numero inicial");
    let centinela = 0;
    let resultado = "";
    let evaluarImpar = 0;

    while (centinela != 5){
        evaluarImpar = numero % 2;
        if(evaluarImpar==1){
            resultado = resultado + "\n◆" + numero;
            centinela++;
            numero++;
        }else{
            numero++;
        }
    }
    alert(resultado);
}

function multiplicar(event){
    event.preventDefault();
    let numero = prompt("Ingrese el numero a multiplicar");
    let limite = prompt("Ingrese el limite de la multiplicacion");
    let resultado = "";
    for (let i = 1; i <=limite;i++){
        resultado = resultado + numero + " X " + i + " = " + (numero*i) + "\n";
    }
    alert(resultado);
}

function inventarioProductos(event){

    event.preventDefault();

    let inventario = [
        {nombre: "Televisor 4K", codigo: 1, cantidad: 10, precio: 1300000},
        {nombre: "Auriculares Bluetooth", codigo: 2, cantidad: 0, precio: 120000},
        {nombre: "Smartphone", codigo: 3, cantidad: 15, precio: 900000},
        {nombre: "Laptop", codigo: 4, cantidad: 5, precio: 1900000}
    ];

    let seleccion = 1;

    while (seleccion != 0){
        seleccion = prompt("Seleccione la opcion que desea realizar:\n\n1- Realizar Inventario\n2- Actualizar Cantidad Producto\n" + 
            "3- Agregar Producto\n4- Eliminar Producto\n0- Salir");
        //OPCION PARA HACER INVENTARIO
        if (seleccion==1){
            let mensaje = "";
            let resultado = "";

            inventario.forEach(function(inv){

                if (inv["cantidad"]==0){
                    resultado = "Producto Agotado";
                }else if(inv["cantidad"]<=5){
                    resultado = "Proximo a Agotarse";
                }else if(inv["cantidad"]>5){
                    resultado = "En Stock";
                }

                mensaje = mensaje + "Producto: " + inv["nombre"] + "\nCantidad: " + inv["cantidad"] + " =====> " + resultado + "\n\n";
            });

            alert("INVENTARIO:\n\n" + mensaje);

        //OPCION ACTUALIZAR CANTIDAD PRODUCTO
        }else if(seleccion==2){

            let mensaje = "Ingrese el codigo del producto a actualizar:\n\n";

            inventario.forEach(function(inv){
                mensaje = mensaje + "Codigo: " + inv["codigo"] + " - Producto: " + inv["nombre"] + "\n";
            });

            let productoActualizar = prompt(mensaje);
            let codigoInvalido = 0;
            
            inventario.forEach(function(inv){
                if (inv["codigo"]==productoActualizar){
                    inv["cantidad"]=prompt("Ingrese la nueva cantidad de: " + (inv["nombre"].toUpperCase()));
                    alert("CANTIDAD ACTUALIZADA!");
                    codigoInvalido=1;
                }
            });
            if (codigoInvalido==0){
                alert("Codigo Invalido");
            }
        }else if(seleccion==3){

            let nuevoNombre = prompt("Ingrese el nombre del nuevo producto");
            let nuevaCantidad = prompt("Ingrese la cantidad en stock del " + nuevoNombre.toUpperCase());
            let nuevoPrecio = prompt("ingrese el precio del " + nuevoNombre.toUpperCase());
            let nuevoCodigo = 0;

            //GUARDAR CODIGO MAYOR
            inventario.forEach(function(inv){
                if(inv["codigo"]>nuevoCodigo){
                    nuevoCodigo = inv["codigo"];
                }
            });

            inventario.push({nombre: nuevoNombre, codigo: (nuevoCodigo + 1), cantidad: nuevaCantidad, precio: nuevoPrecio});
            alert("Producto:\n\nCodigo: " + (nuevoCodigo + 1) + "\nNombre: " + nuevoNombre + "\nCantidad: " + nuevaCantidad + "\nPrecio: " + 
                nuevoPrecio + "\n\n¡AGREGADO CON EXITO!");
        }else if (seleccion==4){

            let codigoEliminar = 0;
            let mensaje = "Por favor, digite el codigo del producto que desea eliminar:\n\n";

            inventario.forEach(function(inv){
                mensaje = mensaje + inv["codigo"] + " - " + inv["nombre"] + "\n";
            });
            codigoEliminar = prompt(mensaje);
            let indiceEliminar = 0;
            let centinela = 0;

            inventario.forEach(function(inv){
                if (centinela == 0){
                    if (inv["codigo"] != codigoEliminar){
                        indiceEliminar=indiceEliminar+1;
                    }else{
                        centinela = 1;
                    }
                }
            });
            
            if (centinela == 1){
                inventario.splice(indiceEliminar, 1);
                alert("¡PRODUCTO ELIMINADO CON EXITO!");
            }else{
                alert("Codigo de producto no existe");
            }

        }
        
    }
}

//FUNCION CALCULADORA
function operacion(num1, operador, num2){
    function sumar(){
        alert("Resultado \n" + (num1 + num2));
    }
    function restar(){
        alert("Resultado \n" + (num1 - num2));
    }
    function multiplicar(){
        alert("Resultado \n" + (num1 * num2));
    }
    function dividir(){
        alert("Resultado \n" + (num1 / num2));
    }

    if(operador=="+"){
        sumar(num1, operador, num2);
    }else if (operador=="-"){
        restar(num1, operador, num2);
    }else if (operador=="*"){
        multiplicar(num1, operador, num2);
    }else if (operador=="/"){
        dividir(num1, operador, num2);
    }else{
        alert("Operador no reconocido");
    }
}

//FUNCION CONTAR Y SUMAR PARES
function contarPares(limite){

    let numero = 1;
    let contador = 0;
    let suma = 0;
    let mensaje = "";

    while(numero <= limite){
        if((numero % 2)==0){
            contador = contador + 1;
            suma = suma + numero;
            mensaje = mensaje + numero + " + ";
        }
        numero = numero + 1;
    }

    mensaje = mensaje.slice(0,-2);
    mensaje = mensaje + " = " + suma;
    let resultado = [contador, mensaje];
    
    return resultado;
}

//VALIDAR SI ES NUMERO PRIMO
function numeroPrimo(numero){
    centinela = 0;
    resultado = "";
    for(let i=2;i<numero;i++){
        if((numero % i)==0){
            centinela = 1;
        }
    }
    if (centinela == 1){
        alert(numero + " no es un numero primo");
    }else{
        alert(resultado = numero + " es un numero primo");
    }
}

//VALOR MAYOR EN UN ARREGLO
function mayorArreglo(){
    let arreglo = [3,55,94,44,67];
    let numeroMayor = 0;
    arreglo.forEach(function (numero){
        if (numeroMayor<numero){
            numeroMayor=numero;
        }
    });
    alert("El mayor es: " + numeroMayor);
}

function ejecutarFunciones(event){

    event.preventDefault();

    let seleccion = 1;

    while(seleccion != 0){

        seleccion = prompt("Ingrese el ejercicio a realizar:\n\n1- Calculadora\n2- Contar y sumar pares\n3- Verificar si es primo\n4- Encontrar el mas grande\n5- Verificar numero en arreglo\n\n0- Salir");
       
        if(seleccion==1){
            let numero1 = parseInt(prompt("Ingrese el primer numero"));
            let operador = prompt("Ingrese el operador\n\n+ - * /");
            let numero2 = parseInt(prompt("Ingrese el segundo numero"));

            operacion(numero1, operador, numero2);

        }else if(seleccion==2){

            let resultado;
            let limite = prompt("Ingrese un numero limite");

            resultado = contarPares(limite);

            alert("Hay: " + resultado[0] + " numeros pares y la suma es: \n\n" + resultado[1]);

        }else if(seleccion==3){

            let numero = prompt("Ingrese el numero");
            numeroPrimo(numero);

        }else if(seleccion==4){
            mayorArreglo();
        }
    }
}


