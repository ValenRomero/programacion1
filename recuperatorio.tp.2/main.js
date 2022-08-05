async function obtener_datos() {
    const datos = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dato_final = await datos.json()
  
    let columnas_totales = []
    dato_final.forEach(element => {
      let columnas = `
                        <tr>
                        <td>${element.casa.nombre}</td>
                        <td>${element.casa.compra}</td>
                        <td>${element.casa.venta}</td>
                        </tr>`
        
  
      columnas_totales.push(columnas)
    });
    document.getElementById("tbody").innerHTML = columnas_totales.join('')
  }
  obtener_datos()