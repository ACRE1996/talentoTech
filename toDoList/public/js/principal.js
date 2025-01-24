document.getElementById("formAgregarTarea").addEventListener("submit", (event) => {
    event.preventDefault()

    let nombreTarea = document.getElementById("nombreTarea").value
    let  descripcionTarea = document.getElementById("descripcionTarea").value
    let  fechaOpcionalTarea = document.getElementById("fechaOpcionalTarea").checked
    let  fechaLimiteTarea = document.getElementById("fechaLimiteTarea").value


    const res = fetch("/agregarTarea", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombreTarea: nombreTarea,
            descripcion: descripcionTarea,
            fechaOpcional: fechaOpcionalTarea,
            fechaLimite: fechaLimiteTarea
        })
    })
})