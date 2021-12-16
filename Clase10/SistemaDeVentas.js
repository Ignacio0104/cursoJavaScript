class Producto
{
    static contadorDeProductos=0;
    
    constructor(nombre, precio)
    {
        this._idProducto=++Producto.contadorDeProductos;
        this._nombre=nombre;
        this._precio=precio;
       // this._cantidadProductos=++Producto.contadorDeProductos;
    }

    get idProducto()
    {
        return this._idProducto;
    }

    get nombre ()
    {
        return this._nombre;
    }

    set nombre (nombre)
    {
        this._nombre=nombre;
    }

    get precio()
    {
        return this._precio;
    }

    set precio (precio)
    {
        this._precio=precio;
    }

    toString()
    {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;    
    }   
}

class Orden 
{
    static contadorOrdenes=0;
    static get MAX_PRODUCTOS(){ //Esto es para simular una constante
        return 5;
    }
    constructor()
    {
        this._idOrden=++Orden.contadorOrdenes;
        this._productos= [];
        //this._contadorProductosAgregados=0;
    }

    get idOrden ()
    {
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS)
        {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++]=producto; Otra sintaxis
        } else 
        {
            console.log("No pueden agregarse mas productos a esta orden");
        }
    }

    calcularTotal ()
    {
        let totalVenta=0;
        for(let producto of this._productos) //Otra forma de declarar un for
        {
            totalVenta+=producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden()
    {
        let productosOrden='';
        for(let producto of this._productos)
        {
            productosOrden+='\n' + producto.toString()+" ";
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let productoUno= new Producto("Banana", 200);
let productoDos= new Producto ("Naranja", 50);

console.log(productoUno.toString());
console.log(productoDos.toString());

let ordenUno=new Orden ()
ordenUno.agregarProducto(productoUno);
ordenUno.agregarProducto(productoDos);

ordenUno.mostrarOrden();

let ordenDos=new Orden ();

let productoTres= new Producto ("Manzana", 150);
ordenDos.agregarProducto(productoUno);
ordenDos.agregarProducto(productoDos);
ordenDos.agregarProducto(productoTres);
ordenDos.agregarProducto(productoDos);
ordenDos.agregarProducto(productoTres);
ordenDos.agregarProducto(productoTres);


ordenDos.mostrarOrden();
