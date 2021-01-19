import { Pipe, PipeTransform } from '@angular/core';
import { FncProvider } from '../services/fnc/fnc';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  constructor(
    private _fnc: FncProvider
  ) { }

  transform(arreglo: any[], texto: string, col1: string, col2: string): any[] {
    
    try{
      if( this._fnc.isN(texto) || texto === '' ){
        return arreglo;
      }

      texto = texto.toLowerCase();
      return arreglo.filter( item => {
          return item[col1].toLowerCase().includes(texto) ||
          item[col2].toLowerCase().includes(texto)
        }
      );
    }catch(err){
      console.log("Error en filtro: "+err.message);
    }
  }

}
