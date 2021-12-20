let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion==true)
    {
        resolver('Resolvio correcto');
    } else
    {
        rechazar("Se produjo un error");
    }
}); //Se le pasa 2 funciones de tipo callback.

/*miPromesa.then(
    valor=>console.log(valor),
    error=>console.log(error)
);*/

//miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error)); //Esta es otra sintaxis

//Set timeOut con promesas
/*let promesa = new Promise ((resolver)=>{ //Aca ponemos funcion solo para resolver, el error no lo tratamos
    setTimeout(()=>resolver("Saludo con promesa y timeout"),3000);
});

promesa.then(valor => console.log(valor));*/

//async indica que una función va a retornar una promesa
async function miFuncionConPromesa ()
{
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor=>console.log(valor)); //Se pone parentesis antes del .then porque no es una promesa, es un async

//Await

async function funcionConPromesaYAwait()
{
    let miPromesa=new Promise( resolver => {
        resolver ("Promesa con await");
    });

    console.log( await miPromesa); // Solo va await dentro de una funcion declarada con async
}

//funcionConPromesaYAwait();

 async function funcionConPromesaAwaitTimeout ()
 {
     let miPromesa=new Promise( resolver =>{
        setTimeout(()=> resolver("Llegue acáaaa!"),3000);
     });

     console.log(await miPromesa);
   
 }

funcionConPromesaAwaitTimeout();