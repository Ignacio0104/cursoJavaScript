//Una clase es una plantilla para crear objetos
class Persona {
    constructor (nombre,apellido)
    {
        this._nombre=nombre; //Se acostumbra poner _ para diferenciar de los setters y getters
        this._apellido=apellido;

    }
    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre=nombre;
    }

    get apellido ()
    {
        return this._apellido;
    }
    
    set apellido (apellido)
    {
        this._apellido=apellido;
    }

    nombreCompleto ()
    {
        return this._nombre + ' ' + this._apellido;
    }
    toString ()
    {
        return this.nombreCompleto(); //Sobreescribimos el metodo heredado toString
    }
}

let personaUno = new Persona("Juan","Perez");
console.log(personaUno);

let personaDos= new Persona ("Carlos","Lara");
console.log(personaDos);

console.log(personaDos.nombre); // Aca se usa el GET

personaUno.nombre="Esteban"; //Aca se usa el SET 
console.log(personaUno.nombre);

//Las clases hay que definirlas antes de usarlas

//Herencia
class Empleado extends Persona //Aca se define empleado como hijo de persona
{
    constructor(nombre, apellido, departamento)
    {
        super(nombre,apellido); //Aca se llama al constructor de la clase padre
        this._departamento=departamento;
    }

    get departamento()
    {
        return this._departamento;
    }

    set departamento(departamento)
    {
        this._departamento=departamento;
    }

    /* nombreCompleto () //Sobreescritura. Aca modificamos el metodo heredado
    {
        return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
    } 
    Hay una forma mejor de hacerlo*/

    nombreCompleto ()
    {
        return super.nombreCompleto() + ', ' + this._departamento; //Aca reutilizamos el codigo ya escrito
    }


}
personaUno = new Persona("Juan","Perez");
console.log(personaUno);

let empleadoUno = new Empleado("Gustavo","Gonzalez","Finanzas"); //Hay que llamar al constructos de la clase padre
console.log(empleadoUno);
console.log(empleadoUno.nombre);

//Herencia de metodos
console.log(empleadoUno.nombreCompleto());
console.log(personaUno.nombreCompleto());
//Metodo esta definido en Persona, pero lo podes llamar desde empleado

//Sobreescritura
console.log(empleadoUno.nombreCompleto());

//Clase Object es la clase padre de todos los objetos (es implicito pero seria como poner extends Object)
//Objeto contiene varios metodos que se heredan por cada clase u objeto
console.log(empleadoUno.toString());
console.log(personaUno.toString());
//Se llama al mismo metodo, pero en cada objeto tiene un formato distinto

