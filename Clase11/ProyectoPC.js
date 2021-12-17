class DispositivoEntrada
{
    constructor(entrada,marca)
    {
        this._tipoEntrada=entrada;
        this._marca=marca;
    }

    get tipoEntrada()
    {
        return this._tipoEntrada;
    }

    set tipoEntrada(entrada)
    {
        this._tipoEntrada=entrada;
    }

    get marca()
    {
        return this._marca;
    }

    set marca(marca)
    {
        this._marca=marca;
    }

    /*toString()    Esto no es necesario aca
    {
        return `Entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    } */
}

/*let pruebaEntrada=new DispositivoEntrada("USB","Logitech");
console.log(pruebaEntrada.marca);
console.log(pruebaEntrada.tipoEntrada);*/

class Raton extends DispositivoEntrada 
{
    static contadorRatones=0;

    constructor(entrada,marca)
    {
        super(entrada,marca);
        this._idRatones=100+Raton.contadorRatones++;
    }

    get idRatones ()
    {
        return this._idRatones;
    }

    toString()
    {
        return `Id Raton: ${this._idRatones} - Tipo Entrada: ${this._tipoEntrada} - Marca: ${this._marca}`;
    }
}

let ratonUno = new Raton("USB","HP");
console.log(ratonUno.toString());
let ratonDos = new Raton("BT","Dell");
console.log(ratonDos.toString());
ratonDos.marca="LG";
console.log(ratonDos.toString());
let pruebaMouse = new Raton ("USH","Logitech");
console.log(pruebaMouse.toString());
let pruebaMouseDos= new Raton ("PIN","HP");
console.log(pruebaMouseDos.toString());

class Teclado extends DispositivoEntrada 
{
    static contadorTeclados=0;

    constructor(entrada,marca)
    {
        super(entrada,marca);
        this._idTeclados=1000+Teclado.contadorTeclados++;
    }

    get idTeclados ()
    {
        return this._idTeclados;
    }

    toString()
    {
        return `Id Teclado: ${this._idTeclados} - Tipo Entrada: ${this._tipoEntrada} - Marca: ${this._marca}`
    }
}

let pruebaTeclado= new Teclado ("USB","Phillips");
console.log(pruebaTeclado.toString());
let pruebaTecladoDos= new Teclado ("PIN","LG");
console.log(pruebaTecladoDos.toString());


class Monitor
{
    static contadorMonitores = 0;
    constructor(marca,tamano)
    {
        this._idMonitor=10+Monitor.contadorMonitores++;
        this._marca=marca;
        this._tamano=tamano;
    }

    get idMonitor()
    {
        return this._idMonitor;
    }

    get marca ()
    {
        return this._marca;
    }

    set marca(marca)
    {
        this._marca=marca;
    }

    get tamano()
    {
        return this._tamano;
    }

    set tamano (tamano)
    {
        this._tamano=tamano;
    }

    toString()
    {
        return `Id Monitor: ${this._idMonitor} - Marca: ${this._marca} - Tamano: ${this._tamano}cm`;
    }
}

let monitorPrueba = new Monitor ("HP", 23);
console.log(monitorPrueba.toString());
let monitorPruebaDos = new Monitor ("Samsung", 30);
console.log(monitorPruebaDos.toString());
monitorPrueba.marca="Lenovo";
console.log(monitorPrueba.toString());


class Computadora
{
    static contadorComputadoras=0;

    constructor(nombre) //Se pueden tambien agregar los componente aca (ver versión clase)
    {
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre=nombre;
        
    }

    agregarComponentes(monitor,teclado,raton)
    {
        this._monitor=monitor;
        this._teclado=teclado;
        this._raton=raton;
    }

    get idComputadora ()
    {
        return this._idComputadora;
    }

    get monitor()
    {
        return this._monitor;
    }

    set monitor(monitor)
    {
        this._monitor=monitor;
    }

    get teclado()
    {
        return this._teclado;
    }

    set teclado(teclado)
    {
        this._teclado=teclado;
    }

    get raton ()
    {
        return this._raton;
    }

    set raton (raton)
    {
        this._raton=raton;
    }

    toString()
    {
        return `Id computadora: ${this._idComputadora}
        Nombre: ${this._nombre} 
        Monitor: ${this._monitor}
        Teclado ${this._teclado}
        Raton ${this._raton} \n` //Por esta sintaxis, no es necesario poner el toString
    }
}

let nuevaCompu =new Computadora ('Prueba');
console.log(nuevaCompu);
nuevaCompu.agregarComponentes(monitorPrueba,pruebaTeclado,pruebaMouse);

console.log(nuevaCompu.raton);
console.log(nuevaCompu.monitor);
console.log(nuevaCompu.teclado);
console.log(nuevaCompu.toString());
console.log(`${nuevaCompu}`); //Se imprime sin necesidad del toString

class Orden 
{
    static contadorDeOrdenes = 0;
    constructor()
    {
        this._idOrden=++Orden.contadorDeOrdenes;
        this._computadoras= [];
    }

    get idOrden ()
    {
        return this._idOrden;
    }

    agregarProducto(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden()
    {
        let computadorasOrden='';
        for(let computadora of this._computadoras)
        {
            computadorasOrden+=`\n ${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let nuevaOrden= new Orden();
nuevaOrden.agregarProducto(nuevaCompu);
nuevaOrden.agregarProducto(nuevaCompu);
nuevaOrden.mostrarOrden();