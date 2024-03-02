import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private inicioComponent: InicioComponent) { }
    
    mostrarInicio(): void {
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false);
    }

    mostrarRegistro(): void {
        this.inicioComponent.mostrarLogin(false, false, false, false, false, true);
    }

}