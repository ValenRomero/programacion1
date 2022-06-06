let consolas = ['PlayStation', 'xbox', 'nintendo game cube', 'sega dreamcast', 'game boy advance', 'pokemons mini ']

consolas.push("Nintendo 64")
console.log(consolas)

consolas.splice(4, 2)
console.log(consolas)

const mostrar = () => {
    console.log()
    let longitud = consolas.length
    document.getElementById("h_consolas1").textContent = longitud


    let ultimo_elemento = consolas[consolas.length - 1]
    document.getElementById("h_consolas2").textContent = ultimo_elemento



    let cuarto_elemento = consolas[4]
    document.getElementById("h_consolas3").textContent = cuarto_elemento
}
document.getElementById("btn_mostrar").addEventListener("click", mostrar)

const recorrer = () => {
    let recorrer_elementos = []
    consolas.forEach( (element, index) => {
        let fila = `<tr>
                    <td> ${index}</td>
                    <td> ${element}</td>
                    </tr>` 

        recorrer_elementos.push(fila)
    });

    document.getElementById("tbody").innerHTML = recorrer_elementos.join('')
}

document.getElementById("btn_Mostrar").addEventListener("click", recorrer)



