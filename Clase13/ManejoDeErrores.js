'use strict'

try //De esta forma se informa el error, pero el programa lo avisa y sigue, no se corta todo
{
    let x=10;
    throw 'Mi ERROR';
} catch(error)
{
    console.log(error);
}
finally//Este bloque siempre se ejecuta, sin importar lo anterior
{
    console.log("Terminó la revisión");
}

console.log("Continuamos...");

//Clausula throws
let resultado = 15;

try{
    //x=10;
    if(isNaN(resultado))
    {
        throw 'No es un numero';
    } else
    {
        if(resultado==='')
        {
            throw 'Es una cadena vacia';
        } else    
        {
            if(resultado>=0) throw 'Valor positivo';
        }
    } 

} catch (error)
{
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Terminó la revisión");
}
