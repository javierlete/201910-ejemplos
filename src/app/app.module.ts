import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { Componente1Component } from './componente1';
import { Componente2Component } from './componente2';
import { FechaPipe } from './fecha.pipe';

registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ConfirmarComponent,
    Componente1Component,
    Componente2Component,
    FechaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
