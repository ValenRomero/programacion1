import Peliculas from "./peliculas.js";

function mostrar(){
    const peliculas = new Peliculas()
    peliculas.obtener_datos()
}
mostrar()