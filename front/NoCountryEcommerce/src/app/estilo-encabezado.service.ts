import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstiloEncabezadoService {
    estiloEncabezado: boolean = false;

    setEstiloEncabezado(value: boolean): void {
      this.estiloEncabezado = value;
    }

    getEstiloEncabezado(): boolean {
      return this.estiloEncabezado;
    }
}