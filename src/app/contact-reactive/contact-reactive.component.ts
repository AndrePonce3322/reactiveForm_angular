import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent {
  takeDates(valores: any){
    alert(`
    Datos ->
    Nombre: ${valores.name}
    Ciudad: ${valores.ciudad}
    Mayor de edad: ${valores.edad}
    `);
  }
}
