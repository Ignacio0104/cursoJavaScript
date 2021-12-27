let suma = function (a:number, b:number)
{
    return a + b;
}

console.log(suma(5,3));

let sumaFlecha = (a:number, b:number) =>
{
    return a + b; 
}

console.log(sumaFlecha(5,3));

let sumaFlechaReducida = (a:number, b:number) => a + b; 

console.log(sumaFlechaReducida(5,3));

var obtenerNombre = function()
{
    return"Juan Perez";
}

let obtenerNombreFlecha=()=>"Juan Perez"

console.log(obtenerNombre());
console.log(obtenerNombreFlecha());