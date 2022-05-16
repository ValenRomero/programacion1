const consumir_datos = async () => {
    const datos_recibidos = await fetch('https://jsonplaceholder.typicode.com/users')

    const datos = await datos_recibidos.json()
    
    let lista_usuarios = []
    datos.forEach(usuario => {
        let fila = `<tr>
                     <td>${usuario.name}</td>
                     <td>${usuario.email}</td>
                     <td>${usuario.website}</td>
                     </tr>` 
      lista_usuarios.push(fila)  
    });
    document.getElementById("tbl_body").innerHTML = lista_usuarios.join('')
}
// invocar o ejecutar a la funcion flecha consumir_datos()
consumir_datos ()