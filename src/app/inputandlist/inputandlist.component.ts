import { Component } from '@angular/core';

@Component({
  selector: 'app-inputandlist',
  templateUrl: './inputandlist.component.html',
  styleUrls: ['./inputandlist.component.css']
})
export class InputandlistComponent{

  criterio!:string;

  // Variables utilizadas
  ciudades: string[] = [
    "Nueva York",
    "Londres",
    "Paris",
    "Moscú",
    "Tokio",
    "Sídney",
    "México DF",
    "Toronto",
    "San Francisco",
    "Los Ángeles",
    "Miami"
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
    alert(`¡Enviando ${this.liSeleccionado} correctamente a la base de datos!`);
  }

}
