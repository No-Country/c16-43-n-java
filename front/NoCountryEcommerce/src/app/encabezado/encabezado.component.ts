import { Component, DoCheck } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../estilo-encabezado.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements DoCheck {
    estiloEncabezado: boolean = false

    constructor(private inicioComponent: InicioComponent, 
                private categoriasService: CategoriasService,
                private estiloEncabezadoService: EstiloEncabezadoService) { }

    ngDoCheck(): void {
        this.estiloEncabezado = this.estiloEncabezadoService.getEstiloEncabezado();
        }

    mostrarProductos(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.estiloEncabezado = this.estiloEncabezadoService.getEstiloEncabezado()
        this.categoriasService.setHogar(true)
        this.categoriasService.setProtesisDentales(true)
        this.categoriasService.setCosplay(true)
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false);
    }

    mostrarLogin(): void {
        this.inicioComponent.mostrarLogin(false, false, false, false, true, false);
    }

    mostrarInicio(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(false);
        this.estiloEncabezado = this.estiloEncabezadoService.getEstiloEncabezado()
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false);
    }

}
