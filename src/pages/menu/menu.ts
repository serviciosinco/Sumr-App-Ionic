import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, MenuController } from 'ionic-angular';

import { DcRdrPage } from '../../pages/dc-rdr/dc-rdr';
import { DshPage } from '../../pages/dsh/dsh';
import { HomePage } from '../../pages/home/home';
import { ClPage } from '../../pages/cl/cl';
import { TraColPage } from '../tra-col/tra-col';

import { FncProvider } from '../../providers/fnc/fnc';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = ClPage;

  rootDsh: any = DshPage;
  pages:Array<any>;
  _mnu_img:any = "../../assets/imgs/ionic.jpeg"; //Imagen del menu por defecto
  _cl_img:any = "../../assets/imgs/ionic.jpeg"; //Imagen del menu por defecto

  constructor(
              public navCtrl: NavController, 
              public menuCtrl: MenuController,
              public _fnc: FncProvider
            ) {

    //Imagen del menú
    if( !this._fnc.isN(this._fnc.getSess("_us").img.bg_s) ){
      this._mnu_img = this._fnc.getSess("_us").img.bg_s;
    }else if( !this._fnc.isN(this._fnc.getSess("_us").img.big) ){
      this._mnu_img = this._fnc.getSess("_us").img.big;
    }

    if( !this._fnc.isN(this._fnc.getSess("_cl").img.th_50) ){
      this._cl_img = this._fnc.getSess("_cl").img.th_50;
    }else if( !this._fnc.isN(this._fnc.getSess("_cl").img.th_100) ){
      this._cl_img = this._fnc.getSess("_cl").img.th_100;
    }

    //Items del menu //Ejemplo { k:"Llave", nm:"Nombre", icon:"Icono", "cls":"Cerrar Menu", pge:"Pagina destino", alrt:"Llamar funcion de alertas" }
    this.pages = [
      { k:"tra", nm: 'Tareas', icon:"alarm", cls:"left", pge: TraColPage },
      { k:"tra", nm: 'Lector de documentos', icon:"barcode", cls:"left", pge: DcRdrPage },
      { k:"cl", nm: 'Cambiar cliente', icon:"undo", cls:"no", pge: ClPage, alrt:{ "tt":"Estas seguro(a)", "dsc":"Deseas cambiar de cliente?" } },
      { k:"sess_off", nm: 'Cerrar sessión', icon:"key", cls:"no", pge: HomePage, alrt:{ "tt":"Estas seguro(a)", "dsc":"Deseas cerrar sesión?" } }
    ];

  }

 //Mostrar alerta de confirmación
  ShwPge(p=null){

    if( !this._fnc.isN(p.alrt) ){
      this._fnc.showAlertConfirm({ //Cerrar sesión
        tt:p.alrt.tt, 
        dsc:p.alrt.dsc
      }).then((d:any)=>{
        if(d.r == "ok"){

          //Tipo de accion dependiendo el Key
          if(p.k == "sess_off"){
            this._fnc.eliSess("_us");
            this._fnc.eliSess("_cl");
          }else if(p.k == "cl"){
             this._fnc.eliSess("_cl");
          }
          
          this.nav.push(p.pge);
          //this.navCtrl.push(p.pge); //Cambia de pagina

        }
      });
    }else{
      this.navCtrl.push(p.pge); //Cambia de pagina
    }

  }



  ionViewDidLoad() {
    
  }

}
