import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-agregar-productos',
    templateUrl: './agregar-productos.component.html',
    styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent {

    @Output() cerrado = new EventEmitter<void>();
    titulo: string = "Modal";

    cerrarModal(): void {
        this.cerrado.emit();
    }
    detenerPropagacion(event: MouseEvent): void {
        event.stopPropagation();
    }
}
