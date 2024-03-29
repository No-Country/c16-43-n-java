import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { AdministradorProductosComponent } from './administrador-productos/administrador-productos.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    ProductosComponent,
    AdministradorProductosComponent,
    AgregarProductosComponent,
    DetalleProductoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
