import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Producto } from '../interfaces/producto.interfaces';
import { CrearModificarService } from '../services/crear-modificar.service';
import { AdministrarProductosService } from '../services/administrar-productos.service';

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
    descripcion: string = '';
    precio: number | null = 0;
    sku: string = '';
    photo: string | null = '';
    modificarCrearProducto: boolean = true
    titulo: string = "Modal";
    @Input() productoSeleccionado: Producto | null = null;
    @Output() productoAgregado = new EventEmitter<Producto>();
    @Output() cerrado = new EventEmitter<void>();
    
    constructor(private http: HttpClient,
                private crearModificarService: CrearModificarService,
                private administrarProductosService: AdministrarProductosService) { }

    ngDoCheck(): void {
        this.modificarCrearProducto = this.crearModificarService.getCrearModificar()
        }

    ngOnInit(): void {
        if (this.productoSeleccionado) {
          this.producto.description = this.productoSeleccionado.description;
          this.producto.price = this.productoSeleccionado.price;
          this.producto.sku = this.productoSeleccionado.sku;
          this.producto.photo = this.productoSeleccionado.photo;
          this.producto.name = this.productoSeleccionado.name;
          this.producto.width = this.productoSeleccionado.width;
          this.producto.height = this.productoSeleccionado.height;
          this.producto.depth = this.productoSeleccionado.depth;
          this.producto.stock = this.productoSeleccionado.stock
          this.producto.barCode = this.productoSeleccionado.barCode
          this.producto.id = this.productoSeleccionado.id
          this.producto.category.id = this.productoSeleccionado.category.id
        }
    }

    agregarProducto() {
        this.productoSeleccionado = null
        
        const usuario = 'admin@printopia.com';
        const password = 'Admin123';
        const credenciales = btoa(usuario + ':' + password);
        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + credenciales
        });

        this.http.post('https://printopia-backend.onrender.com/api/products/create', this.producto, {headers}).subscribe({
                next: response => {
                    console.log("Respuesta del servidor:", response);
                    const productoResponse = response as Producto;
                    this.administrarProductosService.agregarProducto(productoResponse)
                },
                error: error => {
                    console.error("Error al enviar los datos:", error);
                }
            });
    }

    actualizarProducto() {
        const usuario = 'admin@printopia.com';
        const password = 'Admin123';

        const credenciales = btoa(usuario + ':' + password);

        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + credenciales
        });

        const url = 'https://printopia-backend.onrender.com/api/products/update/' + this.producto.id;

        console.log(this.producto.id);
        this.http.post(`https://printopia-backend.onrender.com/api/products/update/${this.producto.id}`, this.producto, {headers}).subscribe({
                next: response => {
                    console.log("Respuesta del servidor:", response);
                    const productoResponse = response as Producto;
                    this.administrarProductosService.actualizarProducto(productoResponse)
                },
                error: error => {
                    console.error("Error al enviar los datos:", error);
                }
            });
        this.crearModificarService.setCrearModificar(true)
    }

    manejarClick() {
        console.log(this.modificarCrearProducto);
        
        if (this.modificarCrearProducto) {
            this.agregarProducto();
        } else {
            this.actualizarProducto();
            this.crearModificarService.setCrearModificar(true)
        }
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
            this.producto.category.id = 1;
            break
        }
      }
}