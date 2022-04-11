const calcular_raices = (A,B,C) => {
   
    const dentro_raiz = Math.pow(B,2) - (4*A*C)
    const raiz_cuadrada = Math.sqrt(dentro_raiz)

    const raiz1 = (-B + raiz_cuadrada) / (2*A)
    const raiz2 =  (-B - raiz_cuadrada) / (2*A)

    return 'raiz 1= '+ raiz1 + ' raiz 2 = ' + raiz2

}

const mostrar = () => {
    
    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value
    const c = document.getElementById("inp_c").value

    const resultado2 = calcular_raices(a,b,c)

    document.getElementById("h_raices").textContent = resultado2

}

const boton = document.getElementById("btn_calcular")
boton.addEventListener("click", mostrar)