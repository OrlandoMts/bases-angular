import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-bases';

  contador: number = 0;
  base    : number = 5;

  // constructor(){};

  acomular( valor: number): void {
    this.contador += valor;
  }
}
