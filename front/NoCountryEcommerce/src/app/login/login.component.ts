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
    administrador: boolean = false
    usuario: boolean = false

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
        if (this.correo.trim() === '' || this.contrasena.trim() === '') {
            this.alerta = true
            return;
          }
          this.alerta = false

        const datos = {
            email: this.correo,
            password: this.contrasena
          };

          // Aquí puedes enviar datosJSON a tu servidor o realizar otras operaciones con él

        this.http.post<any>('https://printopia-backend.onrender.com/api/users/validate', datos).subscribe({
            next: response => {
                if (response == "ADMIN") {
                    this.administrador = true
                    console.log('Bienvenido administrador', this.administrador);
                    this.inicioSesionService.setInicioSesion(true)
                }
                if (response == "USER") {
                    this.usuario = true
                    console.log('Bienvenido usuario', this.usuario);
                    this.inicioSesionService.setInicioSesion(true)
                }
            },
            error: error => {
                if (error.status === 401) {
                    console.log(error.status);
                  } else {
                    console.error('Error al enviar datos al servidor:', error);
                    // Aquí puedes manejar otros errores de la solicitud HTTP
                  }
                }
            });
    }
}