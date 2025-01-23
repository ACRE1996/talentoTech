document.getElementById("formulario-libros").addEventListener("submit", async (event)=>{
    event.preventDefault()
    
    const res = await fetch("/libros", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            titulo: event.target.titulo.value,
            anio: event.target.anio.value,
            autor: event.target.autor.value,
            paginado: event.target.paginado.value,
        })
    })
    
    const respuesta = await res.json();

    if (respuesta.status == 500){
        alert("no se pudo guardar")

    }else{
        alert("Guardado correctamente!!!!")
    }

})