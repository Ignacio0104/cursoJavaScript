function miFuncionUno ()
{
    console.log("Funcion Uno");
}

function miFuncionDos ()
{
    console.log("Funcion Dos");
}

miFuncionUno();
miFuncionDos(); 

function imprimir ( mensaje )
{
    console.log(mensaje);
}

function sumar (num1,num2,funcionCallback)
{
    let resultado = num1+num2;
    funcionCallback(`El resultado es ${resultado}`);

}

sumar(5,3,imprimir);//No hay que poner el parentesis

//Llamadas asicronas con setTimeout
function miFuncionCallback ()
{
    console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallback,300);

setTimeout(function(){console.log ("Saludo asincrono despues de 5 segundos")},500);

setTimeout(()=>console.log("Saludo asincrono 3"),100);

//SetInterval

let reloj = () => {
    let fecha = new Date ();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,1000);