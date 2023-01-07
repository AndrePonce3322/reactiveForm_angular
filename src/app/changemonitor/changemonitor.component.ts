import { Component, Input, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-changemonitor',
  templateUrl: './changemonitor.component.html',
  styleUrls: ['./changemonitor.component.css']
})
export class ChangemonitorComponent implements OnChanges{

  @Input() cambiosDeSeleccionPais!:string;
  @Input() cambiosDeCiudad!:string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Cambios detectados :) ->`, changes);
  }
}
