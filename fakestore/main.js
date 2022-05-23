async function obtener_datos () 
{
    const datos = await fetch ('https://fakestoreapi.com/products/category/electronics')
    const datos_definitivos = await datos.json()

    let totales_columna = []
    datos_definitivos.forEach(element => {
        let columna = `
            <div class="col>
                <div class="card" style="width: 18rem;">
                    <img style="height:200px" src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text">${element.title}</p>
                    <p>${element.price}</p>
                </div>
             </div>  
            </div>`
             totales_columna.push(columna) 
            });
     document.getElementById("tbl_row").innerHTML = totales_columna.join('')
}
obtener_datos()