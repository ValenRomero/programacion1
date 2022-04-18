function mostrar_celcius()
{
    const celcius = document.getElementById("inp_celcius").value
    const fahrenheit = ( celcius * 1.8) + 32
    
    return fahrenheit
}

function fahrenheit ()
{
    const resultado = mostrar_celcius ()
    alert(resultado)


}

