import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ClProvider } from '../../services/cl/cl';
import { FncProvider } from '../../services/fnc/fnc';

@Component({
  selector: 'app-cl',
  templateUrl: './cl.page.html',
  styleUrls: ['./cl.page.scss'],
})

export class ClPage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public _Cl: ClProvider,
    public _fnc: FncProvider
  ) { 
    
    this._Cl._setCl_Rst();

  }

  ngOnInit() {

    this._Cl._Ls();

    if( this._fnc.isN( this._fnc.getSess("_ses") ) ){
      this._fnc.setSess({ k:"_ses", v:{ 'ls':{}, 'on':'' }  });
    }

  }

  ionViewWillEnter() {

    this._fnc._stBar({ e:'lgt' });
    this._Cl._setCl_Rst(); 

  }

  ionViewCanEnter() {
    
  }

}
