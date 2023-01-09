import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ciudades = ["Tegucigalpa",  "San Pedro Sula",  "Choloma",  "La Ceiba",  "El Progreso",  "Comayagua",  "Puerto Cortés",  "San Lorenzo",  "La Lima",  "Danlí",  "Villanueva",  "Choluteca",  "Santa Rosa de Copán",  "Juticalpa",  "Yoro",  "Tocoa",  "La Paz",  "El Paraíso",  "Olancho",  "Potrerillos",  "Tela",  "La Esperanza",  "Intibucá",  "Gracias",  "Valle",  "Nacaome",  "Lempira",  "Marcala",  "Santa Bárbara",  "La Masica",  "El Triunfo",  "La Entrada",  "San Francisco de Yojoa",  "Roatán",  "Trujillo",  "La Masilla",  "Tocontín",  "Trinidad",  "La Unión",  "Gualaco",  "Colón",  "Talanga",  "San Juan Pueblo",  "San Juan de Flores",  "La Paz de Yojoa",  "Santa María",  "Salama",  "La Virtud",  "Sabá",  "San Marcos de Colón"];

  model = {
    nombres: "",
    apellidos: "",
    ciudad: "",
    requisitoEdad: false,
    correo: "",
    comentario: ""
  }
  
  ngOnInit(): void {
    this.ciudades.sort();
    console.clear();
  }


  FormValue(value: any){
    console.log(value);
    alert("Datos enviado correctamente");4
  }

}