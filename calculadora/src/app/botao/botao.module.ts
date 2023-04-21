import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { botaoComponente } from "./botao.component";

@NgModule({

    declarations: [
        botaoComponente
    ],
    imports:[
        CommonModule
    ],
    exports:[
        botaoComponente
    ]
})

export class botaoModule{
    
}