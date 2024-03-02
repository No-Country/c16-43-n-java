import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../estilo-encabezado.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent {

    constructor(private inicioComponent: InicioComponent,
                private estiloEncabezadoService: EstiloEncabezadoService) { }

    mostrarProductos(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    }

}
