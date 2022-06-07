const mostrar = () =>
{
    const framework = {
        titulo :'framework utilizado en la actualidad ',
        nombre: 'angular',
        caracteristicas:{
            lenguaje:'typescript',
            patron: 'mvvm',
            spa:'si',
        },
    }

const estructura = framework
console.log(estructura)

const { titulo, nombre} = framework
console.log(titulo)
console.log(nombre)


const hacer = framework
console.log(hacer)

const {lenguaje, patron, spa} = framework.caracteristicas
console.log(lenguaje)
console.log(patron)
console.log(spa)

}

document.getElementById("btn_mostrar").addEventListener("click", mostrar)

