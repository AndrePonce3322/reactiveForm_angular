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
        args = args.normalize('NFD');

        for(let valores of value){
            // Sin acentos
            valores = valores.normalize('NFD');

            if(valores.toLowerCase().indexOf(args.toLowerCase()) != -1){
                resultado.push(valores);
            }
        }
        return resultado;
    } 
} 