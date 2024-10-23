import { NgModule } from "@angular/core";
import { ContadorComponente } from "./app.component";

@NgModule({
    declarations: [
        ContadorComponente
    ],

    exports: [
        ContadorComponente
    ]
}) 

export class CounterModule {

}
