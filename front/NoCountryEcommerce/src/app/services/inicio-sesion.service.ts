import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
    inicioSesion: boolean = true;

    setInicioSesion(value: boolean): void {
        this.inicioSesion = value;
    }

    getInicioSesion(): boolean {
        return this.inicioSesion;
    }
}
