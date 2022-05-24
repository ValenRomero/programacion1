export default class Vehiculo {
    // variable=atributo
    marca;
    km;

    constructor (m,k){
        this.marca = m
        this.km = k
    }
    // function=metodo
    mostrar_datos_vehiculo(){
        this.km = 22500;
        this.marca = 'volkswagen'

        console.log(`
            Kilometraje: ${this.km}
            Marca: ${this.marca}
        `)

    }

}