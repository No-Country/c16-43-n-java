import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-agregar-productos',
    templateUrl: './agregar-productos.component.html',
    styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent {

    
    @Output() cerrado = new EventEmitter<void>();
    titulo: string = "Modal";
    
    constructor(private http: HttpClient) { }



    cerrarModal(): void {
        this.cerrado.emit();
    }
    detenerPropagacion(event: MouseEvent): void {
        event.stopPropagation();
    }

}

// registrar() {
//     console.log(this.aceptarTerminos);
//     console.log("Contraseñas no coinciden",this.contraseniasNoCoinciden);
//     this.alertaTerminos = false
//     this.alertaContrasenas = false
//     this.alertaVacio = false
//     if (this.aceptarTerminos == false) {
//         this.alertaTerminos = true
//     }
//     if (this.contraseniasNoCoinciden) {
//         this.alertaContrasenas = true
//     }
//     if (this.usuario.name.trim() == "" || 
//         this.usuario.lastName.trim() == "" ||
//         this.usuario.email.trim() == "" ||
//         this.usuario.password.trim() == "" ||
//         this.confirmacionContrasenia.trim() == "") 
//         {
//         this.alertaVacio = true
//     }
    
//     if (this.aceptarTerminos && !this.contraseniasNoCoinciden) {
//         this.mostrarCarga = true;
//         this.http.post('https://printopia-backend.onrender.com/api/users/register', this.usuario).subscribe({
//             next: response => {
//                 console.log("Respuesta del servidor:", response);
//                 this.mostrarCarga = false;
//                 this.mostrarLogin()
//             },
//             error: error => {
//                 console.error("Error al enviar los datos:", error);
//                 this.mostrarCarga = false;
//             }
            
//         });
//     } else {
//         console.error("Debes aceptar los términos y condiciones y las contraseñas deben coincidir para registrarte.");
//     }
// }
