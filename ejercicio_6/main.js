let marcas = ["Ford","Renault","Volswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

console.log(`
    marcas.length = ${marcas.length}
`)

let ultima_marca = marcas[marcas.length-2]
console.log(`
    ultima marca: ${ultima_marca}
`)

array.forEach((element,index) => {
    console.log(`
        ${index} -${element}
    `)
    
});

marcas.push("ferrari")
console.log(marcas)

marcas.pop()
console.log(marcas)

marcas.unshift("bmw")
console.log(marcas)

marcas.shift()
console.log(marcas)

let indice = marcas.indexOf("Seat")
console.log(`
    posicion del elemento Seat = ${indice}
`)