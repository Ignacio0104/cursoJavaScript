interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string; //el ? quiere decir que el dato es opcional
}

let usuarioUno:Usuario = {nombreUsuario: "Juan", password: "123",confirmarPassword: "123"};

console.log(usuarioUno);
console.log(usuarioUno.nombreUsuario);

interface Abordar {
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte:function(){
        console.log("Abordandoooo!");
    }
}

avion.abordarTransporte();