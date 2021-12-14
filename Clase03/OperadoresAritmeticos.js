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