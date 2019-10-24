import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-componente2',
    template: `
        <h1>{{mensaje}}</h1>
        <input #texto (input)="onAceptar(texto.value)"/>
        `,
    styles: ['h1 { color: blue }']
})
export class Componente2Component implements OnInit, OnDestroy {
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
