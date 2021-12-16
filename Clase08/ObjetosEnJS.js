let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "Jperez@mail.com",
    edad:28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    } 
}

console.log(persona);
console.log(persona.nombreCompleto());//Acordarse de los ()

let persona2 = new Object(); //Otra forma de crear el objeto
persona2.nombre= 'Carlos'; //Aca se crea y se carga el campo
persona2.direccion='Saturno 15';
persona2.tel= '5353532532';

console.log(persona['apellido']); //Otra forma de acceder a las propiedades del objeto

//Para recorrer el objeto con for

for(propiedad in persona)
{
    console.log(propiedad);
    console.log(persona[propiedad]);
}


//Agregar propiedades de los objetos
persona.telefono='56464646'; //Asi se agrega
console.log(persona);

//Elimiar propiedades
delete persona.telefono;
console.log(persona);

//Imprimir objetos
console.log(persona.nombre + ', ' + persona.apellido);

for (nombrePropiedad in persona)
{
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona); //Aca se crea un array con los valores del objeto
console.log(personaArray);

let personaString = JSON.stringify(persona); //Convierte los valroes del objeto a string
console.log(personaString);

//Getters y Setters

let personaDos = {
    nombre: "Pedro",
    apellido: "Gonzalez",
    email: "Pedro@mail.com",
    edad:32,
    idioma : 'ES',
    get lang()
    {
        return this.idioma.toUpperCase();
    },
    set lang( lang )
    {
        this.idioma= lang.toUpperCase();
    },
    get nombreCompleto(){ //Se indica que es una función de tipo GET
        return this.nombre + ' ' + this.apellido 
    } 
}

console.log(personaDos.nombreCompleto); //No es necesario poner los parentesis
console.log(personaDos.lang);
personaDos.lang = 'en';//No es necesario poner los parentesis, se trata como una propiedad
console.log(personaDos.lang);

//Constructores
function PersonaTres(nombre,apellido,email) { 
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    this.nombreCompletoDos= function()
    {
        return this.nombre + " " + this.apellido;
    }
}

let padre = new PersonaTres("Esteban","Puerto","Esteban@gmail.com");
console.log(padre);
let madre = new PersonaTres("Maria","Gonzalez","Maria@gmail.com");
console.log(madre);

padre.nombre = 'Carlos'; //Se modifica solo el indicado
console.log(padre);
console.log(madre);

console.log(padre.nombreCompletoDos());
console.log(madre.nombreCompletoDos());

//Otra forma de construir Objetos
let miObjeto = new Object();
let miObjetoDos = {}; //Se recomienda esta forma.
let miCadena = new String ('Hola'); //No es necesario ponerlo asi
let miCadena2= 'Hola';

//Para agregar un campo a todos los objetos de tipo persona

PersonaTres.prototype.tel ='44444';
console.log(madre.tel);
console.log(padre.tel);

//Call -> llamar un metodo definido en un objeto desde otro objeto

let Person =
{
    nombre: 'Pablo',
    apellido:'Gutierrez',
    nombreCompletoTres : function(titulo, tel)
    {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel; 
    }
}

let People =
{
    nombre: 'Carlos',
    apellido : 'Laras',
}

console.log(Person.nombreCompletoTres("Licenciado", '545455'));
console.log(Person.nombreCompletoTres.call(People, 'Ingeniero', '2435552'));
//Aca estoy llamando al metodo de Person y aplicandolo en People. Los atributos deben ser iguales. Aquí tambien se están
//pasando 2 argumentos al call

let arregloArgumentos = ['Ingeniero','2424242'];
console.log(Person.nombreCompletoTres.apply(People,arregloArgumentos)); 
console.log(Person.nombreCompletoTres.apply(People,['Licenciado','2424242']));
//Apply funciona casi igual que call pero no se pasan los argumentos de uno en uno, se pasan como arreglo o variable
