class Persona 
{
    static contadorDePersonas=0;
    constructor(nombre,apellido,edad)
    {
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona=++Persona.contadorDePersonas;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre (string){
        this._nombre=string;
    }

    get apellido (){
        return this._apellido;
    }
    
    set apellido (string){
        this._apellido=string;  
    }

    get edad (){
        return this._edad;
    }

    set edad (number){
        this._edad=number;
    }

    toString ()
    {
         return 'ID: ' + this._idPersona + '| Nombre: ' + this._nombre + 
         '| Apellido: ' +this._apellido + '| Edad: ' + this._edad;

    }
}

class Empleado extends Persona
{
    static contadorEmpleados=1000;
    constructor(nombre,apellido,edad,sueldo)
    {
        super(nombre,apellido,edad);
        this._sueldo=sueldo;
        this._idEmpleado=Empleado.contadorEmpleados++;
    }

    get idEmpleado ()
    {
        return this._idEmpleado;
    }

    get sueldo ()
    {
        return this._sueldo;
    }

    set sueldo(number)
    {
        this._sueldo=number;
    }

    toString ()
    {
        return super.toString() + ' - Id Empleado: ' + this._idEmpleado + '|  Sueldo: $' + this._sueldo;
    }
}

class Cliente extends Persona
{
    static contadorClientes=100;
    constructor(nombre,apellido,edad,fechaRegistro)
    {
        super(nombre,apellido,edad);
        this._fechaRegistro=fechaRegistro;
        this._idCliente = Cliente.contadorClientes++;
    }

    get idCliente ()
    {
        return this._idCliente;
    }
    
    get fechaRegistro()
    {
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha)
    {
        this._fechaRegistro=fecha;
    }

    toString ()
    {
        return super.toString() + ' - Id Cliente: ' + this._idCliente + '| Fecha de registro: ' + this._fechaRegistro;
    }
}

let empleadoPrueba = new Empleado("Esteban", "Perez", 56, 5000);
console.log(empleadoPrueba.toString());

let personaPrueba = new Persona ("Juan", "Carlos",25);
console.log(personaPrueba.toString());

let personDos= new Persona("Carlos", "Ramirez",35);
console.log(personDos.toString());

let empleadoDos = new Empleado ("Gustavo", "Gonzalez", 45, 10000);
console.log(empleadoDos.toString());

let clienteUno= new Cliente ("Silvia", "Perez", 54, "15/05/2019");
console.log(clienteUno.toString());

clienteUno.apellido='Andoro';
console.log(clienteUno.toString());
