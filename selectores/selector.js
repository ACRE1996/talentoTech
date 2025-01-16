const modificar = document.getElementById("titulo");
const cambiar = document.getElementById("botonCambiar");
const retornar = document.getElementById("botonRetornar");

cambiar.addEventListener('click', ()=>{
    modificar.textContent = "Nombre que quiera";
});

retornar.addEventListener('click', ()=>{
    modificar.textContent = "Texto a modificar";
});

const color = document.getElementsByClassName("color");
const boton = document.getElementById("cambiarColor");

boton.addEventListener('click', ()=>{
    for(let i = 0; i<color.length;i++){
        color[i].style.color = "yellow";
    }
    
});

const informacion = document.getElementById("contenedor");
const botonInner = document.getElementById("cambiarInner");

botonInner.addEventListener('click', ()=>{
    informacion.innerHTML = `<h2>Nuevo texto</h2>
    <p>Este es un parrafo insertado a traves de un INNER</p>`;
});