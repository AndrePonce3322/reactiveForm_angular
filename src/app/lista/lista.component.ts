import { Component} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{

  paises=[
    'Honduras',
    'El Salvador',
    'Costa Rica',
    'Panamá',
    'Argentina',
    'Brazil',
    'Guatemala',
    'España'
  ];

  paisAMonitoriar!:string;
  enviarPais(paisTomado: string){
    this.paisAMonitoriar = paisTomado;
  }
}
