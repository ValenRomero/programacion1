function almacenar_indice(index) {

    localStorage.setItem("indice", index)

}

function editar(index) {
    let menu_principal = JSON.parse(localStorage.getItem("menu"))

    document.getElementById("inp_descripcion").value = menu_principal[index].descripcion
    document.getElementById("inp_precio").value = menu_principal[index].precio
    document.getElementById("inp_imagen").value = menu_principal[index].imagen
    document.getElementById("inp_detalle").value = menu_principal[index].detalle

    localStorage.setItem("indice_update", index)

    document.getElementById("btn-guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"

}

function agregar(d, p) {
    let pedido_seleccionado = {
        descripcion: d,
        precio: p,
        numero: 1
    }

    if ("pedidos" in localStorage) {
        let pedidos_principal = JSON.parse(localStorage.getItem("pedidos"))
        pedidos_principal.push(pedido_seleccionado)
        localStorage.setItem("pedidos", JSON.stringify(pedidos_principal))

    } else {

        let pedidos_principal = []
        pedidos_principal.push(pedido_seleccionado)


        // crear el sector de almacenamiento 
        localStorage.setItem("pedidos", JSON.stringify(pedidos_principal))
    }
    crear_tablita()
}

function crear_tablita() {
    if ("pedidos" in localStorage) {
        let pedidos_principal = JSON.parse(localStorage.getItem("pedidos"))

        let filas = []
        pedidos_principal.forEach((element, index) => {
            let fila = `
            <tr> 
                <td>${element.descripcion}</td>
                <td>${element.numero}</td>
                <td>${element.precio}</td> 
            </tr>`

            filas.push(fila)

        });
        document.getElementById("tablita").innerHTML = filas.join('')
    }
}
