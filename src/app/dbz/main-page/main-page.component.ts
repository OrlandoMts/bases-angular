import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(
    private dbzService: DbzService
  ){}

  nuevo: Personaje = {
    nombre: 'Personaje enviado...',
    poder: 1111
  }

  // Asi lo hice usando @output
  // agregarUnNuevoPersonaje(event: Personaje): void {
  //   this.personajes.push(event);
  //   console.log("Enviado desde el componente hijo AgregarComponent");
  // }

}
