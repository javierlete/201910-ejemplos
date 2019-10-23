import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos';

  respuesta: boolean;

  elementos: string[] = [
    'Uno', 'Dos', 'Tres'
  ];

  valor = 5;

  onRespuestaRecibida(respuesta: boolean) {
    console.log('RESPUESTA RECIBIDA');
    console.log(respuesta);
    this.respuesta = respuesta;
  }
}
