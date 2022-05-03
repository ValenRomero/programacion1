function calcular () {
    const autos = document.getElementById ("inp_auto").value

        // si autos es igual a ford ka
    if (autos == 'ford Ka'){
        // tiene un descuento de 5%
       const ka = (1750000-(1750000*15)/100)
        // si no si autos es igual a ford fiesta 
        document.getElementById("h1_resultado").textContent = ka
    }else{ 
        if(autos == 'ford fiesta'){
              // tiene un descuento de 10%
            const fiesta =  (1950000-(1950000*5)/100)
            // y si no si auto es igual ford focus 
            document.getElementById("h1_resultado").textContent = fiesta
        }else{
         
            const focus = (2560000-(2560000*10)/100)
            document.getElementById("h1_resultado").textContent = focus
         
        }
    }
    
      
}
  