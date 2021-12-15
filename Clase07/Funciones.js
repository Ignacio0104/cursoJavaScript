//miFuncion(7,9); Se puede usar antes de declarar por hoistin
function miFuncion (a,b)
{
    console.log(arguments.length);//Para consultar cuantos argumentos se pasan a la funcion. Solo dentro de la Fx
    console.log("La suma es " + (a+b));
}

miFuncion(2,3);

function suma (a,b)
{
    return a+b;
}
let resultado = suma(7,3);
console.log(resultado);

let x = function(a,b){return a+b}; //Se guarda la direccion de memoria de la funcion en la variable
resultado = x(1,2);
console.log(resultado);

(function(a,b) //self invoking function. No puede ser utilizada 
{
    
    console.log("Ejecutando la funcion " + (a+b));
})(3,4);


var miFuncionTexto = miFuncion.toString();//Se pasa la funcion a texto

console.log(miFuncionTexto);

//Funciones de tipo flecha
const sumarFuncionTipoFlecha = (a,b)=> a+b;//Se usa const para que despues no alterar la direccion de memoria
console.log(sumarFuncionTipoFlecha(3,5));

//Parametros y argumentos
let restar = function(a = 5,b = 2)//Asi se asignan valores por defaut. Si se llama la fx sin argumentos, 
                                    //se usa estos valores
{
    console.log(arguments[1]); //Arguments es un array, y asi se accede
    return a-b;
}

let resta = restar(10);
console.log(resta);

let multiplicacion = multiplicarTodo(2,3,6,2,7);

function multiplicarTodo() //No se declaran parametros
{
    let acumulacion=1;
    for(let i=0;i<arguments.length;i++) //Se usan todos los argumentos recibidos
    {
        acumulacion*=arguments[i];
    }
    return acumulacion;
}

console.log(multiplicacion);

//Paso por valor

let numero=10; //Valor primitivo

function cambiarValor(a) //Paso por valor
{
    a=20; //Esta variable solo existe dentro de la funcion
    return a;
}
let retorno=cambiarValor(numero);
cambiarValor(x);
console.log(numero);
console.log(retorno);
//No se cambia el valor. La funcion trabaja con una copia de la variable, no con la variable en sí

//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto (p1)
{
    p1.nombre = 'Carlos';
    p1.apellido='Lara';
}

console.log(persona.nombre);
cambiarValorObjeto (persona);
console.log(persona.nombre);
console.log(persona.apellido);