import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearModificarService {
  modificarCrearProducto: boolean = true
  
    setCrearModificar(value: boolean): void {
      this.modificarCrearProducto = value;
    }
    getCrearModificar(): boolean {
      return this.modificarCrearProducto;
    }
}
