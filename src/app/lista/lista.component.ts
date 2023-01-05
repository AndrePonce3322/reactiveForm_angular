import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnChanges{
  @Input() contryChanges!:string;

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }  

}
