import { Component, DoCheck } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { EstiloEncabezadoService } from '../services/estilo-encabezado.service';
import { CategoriasService } from '../services/categorias.service';
import { InicioSesionService } from '../services/inicio-sesion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements DoCheck {
    estiloEncabezado: boolean = true
    inicioSesion: boolean = false

    constructor(private inicioComponent: InicioComponent, 
                private categoriasService: CategoriasService,
                private estiloEncabezadoService: EstiloEncabezadoService,
                private inicioSesionService: InicioSesionService) { }

    ngDoCheck(): void {
        this.estiloEncabezado = this.estiloEncabezadoService.getEstiloEncabezado();
        this.inicioSesion = this.inicioSesionService.getInicioSesion();
        }

    mostrarProductos(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.estiloEncabezado = this.estiloEncabezadoService.getEstiloEncabezado()
        this.categoriasService.setHogar(true)
        this.categoriasService.setProtesisDentales(true)
        this.categoriasService.setCosplay(true)
        this.inicioComponent.mostrarLogin(true, false, true, true, false, false, false);
    }

    mostrarLogin(): void {
        this.inicioComponent.mostrarLogin(false, false, false, false, true, false, false);
    }

    mostrarInicio(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(false);
        this.estiloEncabezado = this.estiloEncabezadoService.getEstiloEncabezado()
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false, false);
    }

    finalizarSesion(): void {
        this.inicioSesionService.setInicioSesion(false)
        this.estiloEncabezadoService.setEstiloEncabezado(false);
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false, false);
    }

    mostrarAdministradorProductos(): void {
        this.estiloEncabezadoService.setEstiloEncabezado(true);
        this.inicioComponent.mostrarLogin(true, false, false, true, false, false, true)
    }

}
