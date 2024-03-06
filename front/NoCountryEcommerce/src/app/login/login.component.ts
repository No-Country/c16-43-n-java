import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InicioComponent } from '../inicio/inicio.component';
import { InicioSesionService } from '../services/inicio-sesion.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    correo: string = ""
    contrasena: string = ""
    alerta: boolean = false
    alerta2: boolean = false
    administrador: boolean = false
    usuario: boolean = false
    mostrarCarga: boolean = false

    constructor(private inicioComponent: InicioComponent,
                private http: HttpClient,
                private inicioSesionService: InicioSesionService) { }
    
    mostrarInicio(): void {
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false, false);
    }

    mostrarRegistro(): void {
        this.inicioComponent.mostrarLogin(false, false, false, false, false, true, false);
    }

    onSubmit() {
        this.alerta2 = false
        this.alerta = false
        if (this.correo.trim() === '' || this.contrasena.trim() === '') {
            this.alerta = true
            return;
        }

        const datos = {
            email: this.correo,
            password: this.contrasena
          };

          // Aquí puedes enviar datosJSON a tu servidor o realizar otras operaciones con él
        this.mostrarCarga = true;
        this.http.post<any>('https://printopia-backend.onrender.com/api/users/validate', datos).subscribe({
            next: response => {
                if (response == "ADMIN") {
                    this.administrador = true
                    console.log('Bienvenido administrador', this.administrador);
                    this.inicioSesionService.setInicioSesion(true)
                    this.mostrarInicio();
                }
                if (response == "USER") {
                    this.usuario = true
                    console.log('Bienvenido usuario', this.usuario);
                    this.inicioSesionService.setInicioSesion(true)
                    this.mostrarInicio();
                }
                this.mostrarCarga = false
            },
            error: error => {
                if (error.status === 401) {
                    this.alerta2 = true
                  } else {
                    console.error('Error al enviar datos al servidor:', error);
                    // Aquí puedes manejar otros errores de la solicitud HTTP
                  }
                  this.mostrarCarga = false
                }
            });
    }
}