import { Component, Input } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent {
    @Input() producto: Producto | null = null;
}
