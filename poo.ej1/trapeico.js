export default class Trapecio {

    constructor(b1,b2,a){
        this.base1 = b1 
        this.base2 = b2 
        this.altura = a
    }

    calcular (){
       const operacion = ( Number(this.base1) + Number(this.base2) )*this.altura
       return operacion
    }
}