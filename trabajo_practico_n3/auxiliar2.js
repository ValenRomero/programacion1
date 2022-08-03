
 function finalizar() {
    if ("seguimiento" in localStorage) {
        let finalizar_pedidos = JSON.parse(localStorage.getItem("seguimiento"))

        let filas = []
        finalizar_pedidos.forEach((element, index) => {
            let fila = `
            <tr> 
                <td>${element.cliente}</td>
                <td>${element.fecha}</td>
                <td>${element.estado}</td> 
            </tr>`

            filas.push(fila)

        });
        document.getElementById("pedido_final").innerHTML = filas.join('')
    }else{
        document.getElementById("pedido_final").innerHTML = null

    }
   
}     
finalizar()

function eliminar_cliente(index) {
    let eliminar= JSON.parse(localStorage.getItem("seguimiento"))
    eliminar.splice(index, 1)

    localStorage.setItem("seguimiento", JSON.stringify(eliminar))
    this.finalizar()
}
