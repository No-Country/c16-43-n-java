import { Component, Input } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {
    productos: boolean = false

    constructor(private inicioComponent: InicioComponent) { }
    
    mostrarLogin(): void {
        this.inicioComponent.mostrarLogin(false, false, false, false, true, false);
    }

    mostrarProductos(): void {
        this.productos = true
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    }

    mostrarInicio(): void {
        this.productos = false
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false);
    }

}
