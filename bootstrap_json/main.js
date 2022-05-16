const consumir_api = async () => {

    // buscar
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const usuarios_definidos = await usuarios.json()

    let elementos_li = []
    usuarios_definidos.forEach(element => {
        // console.log(element.name)
         let li = `<li class="list-group-item">${element.name}</li>`

         elementos_li.push(li)
        
    });

    document.getElementById("lista-prueba").innerHTML = elementos_li.join('');
}

// invocamos la funcion
consumir_api()


