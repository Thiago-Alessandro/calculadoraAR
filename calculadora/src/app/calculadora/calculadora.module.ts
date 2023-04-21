import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { calculadoraComponent } from "./calculadora.component";
import { botaoModule } from "../botao/botao.module";

@NgModule({
    declarations:[
        calculadoraComponent
    ],
    imports:[
        CommonModule,
        botaoModule
    ],
    exports:[
        calculadoraComponent
    ]
})

export class calculadoraModule{

}