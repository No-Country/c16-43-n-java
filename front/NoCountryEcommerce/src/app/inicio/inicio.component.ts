import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

    @Output() mostrarLoginEvent = new EventEmitter<void>();

    encabezado: boolean = true
    paginaPrincipal: boolean = true
    productos: boolean = false
    piePagina: boolean = true
    login: boolean = false
    registro: boolean = false
    administradorProductos: boolean = false
    detalleProducto: boolean = false
    productoElegido: Producto | null = null;

    mostrarLogin(encabezado: boolean,
                 paginaPrincipal: boolean,
                 productos: boolean,
                 piePagina: boolean,
                 login: boolean,
                 registro: boolean,
                 administradorProductos: boolean,
                 detalleProducto: boolean): void {
            this.paginaPrincipal = paginaPrincipal;
            this.encabezado = encabezado;
            this.piePagina = piePagina;
            this.login = login;
            this.registro = registro;
            this.productos = productos;
            this.administradorProductos = administradorProductos;
            this.detalleProducto = detalleProducto;
            }

    onProductoSeleccionado(producto: Producto): void {
        this.productoElegido = producto;
}
}
