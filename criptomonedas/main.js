const consumir = async () => {
    const recibir = await fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

    const datos = await recibir.json()

    let criptomonedas = []
    datos.forEach(element => {
         let fila = `<tr>
                        <td>
                            <img class="img-fluid" src="${element.image}"></img>
                        </td>
                        <td>${element.name}</td>
                        <td>${element.symbol}</td>
                        <td>${element.current_price}</td>
                        <td>${element.price_change_percentage_24h}</td>
                        <td>${element.total_volume}</td>
                    </tr>`
        criptomonedas.push(fila)
    });
    document.getElementById("tbl_body").innerHTML = criptomonedas.join('')
}

consumir ()