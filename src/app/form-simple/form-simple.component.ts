import { Component } from '@angular/core';

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.css']
})
export class FormSimpleComponent {
  // Edad en modo falso
  model = {
    edad: false
  }

  enviarDatos(formValue: any) {
    console.clear();
    console.log(formValue);
    alert(`
      Datos enviados correctamente!
      Nombre: ${formValue.nombre}
      Mayor de edad: ${formValue.edad}
    `);

  }
}
