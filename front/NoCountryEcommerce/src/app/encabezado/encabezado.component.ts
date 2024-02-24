import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {
  constructor(private inicioComponent: InicioComponent) { }
  
  mostrarLogin(): void {
    // Llama al método mostrarLogin() del componente InicioComponent pasando los valores necesarios
    this.inicioComponent.mostrarLogin(false, false, false, true, false);
  }

}
