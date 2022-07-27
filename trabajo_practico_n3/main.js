import Hamburguesa from "./hamburguesa.js";

function guardar ()
{
    let imagen = document.getElementById("inp_imagen").value
    let descripcion = document.getElementById("inp_descripcion").value
    let precio = document.getElementById("inp_precio").value
    let detalle = document.getElementById("inp_detalle").value

    let cliente = new Hamburguesa(imagen,descripcion,precio,detalle)
    cliente.guardar_archivo()
}
document.getElementById("btn-guardar").addEventListener("click",guardar)

function listar()
{
    let cliente = new Hamburguesa
    cliente.obtener_cliente()
}
listar()

function eliminar() 
{ 
    let indice = localStorage.getItem("indice")
    let cliente = new Hamburguesa()
    cliente.eliminar_cliente(indice)
}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)

function actualizar ()
{
   let index = localStorage.getItem("indice_update")
    let cliente = new Hamburguesa()
    cliente.actualizar_cliente(index)
}
document.getElementById("btn_actualizar").addEventListener("click",actualizar)