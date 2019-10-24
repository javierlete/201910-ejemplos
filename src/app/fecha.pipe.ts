import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'fecha' })
export class FechaPipe implements PipeTransform {
    transform(fecha: Date, formato?: string): string {
        switch (formato) {
            case 'corto':
                return fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();
            default:
                return fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate() + ' ' + 
                        fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
        }

    }
}
