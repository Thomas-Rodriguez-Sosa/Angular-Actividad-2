import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundBlockDirective } from './round-block.directive';
import { ListaAComponent } from './lista-a/lista-a.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundBlockDirective,
    ListaAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
