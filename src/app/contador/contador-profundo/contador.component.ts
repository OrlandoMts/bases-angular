import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>
    <p>Contador: <span>{{contador}}</span></p>
    <p>La base es: <strong>{{base}}</strong></p>
    <button (click)="acomular(base)">Incrementar el numero</button>
    <button (click)="acomular(-base)">Decrementar el numero</button>
    
    `
})
export class ContadorComponent {
    title = 'Curso de introduccion a Angular';

    contador: number = 0;
    base    : number = 5;

    acomular( valor: number): void {
        this.contador += valor;
    }    
}
