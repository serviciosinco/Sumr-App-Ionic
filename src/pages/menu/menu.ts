import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { ListPage } from '../../pages/list/list';
import { DshPage } from '../../pages/dsh/dsh';
import { HomePage } from '../../pages/home/home';
import { ClPage } from '../../pages/cl/cl';

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

  rootDsh: any = DshPage;
  pages:Array<any>;
  navv:any;

  constructor(
              public navCtrl: NavController, 
              public menuCtrl: MenuController,
              public _fnc: FncProvider
            ) {
    //Items del menu
    this.pages = [
      { nm: 'Tareas', icon:"alarm", cls:"left", pge: ListPage },
      { nm: 'Cambiar cliente', icon:"undo", cls:"no", pge: ClPage },
      { nm: 'Cerrar sessión', icon:"key", cls:"no", pge: HomePage, alrt:{ "tt":"Estas seguro(a)", "dsc":"Deseas cerrar sesión?" } }
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
          this._fnc.eliSess("_us");
          this._fnc.eliSess("_cl");
          this.navCtrl.push(p.pge);
        }
      });
    }else{
      this.navCtrl.push(p.pge);
    }

  }



  ionViewDidLoad() {
    
  }

}
