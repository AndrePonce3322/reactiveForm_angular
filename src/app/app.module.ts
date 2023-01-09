import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputandlistComponent } from './inputandlist/inputandlist.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ChangemonitorComponent } from './changemonitor/changemonitor.component';

// Pipes
import { pipeFilter } from './pipes/filter.pipe';
import { buscadorPipe } from './pipeBuscador/buscador.pipe';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    InputandlistComponent,
    ListaComponent,
    ChangemonitorComponent,
    pipeFilter,
    buscadorPipe,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
