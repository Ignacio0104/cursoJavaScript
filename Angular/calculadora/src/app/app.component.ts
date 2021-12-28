import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  resultado = 0;
  numeroUno:number=0;
  numeroDos:number=0;
  mensaje=''

  sumar (numUno:number,numDos:number) {
    this.resultado= numUno+numDos;
    this.mensaje='Operación correcta'
  }
  restar (numUno:number,numDos:number) {
    this.resultado= numUno-numDos;
    this.mensaje='Operación correcta'
  }
  multiplicar (numUno:number,numDos:number) {
    this.resultado= numUno*numDos;
    this.mensaje='Operación correcta'
  }
  dividir (numUno:number,numDos:number) {
    if(numDos==0)
    {
      this.mensaje='No se puede realizar la operación'
    }else
    {
      this.resultado= numUno/numDos;
    }
  }

}
