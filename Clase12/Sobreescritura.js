class Empleado 
{
    constructor(nombre,sueldo)
    {
        this.nombre=nombre; //No vamos a poder set y get, por eso sin _
        this.sueldo=sueldo;
    } 

    obtenerDetalles ()
    {
        return `Empleado: ${this.nombre} - Sueldo: $${this.sueldo} `;
    }
}

class Gerente extends Empleado
{
    constructor(nombre,sueldo,departamento)
    {
        super(nombre,sueldo);
        this.departamento=departamento;
    }

    obtenerDetalles() //Aca sobreescribimos el metodo anterior
    {
        return `Gerente: ${super.obtenerDetalles()} Departamento ${this.departamento}`;
    }


}


let gerenteNew = new Gerente ('Jorge', 25000, "Sistemas");
let empleadoUno = new Empleado( "Juan",3000);


//Polimorfismo
function imprimir(tipo)
{
    console.log(tipo.obtenerDetalles());
}

imprimir(empleadoUno);
imprimir(gerenteNew);

//Instanceof
//Sirve para verificar si el tipo que recibe la función es de un tipo determinado
function imprimirDos(tipo)
{
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente) //Siempre de las mas particular a la mas generica(Gerente,Empleado,Object)
    {
        console.log("Es un Gerente");//Aca adentro ya sabemos que es Gerente, asi que podemos entrar a atributos
                                    //especificos de la clase
    }else
    {
        if(tipo instanceof Empleado)
        {
            console.log("Es un empleado");
        } else
        {
            if(tipo instanceof Object)
            {
                console.log("Es un Objeto");
            }
        }
    }
}

imprimirDos(empleadoUno);
imprimirDos(gerenteNew); //Este tambien lo marca como empleado, porque es hijo de Empleado

//