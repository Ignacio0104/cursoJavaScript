class Persona{
    private nombre:string //Al poner private, no se puede acceder desde afuera
    constructor(nombre:string)
    {
        this.nombre=nombre;
    }

    getNombre ():string
    {
        return this.nombre;
    }

    static metodoEstatico():number{
        return 10;
    }
}

let personaUno = new Persona('Juan');

console.log(personaUno.getNombre());
console.log(Persona.metodoEstatico());