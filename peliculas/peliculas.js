export default class Peliculas {

    constructor() {

    }

     async obtener_datos() {
        const datos = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=star%20war')

        const datos_definitivos = await datos.json()


        const datos_definitivos2 = datos_definitivos.Search

        let totales_columna = []
        datos_definitivos2.forEach(element => {
            let columna = `
                <div class="col-lg-4">
                  <div class="card shadow">
                    <img src="${element.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-Title">${element.Title}</h5>
                     <p class="card-text">${element.Year}.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>`
            totales_columna.push(columna)
        });
        document.getElementById("tbl_row").innerHTML = totales_columna.join('')
    }
}

