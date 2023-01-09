import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'detectarbusqueda'
})

export class pipeFilter implements PipeTransform{

    transform(value: string[], args: string):string[] {

        if(args == null || args== undefined ){
            return value;
        }
        let resultado: string[] = [];

        for(let valores of value){
            if(valores.toLowerCase().indexOf(args.toLowerCase()) != -1){
                // Añadir al resultado los valores de la lista que se encuentran en args
                resultado.push(valores);
            }
        }
        return resultado;
    } 
} 