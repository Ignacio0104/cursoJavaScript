//Una clase es una plantilla para crear objetos
class Persona {

    static contadorObjetosPersona=0; //Atributo que pertenece a la clase y a ningun objeto
    email="Valor defaut email"; //Atributo que pertenece a los objetos
                                //Si lo pongo en el constructor, se carga igual que nombre y apellido
    constructor (nombre,apellido)
    {
        this._nombre=nombre; //Se acostumbra poner _ para diferenciar de los setters y getters
        this._apellido=apellido;
        Persona.contadorObjetosPersona++; //Se accede a través del nombre de clase, no del this

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

    static saludar()
    {
        console.log("Saludos desde el metodo Static");
    }

    static saludarDos(persona)
    {
        console.log(persona.nombre);
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

//Metodos static

//console.log(personaUno.saludar()); //No puede utilizarse desde un objeto, sino desde la clase misma
Persona.saludar(); //Desde aca si se puede llamar

//Desde la clase si se puede llamar a un objeto en static
Persona.saludarDos(personaUno);

Empleado.saludar(); //Tambien se heredan estos metodos
Empleado.saludarDos(empleadoUno); 

//Atributos static
//console.log(personaUno.contadorObjetosPersona);  -->Undefined
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);
//Se crearon 3 personas (personaUno se creo 2 veces) y un empleado, por eso 4

//Atributo no estatico, perteneciente a los objetos y no a la clase
console.log(personaDos.email);
console.log(empleadoUno.email);
console.log(Persona.email);
console.log(Empleado.email);


class Humano {

    static contadorHumanos=0; 

    static get MAX_OBJETOS()
    {
        return 5;
    }
    
    constructor (nombre,apellido)
    {
        this._nombre=nombre; //Se acostumbra poner _ para diferenciar de los setters y getters
        this._apellido=apellido;
         
        if(Humano.contadorHumanos<Humano.MAX_OBJETOS)
        {
            this.idHumano=++Humano.contadorHumanos; //Se accede a través del nombre de clase, no del this
        }
        else
        {
            console.log("No hay mas lugar");
        }
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
        return this.idHumano + ' ' + this._nombre + ' ' + this._apellido;
    }
    toString ()
    {
        return this.nombreCompleto(); //Sobreescribimos el metodo heredado toString
    }

    static saludar()
    {
        console.log("Saludos desde el metodo Static");
    }

    static saludarDos(persona)
    {
        console.log(persona.nombre);
    }
}

class Jugador extends Humano 
{
    constructor(nombre, apellido, departamento)
    {
        super(nombre,apellido);
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

    nombreCompleto ()
    {
        return super.nombreCompleto() + ', ' + this._departamento; //Aca reutilizamos el codigo ya escrito
    }


}

let humanoUno = new Humano ("LeBron","James");
console.log(humanoUno.toString());

let jugadorUno = new Jugador ("Anthony", "Davis", "Lakers");
console.log(jugadorUno.toString());

console.log(Humano.contadorHumanos);
let humanoDos = new Humano ("Rusell","Wesbrook");
console.log(humanoDos.toString());

//Declaracion de variables estaticas y que no puedan ser modificadas

console.log(Humano.MAX_OBJETOS);
//Humano.MAX_OBJETOS=10; 
//console.log(Humano.MAX_OBJETOS); //No se modifica

let jugadorTres = new Jugador ("Anthony", "Davis", "Lakers");
let jugadorCuatro = new Jugador ("Anthony", "Davis", "Lakers");
let jugadorCinco = new Jugador ("Anthony", "Davis", "Lakers"); //Aca indica que no hay mas lugar

console.log(jugadorCinco.toString());