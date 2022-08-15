import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Iron man';
    edad: number = 45;

    obtenerInfo(): string {
        return `${this.nombre} - ${this.edad}`
    }

    get nombreMayusculas(): string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = "Batman";
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}