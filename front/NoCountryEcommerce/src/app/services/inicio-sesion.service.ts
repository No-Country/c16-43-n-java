import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
    inicioSesion: boolean = false;

    setInicioSesion(value: boolean): void {
        this.inicioSesion = value;
    }

    getInicioSesion(): boolean {
        return this.inicioSesion;
    }
}
