import { Component } from '@angular/core';
import { NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';
import {Usuario} from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title     = '| CALCULADORA |';
  numeroUno = 0;
  numeroDos = 0;
  promedio  = 0;
  suma      = 0;
  nombreUsuario = '';
  claveUsuario  = '';

  nuevoUsuario = new Usuario();
  
  login(){    
    console.info("objeto",this.nuevoUsuario);
    alert("¡Bienvenido!");  
  }

}
