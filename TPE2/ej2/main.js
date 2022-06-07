let criptomondeas = ['Bitcoin', 'Ethereum', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana']


// agregar un elemnto al principio de un array
let nuevaLongitud = criptomondeas.unshift('Stellar')

// eliminar un elemento segun su posicion
let elementoEliminado = criptomondeas.splice(7,8)

// añade un elemento al final del arreglo
let nuevaLongitudfinal = criptomondeas.push('Gate') 

function arreglo ()
{
    // acceder a la longitud de un arreglo
    let longitud = console.log(criptomondeas.length)
    document.getElementById("p_1").textContent = longitud

    // ultimo elemento de un arreglo
    let ultimo = criptomondeas[criptomondeas.length - 1]
    document.getElementById("p_2").textContent = ultimo

    // acceder a un elemento segun su posicion
    let primero = criptomondeas[6]
    document.getElementById("p_3").textContent = primero
}
document.getElementById("btn_acceder").addEventListener("click", arreglo)

function recorrer ()
{
    let recorrer_elementos = []
    criptomondeas.forEach(function(elemento, indice,) {
        let filas = 
                `<li class="list-group-item">
                ${elemento}
                ${indice}
                </li>`

            recorrer_elementos.push(filas) 
    })
    document.getElementById("tbody").innerHTML = recorrer_elementos.join('')
   
}
document.getElementById("btn_Mostrar").addEventListener("click", recorrer)

