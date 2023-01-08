import { Component } from '@angular/core';

@Component({
  selector: 'app-inputandlist',
  templateUrl: './inputandlist.component.html',
  styleUrls: ['./inputandlist.component.css']
})
export class InputandlistComponent{

  criterio!:string;

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
      this.liSeleccionado = "";
    }
  }
  // Botón de alertar la seleccion
  AlertSelection() {
    alert(`Enviando ${this.liSeleccionado}...`);
  }

}
