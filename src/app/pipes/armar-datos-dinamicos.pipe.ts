import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'armarDatosDinamicos',
  pure: false
})
export class ArmarDatosDinamicosPipe implements PipeTransform {

  transform(dato: any): any {
    let array = [];
    for (let clave in dato) 
    {
        array.push({ clave: clave, valor: dato[clave]});
    }
    return array;
  }

}
