function miFuncion()
{
    console.log("Saludos desde mi funcion");
}

miFuncion();

/*let funcionFlecha = ()=> //Entre parentesis van los posibles argumentos
{
    console.log("Saludos desde mi funcion Flecha");
}*/

const funcionFlecha =() => console.log("Saludos desde mi funcion Flecha"); //Si es una sola linea, no hace falta las {}

funcionFlecha(); //Para funcion flecha no aplica el hoisting

const saludar = () => {
    return 'Saludos desde saludar';
}
console.log(saludar());

const saludarDos = () =>  'Saludos desde saludar';
console.log(saludarDos());

const regresaObjeto = ()=> ({nombre: 'Juan', apellido: 'Perez'}); //Se pone entre parentesis para no confundir con el cuerpo de una funcion
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("Chauuu");

const funcionConParametrosDos = mensaje => console.log(mensaje); //Si es un solo parametro se puede pasar sin ()
funcionConParametrosDos("Holaaaa");

const funcionVariosArgumentos = (op1,op2) => op1 + op2;
console.log(funcionVariosArgumentos(1,5));