let condicion = false;

if(condicion)
{
    console.log("Condicion verdadera!");
}
else
{
    console.log("Condicion falsa");
}

let numero=4;

if(numero==1)
{
    console.log("Numero Uno");
} else
{
    if(numero==2)
    {
        console.log("Numero Dos");
    } else
    {
        if(numero==3)
        {
            console.log("Numero Tres");
        } else
        {
            if(numero==4)
            {
                console.log("Numero Cuatro");
            } else
            {
                console.log("Numero fuera de sistema");
            }
        }
    }
}

let mes = 3;
let estacion;

if(mes>=1 && mes <=12)
{
    if(mes>=1 && mes <=3 ||mes==12)
    {
        estacion="Verano";
    }  else
    {
        if(mes>=4 && mes <=6)
        {
            estacion="Otono";
        } else
        {
            if(mes>=7 && mes <9)
            {
                estacion="Invierno";
            } else
            {
                estacion="Primavera"
            }
        }
    }
}

console.log(estacion);


