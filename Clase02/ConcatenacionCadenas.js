var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';

console.log(nombreCompleto2);

var x = nombre + 1 + 9; //Se evalua de izq a der, entonces toma todo como string
console.log(x);

var x =1 + 9 + nombre; 
console.log(x);

var x = nombre + (1 + 9); //Aca los toma como numeros
console.log(x);