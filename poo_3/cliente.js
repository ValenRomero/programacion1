export default class Cliente {
    constructor(nom,ape,dni){
        this.nombre = nom
        this.apellido = ape
        this.dni = dni
    }

    guardar_cliente(){

        let nuevo_cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni 
        }

        if("listado_cliente" in localStorage){
         let lista_clientes = JSON.parse(localStorage.getItem("listado_cliente"))
         lista_clientes.push(nuevo_cliente)
         localStorage.setItem("listado_cliente", JSON.stringify(lista_clientes))

        }else {
           
            let lista_clientes = []
            lista_clientes.push(nuevo_cliente)

            // crear el sector de almacenamiento 
            localStorage.setItem("listado_cliente", JSON.stringify(lista_clientes))
        }

        this.obtener_cliente()

    }

    obtener_cliente(){
        let listado_clientes = JSON.parse(localStorage.getItem("listado_cliente"))

        let filas = []
        listado_clientes.forEach(element,index => {
            let fila = `
                     <tr>
                     <td>${element.nombre}</td>
                     <td>${element.apellido}</td>
                     <td>${element.dni}</td>
                     <td>
                        <button onclick="eliminar_cliente(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></butto>
                    </td>
                     </tr>`
                     
            filas.push(fila)

        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_cliente(index){
        let lista_clientes = json.parse(localStorage.getItem("listado_cliente"))
        lista_clientes.splice(index,1)

        localStorage.setItem("listado_cliente", JSON.stringify(lista_clientes))

        this.obtener_cliente()
    }
}
