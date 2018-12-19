import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import { FncProvider } from '../../providers/fnc/fnc';

/**
 * Generated class for the DshPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dsh',
  templateUrl: 'dsh.html',
})
export class DshPage {

  slides = [
    {
      title: "Bienvenido a SUMR - Picker",
      description: "Este mensaje puede ser personalizado",
      image: "assets/imgs/slide1.png",
    },
    {
      title: "Bienvenido a SUMR - Picker",
      description: "Este mensaje puede ser personalizado",
      image: "assets/imgs/slide2.png",
    },
    {
      title: "Bienvenido a SUMR - Picker",
      description: "Este mensaje puede ser personalizado",
      image: "assets/imgs/slide3.png",
    }
  ];
  
  _cl_clr:string = "primary";

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public menuCtrl: MenuController,
              public _fnc: FncProvider
            ) {
            //this.menuCtrl.enable(false);
            
            if(!_fnc.isN( _fnc.getSess("_cl").sbd )){ //Cambiar color de cliente
              this._cl_clr = _fnc.getSess("_cl").sbd;
            }else{
              this._cl_clr = "primart";
            }

  }

  ionViewDidLoad() {
    
  }

}
