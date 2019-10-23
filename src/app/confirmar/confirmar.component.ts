import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {
  @Output() respuestaRecibida = new EventEmitter<boolean>();

  onAceptar() {
    console.log('ACEPTAR');
    this.respuestaRecibida.emit(true);
  }

  onCancelar() {
    console.log('CANCELAR');
    this.respuestaRecibida.emit(false);
  }
}
