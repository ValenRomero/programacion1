import Triangulo from "./triangulo.js";
import Rectangulo from "./rectangulo.js";
import Trapecio from "./trapeico.js";

const calcular_triangulo = ()  =>
{
    const b = document.getElementById("inp_base").value
    const a = document.getElementById("inp_altura").value
  
    const resultado = new Triangulo (b,a)
    const area_triangulo = resultado.calcular()
    document.getElementById("h_triangulo").textContent = area_triangulo
}

const calcular_rectangulo = ()  =>
{
    //rectangulo
    const largo = document.getElementById("inp_largo").value
    const ancho = document.getElementById("inp_ancho").value

    const respuesta_r = new Rectangulo (largo,ancho)
    const area_rectangulo = respuesta_r.calcular()
    document.getElementById("h_rectangulo").textContent = area_rectangulo

}

const calcular_trapecio = ()  =>
{
    //trapecio
    const base1 = document.getElementById("inp_b1").value
    const base2 = document.getElementById("inp_b2").value
    const altura = document.getElementById("inp_altura").value

    const respuesta = new Trapecio (base1,base2,altura)
    const area_trapecio = respuesta.calcular()
    document.getElementById("h_trapecio").textContent = area_trapecio

}




document.getElementById("btn-mostrar").addEventListener("click",calcular_triangulo)
document.getElementById("btn-calcular").addEventListener("click",calcular_rectangulo)
document.getElementById("btn-trapecio").addEventListener("click",calcular_trapecio)


