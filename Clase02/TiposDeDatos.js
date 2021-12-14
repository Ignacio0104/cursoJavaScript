//Tipo de datos String
var nombre = "Carlos"; 
console.log(nombre);
nombre=136464;
console.log(typeof nombre);

//Tipo de dato númerico
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "156635"
};
console.log(typeof objeto);

//Tipo de dato boolean
var bandera = false;
console.log(bandera);

//Tipo de dato Función
function miFuncion (){};
console.log(miFuncion);

//Tipo de dato Symbol
var simbolo =Symbol('Mi simbolo');
console.log(typeof simbolo);

//Tipo de dato clase 
class Persona {
    constructor (nombre,apellido){
        this.nombre= nombre;
        this.apellido=apellido;
    }
};
console.log(Persona);

//Tipo de dato undefined. Valor por defecto de cualquier variable
var x;
console.log(x);


//Tipo de dato NULL. Ausencia de valor
var y= null;
console.log(y);

//Tipo array (en JS son objects)
var autos =['BMW','Audi','Volvo'];
console.log(typeof autos);

//Tipo de datos vacios
var z ='';
console.log(z);

