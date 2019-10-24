import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-componente1',
    template: `
        <h1>{{mensaje}}</h1>
        <input #texto (input)="onAceptar(texto.value)"/>
        `,
    styles: ['h1 { color: red }']
})
export class Componente1Component implements OnInit, OnDestroy {
    private comunicacionServiceSubscription: Subscription;

    mensaje: string;

    constructor(private comunicacionService: ComunicacionService) { }

    ngOnInit(): void {
        this.comunicacionServiceSubscription =
            this.comunicacionService.mensajes$.subscribe(
                mensaje => this.mensaje = mensaje
            );
    }

    ngOnDestroy(): void {
        this.comunicacionServiceSubscription.unsubscribe();
    }

    onAceptar(texto: string) {
        this.comunicacionService.nuevoMensaje(texto);
    }
}
