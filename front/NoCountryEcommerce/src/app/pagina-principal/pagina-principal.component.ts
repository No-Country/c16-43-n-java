import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../estilo-encabezado.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent {

    constructor(private inicioComponent: InicioComponent,
                private categoriasService: CategoriasService,
                private estiloEncabezadoService: EstiloEncabezadoService) { }

    // mostrarProductos(): void {
    //     this.estiloEncabezadoService.setEstiloEncabezado(true);
    //     this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    // }

    mostrarHogar(): void{
        this.categoriasService.setHogar(true)
        this.categoriasService.setProtesisDentales(false)
        this.categoriasService.setCosplay(false)
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    }

    mostrarProtesisDentales(): void{
        this.categoriasService.setHogar(false)
        this.categoriasService.setProtesisDentales(true)
        this.categoriasService.setCosplay(false)
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    }

    mostrarCosplay(): void{
        this.categoriasService.setHogar(false)
        this.categoriasService.setProtesisDentales(false)
        this.categoriasService.setCosplay(true)
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    }

}
