import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';
import { NONE_TYPE } from '@angular/compiler';

@Component({
    selector: 'app-agregar-productos',
    templateUrl: './agregar-productos.component.html',
    styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent {
    
    producto: Producto = {
        id: null,
        name: "",
        description: "",
        type: "PHYSICAL",
        sku: "string",
        barCode: "",
        weight: null,
        height: null,
        width: null,
        depth: null,
        showInStore: true,
        isPromotional: null,
        price: null,
        promotionPrice: null,
        stock: null,
        photo: null,
        category: {
            id: null,
            name: "",
            description: ""
            }
    }

    
    @Output() cerrado = new EventEmitter<void>();
    titulo: string = "Modal";
    
    constructor(private http: HttpClient) { }

    // mostrarCategoria() {
    //   console.log(this.producto.category.id);
    // }
    

    agregarProducto() {
        
        const usuario = 'admin@printopia.com';
        const password = 'Admin123';

        const credenciales = btoa(usuario + ':' + password);

    // Crea el encabezado de autorización
        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + credenciales
        });

        console.log(this.producto);
        this.http.post('https://printopia-backend.onrender.com/api/products/create', this.producto, {headers}).subscribe({
                next: response => {
                    console.log("Respuesta del servidor:", response);
                },
                error: error => {
                    console.error("Error al enviar los datos:", error);
                }
            });
    }

    cerrarModal(): void {
        this.cerrado.emit();
    }
    detenerPropagacion(event: MouseEvent): void {
        event.stopPropagation();
    }
    onCategoryChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        const optionValue = target.value;
        switch (optionValue) {
          case 'opcion1':
            this.producto.category.id = 1;
            break;
          case 'opcion2':
            this.producto.category.id = 2;
            break;
          case 'opcion3':
            this.producto.category.id = 3;
            break;
          default:
            this.producto.category.id = null; // Manejo de caso por defecto
        }
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
