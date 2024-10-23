import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Captain Marvel';
  public age : number = 45;
  public heroeName : string[] = ["Captain America", "Iron Man", "Thor", "Hulk", "Black Widow", "War Machine", "Rocket", "Okoye", "M'Baku", "Nebula", "Falcon", "Bucky", "Black Panther", "Groot", "Scarlet Witch", "Star-Lord", "Drax", "Mantis", "Doctor Strange", "Spider-Man"];
  public lastHeroeErased : string | undefined = '';

  get capitalizedName () : string {
    return this.name.toUpperCase();
  }

  getheroDescription () : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero () : void {
    let randomIndex : number = Math.floor(Math.random() * this.heroeName.length);
    //this.name = this.name === 'Ironman'? 'Iron deficiency man':'Ironman';
    this.name = this.heroeName[randomIndex];
  }

  changeAge () : void {
    this.age = this.age === 45? 24:45;
  }

  reset () : void {
    this.name = 'Captain Marvel';
  }

  pop () : void {
    this.lastHeroeErased = this.heroeName.pop();
  }

  getLastheroeBorrado () : String | undefined {
    if(this.lastHeroeErased === '') return "No se ha borrado nada";
    else if(this.lastHeroeErased === 'Falcon') return "Último héroe borrado: " + this.lastHeroeErased + " | A partir de aquí no se muere nadie."
    return "Último héroe borrado: " + this.lastHeroeErased;
  }
}
