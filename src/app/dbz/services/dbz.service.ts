import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    constructor(){
    }

    private _personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder: 3000
        }, 
        {
          nombre: 'vegeta',
          poder: 1200
        }
      ]

    get personajes(): Personaje[] {
        return [...this._personajes]
    }

    agregarPersonaje( data: Personaje) {
        this._personajes.push(data);
    }
}