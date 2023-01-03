import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void{
    let modoOscuro = window.matchMedia("(prefers-color-schema: dark)");
    if(modoOscuro.matches){
      console.log("Modo oscuro detectado");
    }else{
      console.log("Modo oscuro desactivado");
    }
  }
}
