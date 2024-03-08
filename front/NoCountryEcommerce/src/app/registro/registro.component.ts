import { Component } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/user.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
    usuario: Usuario = {
        email: '',
        name: '',
        lastName: '',
        password: '',
        locked: false,
        disabled: false,
        role: 'USER'
    };
    confirmacionContrasenia: string = '';
    contraseniasNoCoinciden: boolean = false;
    aceptarTerminos: boolean = false;
    alertaTerminos: boolean = false
    alertaContrasenas: boolean = false
    alertaVacio: boolean = false
    mostrarCarga: boolean = false
    

    constructor(private inicioComponent: InicioComponent,
                private http: HttpClient) { }

    registrar() {
        console.log(this.aceptarTerminos);
        console.log("Contraseñas no coinciden",this.contraseniasNoCoinciden);
        this.alertaTerminos = false
        this.alertaContrasenas = false
        this.alertaVacio = false
        if (this.aceptarTerminos == false) {
            this.alertaTerminos = true
        }
        if (this.contraseniasNoCoinciden) {
            this.alertaContrasenas = true
        }
        if (this.usuario.name.trim() == "" || 
            this.usuario.lastName.trim() == "" ||
            this.usuario.email.trim() == "" ||
            this.usuario.password.trim() == "" ||
            this.confirmacionContrasenia.trim() == "") 
            {
            this.alertaVacio = true
        }
        
        if (this.aceptarTerminos && !this.contraseniasNoCoinciden && !this.alertaVacio) {
            this.mostrarCarga = true;
            this.http.post('https://printopia-backend.onrender.com/api/users/register', this.usuario).subscribe({
                next: response => {
                    console.log("Respuesta del servidor:", response);
                    this.mostrarCarga = false;
                    this.mostrarLogin()
                },
                error: error => {
                    console.error("Error al enviar los datos:", error);
                    this.mostrarCarga = false;
                }
                
            });
        } else {
            console.error("Debes aceptar los términos y condiciones y las contraseñas deben coincidir para registrarte.");
        }
    }
    comprobarContrasenias() {
        this.contraseniasNoCoinciden = this.usuario.password !== this.confirmacionContrasenia;
    }
    mostrarInicio(): void {
        this.inicioComponent.mostrarLogin(true, true, false, true, false, false, false, false, false);
    }

    mostrarLogin(): void {
        this.inicioComponent.mostrarLogin(false, false, false, false, true, false, false, false, false);
    }
}