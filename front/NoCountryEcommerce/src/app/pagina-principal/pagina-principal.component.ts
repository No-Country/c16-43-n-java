import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../services/estilo-encabezado.service';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent {

    constructor(private inicioComponent: InicioComponent,
                private categoriasService: CategoriasService,
                private estiloEncabezadoService: EstiloEncabezadoService) { }

    mostrarHogar(): void{
        this.categoriasService.setHogar(true)
        this.categoriasService.setProtesisDentales(false)
        this.categoriasService.setCosplay(false)
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false, false, false);
    }

    mostrarProtesisDentales(): void{
        this.categoriasService.setHogar(false)
        this.categoriasService.setProtesisDentales(true)
        this.categoriasService.setCosplay(false)
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false, false, false);
    }

    mostrarCosplay(): void{
        this.categoriasService.setHogar(false)
        this.categoriasService.setProtesisDentales(false)
        this.categoriasService.setCosplay(true)
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false, false, false);
    }

}
