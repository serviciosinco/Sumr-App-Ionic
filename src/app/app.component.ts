import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ClPage } from '../pages/cl/cl';

import { FncProvider } from '../providers/fnc/fnc';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  constructor(
              public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public _fnc: FncProvider
            ) {

    try{
      if( !_fnc.isN(this._fnc.getSess("_cl")) && !_fnc.isN(this._fnc.getSess("_us")) ){
        if( !_fnc.isN(this._fnc.getSess("_cl").enc) && !_fnc.isN(this._fnc.getSess("_us").enc) ){
          console.log(" Ninguno esta vacío - Menu principal ");
          this.rootPage = MenuPage;
        }
      }else if( !_fnc.isN(this._fnc.getSess("_us")) ){
        if( !_fnc.isN(this._fnc.getSess("_us").enc) ){
          console.log(" Solo tiene usuario - Lista cliente ");
          this.rootPage = ClPage;
        }
      }else{
        this.rootPage = HomePage;
        console.log(" Todos estan vacios - Login ");
      }
    }catch(err) {
      console.log(' Error al validar session en app.component.ts: '+err.message);
    }

    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
