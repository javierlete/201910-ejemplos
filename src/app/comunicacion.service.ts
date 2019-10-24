import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  private mensajeSubject = new Subject<string>();

  mensajes$ = this.mensajeSubject.asObservable();

  nuevoMensaje(mensaje: string) {
    this.mensajeSubject.next(mensaje);
  }
}
