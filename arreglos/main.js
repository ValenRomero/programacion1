// crear un array
let helados = ["cereza","banana split","dulce de leche"]

// mostrar longitud de un arreglo
console.log(`
helados.length = ${helados.length} // 3
`)

// acceso a un arreglo mediante su indice

// accedar al ultimo elemento 
let ultimo_elemento = helados[helados.length-1]
console.log(`
    ultimo elemento: $ {ultimo_elemento}
`)

// recorrer un arreglo haciendo uso de foreach 
helados.forEach( (element, index) => {
    console.log(`
        ${index} -${element}
    `)
});

// como agregar un elemento al final de un arreglo
helados.push("Pistacho")
console.log(helados)

// como el ultimo de un arreglo
helados.pop()
console.log(helados)

// como agregar un elemento al inicio de un arreglo
helados.unshift("menta granizada")
console.log(helados)

// como eliminar el primer elemento de un array 
helados.shift()
console.log(helados)

// como encontrar los indices de un elemento de un array 
let indice = helados.indexOf("banana split")
console.log(`
    posicion del elemento banana split = ${indice}
`)

// eliminar un elemento segun su indice 
helados.splice(indice,1)
console.log(helados)

// eliminar varios elementos de un arreglo
helados.splice(0,2)
console.log(helados)

// copiar un arreglo
helados.push("marroc")
let copia = helados.slice()
copia.push("chocolate")

console.log(copia)
console.log(helados)