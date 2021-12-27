"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let personaUno = new Persona('Juan');
console.log(personaUno.getNombre());
console.log(Persona.metodoEstatico());
