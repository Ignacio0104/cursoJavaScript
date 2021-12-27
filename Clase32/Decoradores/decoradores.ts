function Saludar(target:Function):void{
    target.prototype.saludos= function():void{
        console.log( "Holaaaaaa" );
    }
}

@Saludar
class Hola {
    constructor(){};
}

let holaUno = new Hola();
holaUno.saludos();