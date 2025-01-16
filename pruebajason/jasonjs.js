function limpiarTabla(event){
    
    event.preventDefault();

    const odatos = document.getElementsByClassName("tr");
    for(let i = 0; i < odatos.length;i++){
        odatos[i].remove();
    }
}

function consultarJason(event){

    event.preventDefault();

    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos=>{

        const odatos = document.getElementById("datos");
        let texto = document.getElementById("textoBuscar").value;
        let encontroDato = 0;
        let contador = 0;

        datos.forEach(element => {
            
            const obtener = document.createElement("tr");
            obtener.setAttribute("class","tr");
            if(element.name.includes(texto)){

                contador++;

                

                obtener.innerHTML = `<td class ='tr' id='td'>` + contador + "- " +  `${element.name}</td>`;
                encontroDato = 1;
                

            }
            
            if(encontroDato==1){
                odatos.appendChild(obtener);
                encontroDato = 0;
            }

        });

        const obtener = document.createElement("tr");
        obtener.setAttribute("class","tr")
        obtener.innerHTML = `<td class='tr' id='td'>Hay ` + contador + ` Datos con el input</td>`
        odatos.appendChild(obtener);
    })
    .catch(error => {
        console.log("Error al cargar los datos");
    })

}