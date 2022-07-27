function almacenar_indice(index)
{

    localStorage.setItem("indice",index)

}

function editar (index)
{
    let menu_principal = JSON.parse(localStorage.getItem("menu"))
    
    document.getElementById("inp_descripcion").value = menu_principal[index].descirpcion
    document.getElementById("inp_precio").value = menu_principal[index].precio
    document.getElementById("inp_imagen").value = menu_principal[index].imagen
    document.getElementById("inp_detalle").value = menu_principal[index].detalle

    localStorage.setItem("indice_update",index)

    document.getElementById("btn-guardar").style.display = "none"
    document.getElementById("btn_actualizar").style.display = "block"

}