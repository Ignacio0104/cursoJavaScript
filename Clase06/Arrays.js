//let autos = new Array('BMW','Mercedes Benz', 'Volvo'); -> Esta sintaxis es vieja

const autos = ['BMW','Mercedes Benz', 'Volvo'];
console.log(autos);
console.log(autos[1]);

for (i = 0;i<autos.length;i++)
{
    console.log(autos[i]);
}

autos[1]='MercedesBenz';
console.log(autos[1]);

autos.push('Fiat');//Para agregar un elemento al final de la lista
for (i = 0;i<autos.length;i++)
{
    console.log(autos[i]);
}

console.log(autos.length);
autos[autos.length] = 'Ford'; //No se pone mas uno porque lenght es 4 pero el indice maximo es 3 (0,1,2,3)

for (i = 0;i<autos.length;i++)
{
    console.log(autos[i]);
}

console.log(typeof autos);
console.log(Array.isArray(autos)); //Para verificar si el objeto es array
console.log(autos instanceof Array); //Para verificar si el objeto es array

