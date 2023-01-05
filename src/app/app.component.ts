import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paises=[
    'Croasia',
    'Honduras',
    'Panamá',
    'México',
    'Francia'
  ];

  enviarChanges!:string;
  paisSeleccionado(cadaPais:string){
    this.enviarChanges = cadaPais;
  }

}
