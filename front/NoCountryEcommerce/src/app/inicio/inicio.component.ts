import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
    paginaPrincipal: boolean = true
    encabezado: boolean = true
    piePagina: boolean = true
    login: boolean = false

    mostrarLogin(): void {
        this.paginaPrincipal = false
        this.encabezado = false
        this.piePagina = false
        this.login = true
    }
}
