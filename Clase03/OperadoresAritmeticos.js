let a=3;
let b=2;
let z=a+b;
console.log ('El resultado es '+ z);

z=a-b;
console.log ('El resultado es '+ z);

z=a*b;
console.log ('El resultado es '+ z);

z=a/b;
console.log ('El resultado es '+ z);

z=a%b;
console.log ('El resultado es '+ z);

z=a**b;
console.log ('El resultado es '+ z);

z=++a; //Pre incremento. Se aumenta en uno a la variable a y se la asigna a z
console.log ('El resultado es '+ z);
console.log ('El resultado es '+ a);

z=a++; //Post incremento. z tiene el valor de la variable previo al incremento. b se incrementa luego
console.log ('El resultado es '+ z);
console.log ('El resultado es '+ a);

z=a--;
console.log ('El resultado es '+ z);
console.log ('El resultado es '+ a);

z=--a;
console.log ('El resultado es '+ z);
console.log ('El resultado es '+ a);

let opeA = 3, opeB = 2, opeC = 1;

let resultado = opeA*opeB+opeC;
console.log ('El resultado es '+ resultado);

let variable= 1; //= operador de asignacion
variable +=3; //+= -= *= /= etc -> operador de asignacion compuesto

let d = 3, e=2, f='3';
let x= d===f; //Da falso porque es igualdad estricta
console.log(x);

d=16;
let valMin=0, valMax=10;

if(d>=valMin&&d<=valMax)
{
    console.log("Dentro de rango");
} else
{
    console.log("Fuera de rango");
}

let vacaciones=false;
let diaDescanso=false;

if(vacaciones==true||diaDescanso==true)
{
    console.log("Puede ir");
} else
{
    console.log("No puede ir");
}

let operadorTernario = (3>2) ? "verdadero" : "Falso"; //Operador ternario. Similar al if. Primero el TRUE y después el FALSE
console.log(operadorTernario);

let numero=9;
let numeroPar=(numero%2==0) ? "Es par":"Es impar";
console.log(numeroPar);

let numeroEnTexto = '19';
console.log(typeof numeroEnTexto);
let edad=Number(numeroEnTexto); //Number castea la var a numero
console.log(typeof edad);

if(isNaN(edad))
{
    console.log("No se ingresó un número");
} else
{
    let mayorDeEdad=(edad>=18) ? "Es mayor de edad" : "Es menor de edad";
    console.log(mayorDeEdad);
}


