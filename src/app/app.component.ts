import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio01';
  public titulo: string = 'Primer ejemplo de angular';
  public contador: number = 5;

  incrementar ( valor : number) : void {
    this.contador+=valor;
  }

  resetearContador () : void {
    this.contador = 5;
  }
}
