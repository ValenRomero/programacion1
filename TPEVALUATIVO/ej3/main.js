function Convertir  (a,b)
 { 
   const dentro_raiz = Math.pow(a,2)+Math.pow(b,2)
   const resultado = Math.sqrt(dentro_raiz)
   return resultado
}


function recoger_datos ()
 {
    const a = document.getElementById ('inp_a').value
    const b = document.getElementById ('inp_b').value
    const respuesta = Convertir(a,b)

    document.getElementById("h_respuesta").textContent = respuesta
    
}
const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click",recoger_datos)