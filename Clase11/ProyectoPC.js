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

    toString()
    {
        return `Entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }
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
        return `Id Raton: ${this._idRatones} ` + super.toString();
    }
}

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
        return `Id Teclado: ${this._idTeclados} ` + super.toString();
    }
}
/*
let pruebaMouse = new Raton ("USH","Logitech");
console.log(pruebaMouse.toString());
let pruebaMouseDos= new Raton ("PIN","HP");
console.log(pruebaMouseDos.toString());
let pruebaTeclado= new Teclado ("USB","Phillips");
console.log(pruebaTeclado.toString());
let pruebaTecladoDos= new Teclado ("PIN","LG");
console.log(pruebaTecladoDos.toString());
*/