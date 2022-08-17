import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  // Solia recibir los personajes asi desde main-page pero lo cambie por un service
  // @Input() personajes: Personaje[] =[];

  constructor(
    private dbzService: DbzService
  ) { }

  // implementando el service
  get personajes(): Personaje[] {
    return this.dbzService.personajes
  }

  ngOnInit(): void {
  }

}
