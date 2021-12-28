import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-personas', //Es el nombre con el cual se lo va a usar
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje:string = 'No se ha agregado ninguna persona'
    titulo:string='Licenciado';
    agregarPersona()
    {
        this.mensaje='Persona agregada'
    }

    /*modificarTitulo(event:Event)
    {
        this.titulo=(<HTMLInputElement>event.target).value;
    }*/
}