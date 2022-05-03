const retorne = (temp) => {

    let temperatura = null 

    if (temp >= 14 && temp < 32 ){
        temperatura = "Temperatura Baja"
        document.getElementById ("h_mostrar").value = temperatura
    }
    else {
        if (temp >= 32 && temp < 68){
            temperatura = "Temperatura adecuada"
            document.getElementById ("h_mostrar").value = temperatura

        } else {
            if (temp > 68 && temp <= 96){
                temperatura = "Temperatura alta"
                document.getElementById ("h_mostrar").value = temperatura

            } else{
                temperatura = "Temperatura desconocida"
                document.getElementById ("h_mostrar").value = temperatura
            }
        }
    }
    return temperatura

}


const recolectar = () => {
    const temperatura = document.getElementById ("inp_temperatura").value
    const respuesta = retorne (temperatura)
    alert (respuesta)
    
}


