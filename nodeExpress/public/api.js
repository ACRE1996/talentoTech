const productosDiv = document.getElementById("productosDiv");

let url = "https://fakestoreapi.com/products/";

const obtener = document.createElement("div");
let tabla = "";

fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {

        tabla = `<table border=1px width=100%><thead><tr><th></th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Añadir</th>
                </tr></thead>
                <tbody>`;

        datos.forEach(element => {

            tabla += `<tr>
                    <td><img height=100px width=100px src="${element.image}"></td>
                    <td>${element.title}</td>
                    <td style="text-align:center">${element.rating.count}</td>
                    <td style="text-align:center"><b>$${element.price}</b></td>
                    <td><button onclick="agregarCarrito('${element.id}', ${element.price})">Agregar al carrito</button></td>
                </tr>`;
        });

        tabla += `</tbody></table>`;
        obtener.innerHTML = tabla;

        productosDiv.appendChild(obtener);

    });

function agregarCarrito(id, price) {
    const carritoDiv = document.getElementById("datos");

    let url = "https://fakestoreapi.com/products/";

    const obtener = document.createElement("div");
    let tabla = "";

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {

            datos.forEach(element => {

                if (element.id == id) {

                    tabla += `<table class="tablaProductos" style="border-collapse: collapse;">
                        <tr>
                        <td style="width:50%"><img style="width:90px; height:50px;" src="${element.image}"></td>
                        <td style="text-align:right;width:10%"><b style="font-size:20px">$${element.price}</b></td>
                        </tr>
                        <tr><td colspan="2">${element.title}</td></tr>
                        <tr style="border-bottom: 1px solid black;">
                            <td><br>Cantidad: <input type="number" class="cantidad" data-precio="${element.price}" placeholder="Cantidad" min="1"></td>
                        </tr>
                    </table>`;
                }

            });

            obtener.innerHTML = tabla;

            carritoDiv.appendChild(obtener);
        });
}

// Event delegation para manejar inputs dinámicos
document.addEventListener("input", (event) => {
    if (event.target.classList.contains("cantidad")) {
        sumar();
    }
});


function sumar() {
    const totalSuma = document.getElementById("totalSuma");
    const cantidades = document.querySelectorAll(".cantidad");
    let suma = 0;

    cantidades.forEach(dataPrecio => {
        const cantidad = dataPrecio.value;
        const precio = parseFloat(dataPrecio.getAttribute("data-precio"));
        suma += cantidad * precio;
    });

    totalSuma.textContent = `$${suma}`; // Mostrar el total formateado
}
