import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FncProvider } from '../../providers/fnc/fnc'; //Clase de funciones
import { MenuPage } from '../../pages/menu/menu'; //Clase de menú

/**
 * Generated class for the ClPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cl',
  templateUrl: 'cl.html',
})
export class ClPage {

  _cl_ls:Array<any>;

  constructor(
              public navCtrl: NavController, 
              public navPrms: NavParams,
              public _fnc: FncProvider
            ) {
    
    //Listado de clientes - JSON
    try{
      if( !_fnc.isN(navPrms.data.length) ){
        if( !_fnc.isN(navPrms.data.us.cl.ls) ){
          this._cl_ls = navPrms.data.us.cl.ls;
        }
      }else{
        if( !_fnc.isN(this._fnc.getSess("_us")) ){
          this._cl_ls = _fnc.getSess("_us").cl.ls;
        }
      }
    }catch(err) {
      console.log(' Error al validar listado de clientes en cl.ts: '+err.message);
    }

  }

  //Selecciona el cliente
  _Cl_Clk(p=null){
    this._fnc.setSess({ k:"_cl", v:p  });
    this.navCtrl.push(MenuPage, { "":"" });
  }

  ionViewDidLoad() {
    
  }

}
