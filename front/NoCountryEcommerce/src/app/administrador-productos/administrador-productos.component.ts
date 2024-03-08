import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../services/estilo-encabezado.service';
import { CrearModificarService } from '../services/crear-modificar.service';
import { AdministrarProductosService } from '../services/administrar-productos.service';

@Component({
  selector: 'app-administrador-productos',
  templateUrl: './administrador-productos.component.html',
  styleUrls: ['./administrador-productos.component.scss']
})
export class AdministradorProductosComponent {

    productos: Producto[] = [];
    productoSeleccionado: Producto | null = null;
    modalAbierto: boolean = false;
    actualizarProductos: boolean = false

    constructor(private http: HttpClient,
                private inicioComponent: InicioComponent,
                private estiloEncabezadoService: EstiloEncabezadoService,
                private crearModificarService: CrearModificarService,
                private administrarProductosService: AdministrarProductosService) {}

    ngDoCheck(): void {
        this.productos = this.administrarProductosService.getProductos()
    }

    ngOnInit(): void {
        if (this.administrarProductosService.getProductos().length === 0) {
            const usuario = 'admin@printopia.com';
            const password = 'Admin123';
    
            const credenciales = btoa(usuario + ':' + password);
    
            const headers = new HttpHeaders({
                'Authorization': 'Basic ' + credenciales
            });
    
            this.http.get<Producto[]>('https://printopia-backend.onrender.com/api/products', { headers }).subscribe((listaProductos: Producto[]) => {
                this.administrarProductosService.agregarProductos(listaProductos);
            });
        }
    }

    abrirModal(): void {
        this.modalAbierto = true;
    }
    cerrarModal(): void {
        this.modalAbierto = false;
        this.productoSeleccionado = null
    }

    productoNuevo() {
        this.crearModificarService.setCrearModificar(true)
    }
    
    editarProducto(producto: Producto): void {
        this.crearModificarService.setCrearModificar(false)
        
        this.productoSeleccionado = producto;
        
        this.abrirModal();
    }

    eliminarProducto(producto: Producto): void {
        const usuario = 'admin@printopia.com';
        const password = 'Admin123';

        const credenciales = btoa(usuario + ':' + password);

        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + credenciales
        });

        this.http.delete(`https://printopia-backend.onrender.com/api/products/${producto.id}`, {headers}).subscribe({
            next: response => {
                console.log("Respuesta del servidor:", response);
            },
            error: error => {
                console.error("Error al enviar los datos:", error);
            }
        });
        this.administrarProductosService.eliminarProducto(producto)
    }

    mostrarInicio(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(false);
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false, false, false);
    }

    mostrarAdministradorProductos(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, false, true, false, false, true, false)
    }
}