import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'detectarbusqueda'
})

export class pipeFilter implements PipeTransform{



    transform(value: string[], args: string):string[] {

        let resultado: string[] = [];

        for(const valores of value){
            if(valores.indexOf(args) != 1){
                resultado = [...resultado, valores];
            }
        }
        return resultado
    } 
} 