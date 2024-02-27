import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor(private inicioComponent: InicioComponent) { }
    
    mostrarInicio(): void {
        this.inicioComponent.mostrarLogin(true, true, true, false, false);
    }

}
