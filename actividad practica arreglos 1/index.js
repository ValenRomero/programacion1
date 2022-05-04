let lenguaje = ["Python", "JavaScript", "Csharp", "C++" , "Java" , "PHP" , "Ruby"]

function imprimir () {
   
    console.log(`
    lenguaje.length = ${lenguaje.length} //7 
    `)

    let ultimo_elemento = lenguaje[lenguaje.length-1]
    console.log(`
    ultimo elemento: $ {ultimo_elemento}
    `)

    let tercer_elemento = lenguaje[2]
    console.log(`
    tercer elemento ${tercer_elemento}
    `)

}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", imprimir)



function recorrer_arreglo () {
    lenguaje.forEach( (element, index) => {
        console.log(`
            ${index} -${element}
        `)
    });
}
const buton = document.getElementById("btn_calcular")
buton.addEventListener("click", recorrer_arreglo)


lenguaje.push("Go")
console.log(lenguaje)

lenguaje.shift()
console.log(lenguaje)

lenguaje.unshift("Kotlin")
console.log(lenguaje)

lenguaje.splice(4,5)
console.log(lenguaje)

console.log(lenguaje)



