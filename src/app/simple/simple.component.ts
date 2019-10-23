import { Component, Input } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
    selector: 'app-simple',
    templateUrl: './simple.component.html',
    styleUrls: ['./simple.component.css']
})
export class SimpleComponent {
    @Input() mensaje = 'Mensaje desde SimpleComponent';

    mapeadoPlurales:
        { [k: string]: string } = { '=0': 'Tarea sin inicializar', '=1': 'Primera tarea', other: 'Tarea número #.' };

    mapeadoTarea: any = { 'Vender más': 'ADELANTE', 'Hacer el vago': 'Ejem...', other: 'Pues vale' };

    tarea: Tarea = {
        id: 1,
        descripcion: 'Tarea de prueba',
        fechaFinalizacion: new Date(),
        importe: 12.345
    };

    tarea2: Tarea;

    imgUrl = 'https://angular.io/assets/images/logos/angular/shield-large.svg';

    seHaPasadoLaFecha(): boolean {
        return this.tarea.fechaFinalizacion < new Date();
    }
    cambiarMensaje(texto: string) {
        this.mensaje = texto;
    }

    cambiarFecha(fecha: string) {
        this.tarea.fechaFinalizacion = new Date(fecha);
    }

    verEvento(evento) {
        console.log(evento.target.innerHTML);
    }
}
