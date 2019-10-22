import { Component } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
    selector: 'app-simple',
    templateUrl: './simple.component.html',
    styleUrls: ['./simple.component.css']
})
export class SimpleComponent {
    mensaje = 'Mensaje desde SimpleComponent';

    mapeadoPlurales:
        { [k: string]: string } = { '=0': 'Tarea sin inicializar', '=1': 'Primera tarea', other: 'Tarea número #.' };

    mapeadoTarea: any = {'Vender más': 'ADELANTE', 'Hacer el vago': 'Ejem...', other: 'Pues vale'};

    tarea: Tarea = {
        id: 1,
        descripcion: 'Tarea de prueba',
        fechaFinalizacion: new Date(),
        importe: 12.345
    };

    cambiarMensaje(texto: string) {
        this.mensaje = texto;
    }

    cambiarFecha(fecha: Date) {
        this.tarea.fechaFinalizacion = fecha;
    }
}
