async function obtener_datos() {
  const datos = await fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );
  const dato_final = await datos.json();

  let totales_columnas = [];
  dato_final.forEach((element) => {
    let columnas = `
        <div class="col-lg-3">
         <div class="card" >
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${element.casa.nombre}</li>
            <li class="list-group-item">${element.casa.compra}</li>
             <li class="list-group-item">${element.casa.venta}</li>
            </ul>
          </div> 
        </div>`;

    totales_columnas.push(columnas);
  });
  document.getElementById("tbl_row").innerHTML = totales_columnas.join("");
}
obtener_datos();
