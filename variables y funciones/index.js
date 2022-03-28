// funcion clasica
function mostrar(){
     
//  form 1
// const nombres = document.querySelector("#inp_nombres").value
// form 2
const nombres = document.getElementById("inp_nombres").value
// sin template string
// const mensaje = 'Nombre y Apellido: '+ nombres
const mensaje = `Nombre y Apellido : ${nombres}`

alert(mensaje)
}

function mifuncion_con_retorno()
{
    const ejemplo = 'probando funcion con retorno'
    // rotorna una respuesta
    return ejemplo
}

function mostrar_respuesta()
{
    // acabo de ejecutar la funcion
    const respuesta = mifuncion_con_retorno()
    alert(resouesta)
}

