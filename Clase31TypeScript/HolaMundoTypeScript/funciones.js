"use strict";
let saludo = "Hola mundo desde TS"; //TS detecta automaticamente el tipo de la variable. Pero no puede cambiarse
let numero = 10; //No se puede dejar una variable sin inicializar
let cualquiera = "Cadena";
cualquiera = 10; //Aca si se puede cambiar. No recomendable
const PI = 3.14;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}
saludar();
