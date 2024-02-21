import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    EncabezadoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
