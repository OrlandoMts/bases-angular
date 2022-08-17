import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 3000
    }, 
    {
      nombre: 'vegeta',
      poder: 1200
    }
  ]

  nuevo: Personaje = {
    nombre: 'Personaje enviado...',
    poder: 1111
  }

  agregarUnNuevoPersonaje(event: Personaje): void {
    this.personajes.push(event);
    console.log("Enviado desde el componente hijo AgregarComponent");
  }

}
