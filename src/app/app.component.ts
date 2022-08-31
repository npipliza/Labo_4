import { Component } from '@angular/core';
import { NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title     = '| CALCULADORA |';
  numeroUno = 0;
  numeroDos = 0;
  promedio  = 0;
  suma      = 0;  

  calcular(){
    this.promedio = (this.numeroUno + this.numeroDos) / 2;
    this.suma     = this.numeroUno + this.numeroDos;
  }

  limpiar(){
    this.numeroUno = 0;
    this.numeroDos = 0;
    this.promedio  = 0;
    this.suma      = 0;
  }
  
}
