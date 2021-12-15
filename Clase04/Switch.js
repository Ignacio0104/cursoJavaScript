let numero = 5;
let numeroTexto;

switch(numero) //Switch hace comparaciones ESTRICTAS ===. El valor y tipo de dato debe ser igual en cada case
{
    case 1:
        numeroTexto='Numero Uno';
        break;
    case 2:
        numeroTexto='Numero Dos';
        break;
    case 3: 
        numeroTexto='Numero Tres';
        break;
    default:
        numeroTexto='Valor desconocido';
        break;
}

console.log(numeroTexto);