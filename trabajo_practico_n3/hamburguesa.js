export default class Hamburguesa
{
    constructor(img,des,pre,det)
    {

        this.imagen = img
        this.descripcion = des
        this.precio = pre
        this.detalle = det
    }

    guardar_archivo(){

        let nuevo_archivo = {
            descripcion: this.descripcion,
            precio: this.precio,
            imagen: this.imagen,
            detalle: this.detalle
        }

        if("menu" in localStorage){
            let menu_principal = JSON.parse(localStorage.getItem("menu"))
            menu_principal.push(nuevo_archivo)
            localStorage.setItem("menu", JSON.stringify(menu_principal))
   
           }else {
              
               let menu_principal= []
               menu_principal.push(nuevo_archivo)

   
               // crear el sector de almacenamiento 
               localStorage.setItem("menu", JSON.stringify(menu_principal))
           }
   
           this.obtener_cliente()
          
    }

    obtener_cliente(){

        if ("menu" in localStorage) {
            let menu_principal = JSON.parse(localStorage.getItem("menu"))

            let filas = []
            menu_principal.forEach((element,index) => {
                let fila = `
                         <tr>
                         <td>${index}</td>
                         <td>
                             <img style="width: 3rem" class="img-fluid" src="${element.imagen}"></img>
                         </td>
                         <td>${element.descripcion}</td>
                         <td>${element.precio}</td>
                         <td>
                            <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></butto>
                            <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></butto>
                            </td>
                         </tr>`
                         
                filas.push(fila)
    
            });
            document.getElementById("tbody").innerHTML = filas.join('')
        }

    }
    eliminar_cliente(index){
        let menu_principal = JSON.parse(localStorage.getItem("menu"))
        menu_principal.splice(index,1)

        localStorage.setItem("menu", JSON.stringify(menu_principal))

        this.obtener_cliente()
    }

    actualizar_cliente(index){
        let menu_principal = JSON.parse(localStorage.getItem("menu"))

        document.getElementById("inp_descripcion").value = menu_principal[index].descirpcion
        document.getElementById("inp_precio").value = menu_principal[index].precio
        document.getElementById("inp_imagen").value = menu_principal[index].imagen
        document.getElementById("inp_detalle").value = menu_principal[index].detalle
  
        localStorage.setItem("menu",JSON.stringify(menu_principal))
  
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