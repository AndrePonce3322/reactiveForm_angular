import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputandlistComponent } from './inputandlist/inputandlist.component';
import { ListaComponent } from './lista/lista.component';
import { ChangemonitorComponent } from './changemonitor/changemonitor.component';

// Pipes
import { pipeFilter } from './pipes/filter.pipe';
import { buscadorPipe } from './pipeBuscador/buscador.pipe';
import { FormularioComponent } from './formulario/formulario.component';
import { FormSimpleComponent } from './form-simple/form-simple.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';

// Formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputandlistComponent,
    ListaComponent,
    ChangemonitorComponent,
    pipeFilter,
    buscadorPipe,
    FormularioComponent,
    FormSimpleComponent,
    ContactReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
