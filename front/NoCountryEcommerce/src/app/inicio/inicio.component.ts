import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

    @Output() mostrarLoginEvent = new EventEmitter<void>();

    paginaPrincipal: boolean = true
    encabezado: boolean = true
    piePagina: boolean = true
    login: boolean = false
    registro: boolean = false

    mostrarLogin(paginaPrincipal: boolean, encabezado: boolean, piePagina: boolean, login: boolean, registro: boolean): void {
      this.paginaPrincipal = paginaPrincipal;
      this.encabezado = encabezado;
      this.piePagina = piePagina;
      this.login = login;
      this.registro = registro;
    }
}
