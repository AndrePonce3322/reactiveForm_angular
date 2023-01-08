import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Mostrar los valores del form en consola
  tomarValores(formValue: any){
    alert(`¡Datos enviado correctamente!`);
    console.log(formValue);
  }

}
