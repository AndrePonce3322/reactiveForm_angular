import { Component, Input, OnInit , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-probando-on-change-li',
  templateUrl: './probando-on-change-li.component.html',
  styleUrls: ['./probando-on-change-li.component.css']
})
export class ProbandoOnChangeLiComponent implements OnInit, OnChanges{
  @Input() everyCountry!: string;


  mostrarPaises!:string;
  ngOnInit():void{
    this.mostrarPaises = this.everyCountry;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Los cambios han sido estos -> ${changes}`);
  }
  alertaSeleleccion(paisSelelccionado:string){
    this.mostrarPaises = 'Guatemala';
  }

}
