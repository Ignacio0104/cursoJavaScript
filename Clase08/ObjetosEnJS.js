let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "Jperez@mail.com",
    edad:28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona);
console.log(persona.nombreCompleto());//Acordarse de los ()