import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: Producto[] = []

  constructor() {
    // Agrega 5 elementos al arreglo
    for (let i = 0; i < 4; i++) {
      this.productos.push({
        nombre: 'Nombre del producto ' + (i + 1),
        descripcion: 'Descripción del producto ' + (i + 1),
        link: 'Enlace del producto ' + (i + 1),
        alto: 10, // Por ejemplo, asigna un valor específico
        ancho: 20 // Por ejemplo, asigna un valor específico
      });
    }
  }

}
