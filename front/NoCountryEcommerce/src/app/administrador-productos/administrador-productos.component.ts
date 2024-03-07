import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../services/estilo-encabezado.service';

@Component({
  selector: 'app-administrador-productos',
  templateUrl: './administrador-productos.component.html',
  styleUrls: ['./administrador-productos.component.scss']
})
export class AdministradorProductosComponent {

    productos: Producto[] = []
    modalAbierto: boolean = false;

    constructor(private http: HttpClient,
                private inicioComponent: InicioComponent,
                private estiloEncabezadoService: EstiloEncabezadoService) {}

    ngOnInit(): void {
      const usuario = 'admin@printopia.com';
      const password = 'Admin123';

      const credenciales = btoa(usuario + ':' + password);

  // Crea el encabezado de autorización
      const headers = new HttpHeaders({
          'Authorization': 'Basic ' + credenciales
      });

      this.http.get<Producto[]>('https://printopia-backend.onrender.com/api/products', { headers }).subscribe((listaProductos: Producto[]) => {
          this.productos = listaProductos
      });
    }

    abrirModal(): void {
        this.modalAbierto = true;
    }
    cerrarModal(): void {
        this.modalAbierto = false;
    }

    mostrarInicio(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(false);
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false, false);
    }
}
