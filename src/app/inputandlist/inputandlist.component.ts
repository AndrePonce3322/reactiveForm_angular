import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-inputandlist',
  templateUrl: './inputandlist.component.html',
  styleUrls: ['./inputandlist.component.css']
})
export class InputandlistComponent implements OnChanges {

  @Input() detectarCambio!: string;

  // Detectar cambios en los <li>
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Los cambios han sido estos ->", changes)
  }

  // Variables utilizadas
  ciudades = [
    'Nueva York',
    'Londres',
    'París',
    'Tokio',
    'Hong Kong',
    'Dubai'
  ];
  liSeleccionado!: string;
  cityAgregada!: string;

  // Funciones: 

  // Agregar la clase seleccionada
  seleccion(seleccion: string) {
    this.liSeleccionado = seleccion;
    this.detectarCambio = seleccion;
    console.log(this.detectarCambio);
  }
  // Limpiar la seleccion
  Clear() {
    this.liSeleccionado = '';
  }
  // Agregando ciudades con input
  enviarCiudad(ciudad: string) {
    if (ciudad == '' || ciudad == undefined) {
      console.log("Sin argumentos");
    } else {
      this.ciudades.push(ciudad);
      this.cityAgregada = "";
    }
    if (ciudad == "clear") {
      this.ciudades = [];
    }
  }
  // Botón de alertar la seleccion
  AlertSelection() {
    alert(`Enviando ${this.liSeleccionado}...`);
  }

}
