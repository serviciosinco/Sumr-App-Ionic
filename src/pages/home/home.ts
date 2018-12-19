import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CnxProvider } from './../../providers/cnx/cnx';  //Clase de ApiRest
import { FncProvider } from '../../providers/fnc/fnc'; //Clase de funciones
import { ClPage } from '../../pages/cl/cl'; //Clase cliente
import { MenuPage } from '../../pages/menu/menu'; //Clase Menu

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _user:String;
  _pss:String;

  constructor(
              public navCtrl: NavController, 
              public menuCtrl: MenuController,
              public __Rq: CnxProvider,
              public _fnc: FncProvider
            ) {
    this.menuCtrl.enable(false); //Desactiva el menú
  }

  _ChkLgin(p=null){
    if(p.e == "ok"){
      this._fnc.setSess({ k:"_us", v:p.us });
      this.navCtrl.push(ClPage, p);
    }else{
      this._fnc.showAlert({ "dsc":p.w });
    }
    this._fnc._ldr.dismiss();
  }

  _Lgin(){

    this._fnc.showLdr();

    if( !this._fnc.isN(this._user) && !this._fnc.isN(this._pss) ){
      this.__Rq._Rq_Get({ pml:"login", get:"&user="+this._user+"&pass="+this._pss }).subscribe(
        (data) => { this._ChkLgin(data); },
        (error) => { console.log(error); }
      );
    }else{
      this._fnc.showAlert({ "dsc":"Los campos no pueden estar vacíos" });
      this._fnc._ldr.dismiss(); //Finaliza el Loader
    }

   //this.navCtrl.push(ClPage); //Ingresar sin validar

  }
}
