import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputandlistComponent } from './inputandlist/inputandlist.component';
import { FormsModule } from '@angular/forms';
import { NgOnChangePruebaComponent } from './ng-on-change-prueba/ng-on-change-prueba.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    InputandlistComponent,
    NgOnChangePruebaComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
