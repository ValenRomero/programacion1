import Persona from './persona.js';

function mostrar() {
    const nom = document.getElementById("inp_nombre").value
    const ape = document.getElementById("inp_apellido").value
    const dni = document.getElementById("inp_dni").value

    const persona = new Persona()
    persona.nombre = nom
    persona.apellido = ape
    persona.dni = dni

   persona.mostrar_datos_personales()
}
document.getElementById("btn-mostrar").addEventListener("click",mostrar)