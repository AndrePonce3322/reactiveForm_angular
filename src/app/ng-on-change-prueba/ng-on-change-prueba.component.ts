import { Component , Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ng-on-change-prueba',
  templateUrl: './ng-on-change-prueba.component.html',
  styleUrls: ['./ng-on-change-prueba.component.css']
})
export class NgOnChangePruebaComponent implements OnChanges{

  @Input() cambio!:string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
