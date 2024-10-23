import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>Hola mundo</h1>
    <p>Texto: {{ titulo }}</p>
    <p>Contador: {{ contador }}</p>
    
    <button (click)="incrementar(1)" >+1</button>
    <button (click)="resetearContador()" >Reset</button>
    <button (click)="incrementar(-1)" >-1</button>`
})

export class ContadorComponente {
    constructor() { }

    public titulo: string = 'Segundo componente ejemplo de angular';
    public contador: number = 5;
  
    incrementar ( valor : number) : void {
      this.contador+=valor;
    }
  
    resetearContador () : void {
      this.contador = 5;
    }

}