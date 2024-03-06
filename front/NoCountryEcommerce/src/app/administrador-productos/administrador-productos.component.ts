import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';

@Component({
  selector: 'app-administrador-productos',
  templateUrl: './administrador-productos.component.html',
  styleUrls: ['./administrador-productos.component.scss']
})
export class AdministradorProductosComponent {

    productos: Producto[] = []
    modalAbierto: boolean = false;

    constructor(private http: HttpClient) {}

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
}
