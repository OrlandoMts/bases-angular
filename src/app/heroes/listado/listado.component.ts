import { Component } from "@angular/core";

@Component ({
    selector: 'app-listado',
    templateUrl: 'listado.component.html'
})

export class ListadoComponent {
    heroes: string[] = ['spiderman', 'batman', 'la mujer maravilla', 'iron-man'];
    heroeBorrado: string = '';

    borrarHeroe(): void {
        console.log('Borrando')
        this.heroeBorrado = this.heroes?.pop() || '';    //Revisar, quitar el ? 
    }
}