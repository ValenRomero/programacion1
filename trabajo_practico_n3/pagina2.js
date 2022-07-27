export default class pagina2 
{
    constructor()
    {

    }

    obtener_producto (){
 
        if ("menu" in localStorage) {
            let menu_principal = JSON.parse(localStorage.getItem("menu"))

            let filas = []
            menu_principal.forEach((element,index) => {
                let fila = `
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
                         
                filas.push(fila)
    
            });
            document.getElementById("tbody").innerHTML = filas.join('')
        }
     } }