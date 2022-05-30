export default class Triangulo {

    constructor(b,a){
        this.base = b 
        this.altura = a 
    }

    calcular (){

       const operacion = (this.base*this.altura)/2

       return operacion
    }
}