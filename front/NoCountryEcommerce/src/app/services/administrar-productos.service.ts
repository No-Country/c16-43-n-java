import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdministrarProductosService {
    productos: Producto[] = [];

    getProductos(): Producto[] {
        return this.productos;
    }

    agregarProductos(productos: Producto[]): void {
        this.productos.push(...productos);
    }

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    eliminarProducto(producto: Producto): void {
        this.productos = this.productos.filter(p => p.id !== producto.id);
    }

    actualizarProducto(producto: Producto): void {
        const index = this.productos.findIndex(p => p.id === producto.id);

        if (index !== -1) {
            this.productos[index] = producto;
        }
    }
}