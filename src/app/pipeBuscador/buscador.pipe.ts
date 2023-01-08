import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'buscadorInput'
})

export class buscadorPipe implements PipeTransform{
    transform(value: string[], args: string) {

        if(args == null || args == undefined){
            return value
        }
        let resultadoDeLaLista: string[] = [];

        for(let lista of value){
            if(lista.toLowerCase().indexOf(args.toLowerCase()) != -1){
                resultadoDeLaLista.push(lista);
            }
        }
        return resultadoDeLaLista
    }
}

