import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TerminosComponent } from './terminos/terminos.component';
import { Terminos2Component } from './terminos2/terminos2.component';
import { DescargaComponent } from './descarga/descarga.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TerminosComponent,
    Terminos2Component,
    DescargaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
