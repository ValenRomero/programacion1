// crear un array
let marcas = ["Ford","Renault","Volswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

// mostrar longitud de un arreglo
console.log(`
    marcas.length = ${marcas.length}
`)
// acceso a un arreglo mediante su indice

// accedar al ultimo elemento 
let ultima_marca = marcas[marcas.length-2]
console.log(`
    ultima marca: ${ultima_marca}
`)

// recorrer un arreglo haciendo uso de foreach 
marcas.forEach((element,index) => {
    console.log(`
        ${index} -${element}
    `)
    
});

// como agregar un elemento al final de un arreglo
marcas.push("ferrari")
console.log(marcas)

// como el ultimo de un arreglo
marcas.pop()
console.log(marcas)

// como agregar un elemento al inicio de un arreglo
marcas.unshift("bmw")
console.log(marcas)

// como eliminar el primer elemento de un array 
marcas.shift()
console.log(marcas)

// commo encontrar los indices de un elemento de un array 
let indice = marcas.indexOf("Seat")
console.log(`
    posicion del elemento Seat = ${indice}
`)

// eliminar un elemento segun su indice 
marcas.splice(indice,1)
console.log(marcas)

// eliminar varios elementos de un arreglo
marcas.splice(0,2)
console.log(marcas)

// copiar un arreglo
marcas.push("audi")
let copia = marcas.slice()
copia.push("nissan")

console.log(copia)
console.log(marcas)