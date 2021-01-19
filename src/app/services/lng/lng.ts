import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FncProvider } from '../fnc/fnc';

@Injectable({
  providedIn: 'root'
})
export class LanguageProvider {
 
  constructor(
    private translate: TranslateService,
    public _fnc: FncProvider
  ) { }
 
  getDefaultLanguage(){

    let language = '';

    if( !this._fnc.isN( this._fnc.getSess('_lng') ) ){
      language = this._fnc.getSess('_lng');
    }else if( !this._fnc.isN( this.translate.getBrowserLang() ) ){
      language = this.translate.getBrowserLang();
    }else{
      language = 'es';
    } 

    this.translate.setDefaultLang( language );
    this.setLanguage( language );

    return language;
  
  }
 
  setLanguage(setLang){
    this.translate.use(setLang);
    //this._fnc.setSess({ k:"_lng", v:setLang });
  }


  get(v=null) {
    return this.translate.instant(v);
  }

 
}