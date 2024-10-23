import { NgModule } from "@angular/core";
import { HeroComponent } from "./Hero/hero.component";
import { ListaComponent } from "./Lista/lista.component";
import { CommonModule } from "@angular/common";

@NgModule ({
    declarations: [
        HeroComponent,
        ListaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroComponent,
        ListaComponent
    ]
})

export class HeroesComponente {

}