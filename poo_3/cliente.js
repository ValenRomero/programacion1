export default class Cliente 
{
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
        this.vaciar_formulario()

    }

    obtener_cliente(){
        let listado_clientes = JSON.parse(localStorage.getItem("listado_cliente"))

        let filas = []
        listado_clientes.forEach( (element,index) => {
            let fila = `
                     <tr>
                     <td>${element.nombre}</td>
                     <td>${element.apellido}</td>
                     <td>${element.dni}</td>
                     <td>
                        <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></butto>
                        <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></butto>
                    </td>
                     </tr>`
                     
            filas.push(fila)

        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_cliente(index){
        let lista_clientes = JSON.parse(localStorage.getItem("listado_cliente"))
        lista_clientes.splice(index,1)

        localStorage.setItem("listado_cliente", JSON.stringify(lista_clientes))

        this.obtener_cliente()
    }

    actualizar_cliente(index){
      let listado_clientes = JSON.parse(localStorage.getItem("listado_cliente"))

      listado_clientes[index].nombre = document.getElementById("inp_nombre").value
      listado_clientes[index].apellido = document.getElementById("inp_apellido").value
      listado_clientes[index].dni = document.getElementById("inp_dni").value

      localStorage.setItem("listado_cliente",JSON.stringify(listado_clientes))

      this.obtener_cliente()

      document.getElementById("btn-guardar").style.display = "block"
      document.getElementById("btn_actualizar").style.display ="none"
      this.vaciar_formulario()
    }

    vaciar_formulario ()
    {
        document.getElementById("form_cliente").reset()
    }
}
