import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entrar!:string;
  cambios!:string;

  

  Login(){
    this.entrar = "true";
  }
  exit(){
    this.entrar = "false";
  }

}
