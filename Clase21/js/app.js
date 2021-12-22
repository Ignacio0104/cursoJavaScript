const ingreso=[
    new Ingreso ('Salario',2100),
    new Ingreso ('Venta Auto',30000),
];

const egreso=[
    new Egreso ('Renta',2400),
    new Egreso ('Ropa',400),
];

let cargarApp = () =>
{
    cargarCabecero();
}

let totalIngresos = ()=>
{
    let totalIngreso=0;
    for(let dato of ingreso)
    {
        totalIngreso+=dato.valor;
    }
    
    return totalIngreso;
}

let totalEgresos = ()=>
{
    let totalEgreso=0;
    for(let dato of egreso)
    {
        totalEgreso+=dato.valor;
    }
    return totalEgreso;
}

let cargarCabecero  = () =>
{
    let presupuestoTotal = totalIngresos()-totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML=formatoMoneda (presupuestoTotal);
    document.getElementById('porcentajeEgresos').innerHTML= formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
}

const formatoMoneda =(valor)=>
{
   return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2}); //en de ingles
}

const formatoPorcentaje =(valor)=>
{
   return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2});
}