import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';
import { CategoriasService } from '../services/categorias.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements DoCheck {

    hogar: boolean = true
    protesisDentales: boolean = true
    cosplay: boolean = true
    productos: Producto[] = []
    estiloEncabezadoService: any;
    estiloEncabezado: any;
    productosHogar: Producto[] = []
    productosProtesisDental: Producto[] = []
    productosCosplay: Producto[] = []
    @Output() productoSeleccionado = new EventEmitter<Producto>();

    constructor(private categoriasService: CategoriasService,
                private http: HttpClient,
                private inicioComponent: InicioComponent) {}

    ngOnInit(): void {
        const usuario = 'admin@printopia.com';
        const password = 'Admin123';
        const credenciales = btoa(usuario + ':' + password);
        const headers = new HttpHeaders({
            'Authorization': 'Basic ' + credenciales
        });

        this.http.get<Producto[]>('https://printopia-backend.onrender.com/api/products', { headers }).subscribe((listaProductos: Producto[]) => {
            this.productos = listaProductos
            this.productosHogar = this.productos.filter(productos => productos.category.name == "Hogar")
            this.productosProtesisDental = this.productos.filter(productos => productos.category.name == "Protesis")
            this.productosCosplay = this.productos.filter(productos => productos.category.name == "Cosplay")
        });
    }

    ngDoCheck(): void {
        this.hogar = this.categoriasService.getHogar()
        this.protesisDentales = this.categoriasService.getProtesisDentales()
        this.cosplay = this.categoriasService.getCosplay()
        }

    verProducto(producto: Producto): void {
        this.productoSeleccionado.emit(producto);
        this.inicioComponent.mostrarLogin(true, false, false, true, false, false, false, true, false);
    }
}