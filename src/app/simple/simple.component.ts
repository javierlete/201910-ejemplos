import { Component } from '@angular/core';

@Component({
    selector: 'app-simple',
    templateUrl: './simple.component.html',
    styleUrls: [ './simple.component.css' ]
})
export class SimpleComponent {
    mensaje = 'Mensaje desde SimpleComponent';

    cambiarMensaje(texto: string) {
        this.mensaje = texto;
    }
}
