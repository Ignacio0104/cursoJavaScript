const ingreso=[
    new Ingreso ('Salario',2100),
    new Ingreso ('Venta Auto',30000),
];

const egreso=[
    new Egreso ('Renta',10000),
    new Egreso ('Ropa',2400),
];

let cargarApp = () =>
{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
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

const cargarIngresos = ()=>
{
    let ingresosHTML='';
    for(let dato of ingreso)
    {
        ingresosHTML+=crearIngresoHTML(dato);
    }

    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}

const crearIngresoHTML = (dato)=>
{
    let ingresoHTML= 
    `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion"> ${dato.descripcion} </div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(dato.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${dato.id})'></ion-icon>
            </button>
        </div>
    </div>
    </div> `;
    return ingresoHTML;
}
 
const eliminarIngreso = (id)=>
{
    let indiceEliminar = ingreso.findIndex(ingreso=>ingreso.id===id);
    ingreso.splice(indiceEliminar,1); 
    cargarCabecero();
    cargarIngresos();
}
 

const cargarEgresos = ()=>
{
    let egresosHTML='';
    for(let dato of egreso)
    {
        egresosHTML+=crearEgresoHTML(dato);
    }

    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}


const crearEgresoHTML = (dato)=>
{
    let egresoHTML= 
    `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion"> ${dato.descripcion} </div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(dato.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje((dato.valor/totalEgresos()))}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${dato.id})'></ion-icon>
            </button>
        </div>
        </div>
    </div> `;
    return egresoHTML;
}

const eliminarEgreso = (id)=>
{
    let indiceEliminar = egreso.findIndex(egreso=>egreso.id===id);
    egreso.splice(indiceEliminar,1); 
    cargarCabecero();
    cargarEgresos();
}

const agregarDato = ()=>
{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== ''&& valor.value!=='')
    {
        if(tipo.value==='ingreso')
        {
            ingreso.push(new Ingreso (descripcion.value, Number(valor.value))); //Tambien se puede poner +valor.value
            cargarCabecero();
            cargarIngresos();
        }else if (tipo.value==='egreso'){
            egreso.push(new Egreso (descripcion.value, +valor.value)); //Tambien se puede poner +valor.value
            cargarCabecero();
            cargarEgresos();
        }
    }
}
 

