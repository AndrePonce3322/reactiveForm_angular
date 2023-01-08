import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  paises: string[] = [
    'Honduras',
    'El Salvador',
    'Costa Rica',
    'Panamá',
    'Argentina',
    'Brazil',
    'Guatemala',
    'España'
  ];

  take: string[] = [];

  ngOnInit(): void {
    for (let valores of this.paises) {
      this.take.push(valores);
    }
  }

  vacio!: string;
  mostrarDatosTomados() {
    console.log(`Todos esos datos tomados del array de paises tienen una cantidad de ${this.take.length}`);

    this.vacio = `Todos esos datos tomados del array de paises tienen una cantidad de ${this.take.length}`;
  }

  buscar!: string;

  paisAMonitoriar!: string;
  enviarPais(paisTomado: string) {
    this.paisAMonitoriar = paisTomado;
  }
}
