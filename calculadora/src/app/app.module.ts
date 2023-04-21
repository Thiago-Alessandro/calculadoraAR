import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { botaoModule } from './botao/botao.module';
import { calculadoraModule } from './calculadora/calculadora.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    botaoModule,
    calculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
