import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(
    private dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  // Asi es como se emite un output, pero lo cambie por un service
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo)
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }

    console.warn('hey');

  }

}
