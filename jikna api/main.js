async function obtener_datos()
{
    const datos = await fetch ('https://api.jikan.moe/v4/anime?q=naruto&sfw')

    const datos_definitivos = await datos.json()

  
    const datos_definitivos2 = datos_definitivos.data

    let totales_columna = []
    datos_definitivos2.forEach(element => {
        let columna =`
                <div class="col-lg-4>
                  <div class="card" style="width: 18rem;">
                    <img src="${element.images.jpg.large_image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>`
       totales_columna.push(columna) 
    });
    document.getElementById("tbl_row").innerHTML = totales_columna.join('')
}
obtener_datos()