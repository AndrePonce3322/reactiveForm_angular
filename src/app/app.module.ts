import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputandlistComponent } from './inputandlist/inputandlist.component';
import { FormsModule } from '@angular/forms';
import { ProbandoOnChangeLiComponent } from './probando-on-change-li/probando-on-change-li.component';


@NgModule({
  declarations: [
    AppComponent,
    InputandlistComponent,
    ProbandoOnChangeLiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
