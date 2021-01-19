import { Component } from '@angular/core';
import { Config, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { DataProvider } from 'src/app/services/data/data';
import { WsProvider } from 'src/app/services/ws/ws';
import { FncProvider } from 'src/app/services/fnc/fnc';
import { ClProvider } from 'src/app/services/cl/cl';
import { AuthProvider } from 'src/app/services/auth/auth';
import { LanguageProvider } from 'src/app/services/lng/lng';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {
  
  public pge_start = '';
  
  constructor(
    public _auth: AuthProvider,
    public config: Config,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router : Router,
    public gd: DataProvider,
    private _ws: WsProvider,
    public _fnc: FncProvider,
    public _Cl: ClProvider,
    public _lng: LanguageProvider,
    private translate: TranslateService
  ) {

    try{

      _fnc._stBar({ e:'drk' });
      _fnc._chkDvc();
      
      if( !_fnc.isN(this._fnc.getSess("_cl")) && !_fnc.isN(this._fnc.getSess("_us")) ){

        this._auth.login();

        var _pge = this._fnc.getSess('_pge'); console.log( _pge );
  
        if( !this._fnc.isN( _pge ) && !this._fnc.isN(_pge.id)){
          
          if(!this._fnc.isN(_pge.data)){
            var navigationExtras: NavigationExtras = {
              queryParams: {
                special: JSON.stringify(_pge.data)
              }
            };
          }

          if( _pge.id == '/menu/chat-cnv'){
            if(!this._fnc.isN(_pge.data) && !this._fnc.isN(this.gd.cnv)){
              this.router.navigate([_pge.id], navigationExtras);
            }else{
              this.router.navigate(['/menu/chat']);
            }
          }else{
            this.router.navigate([_pge.id]);
          }   
        
        }else if( !_fnc.isN(this._fnc.getSess("_cl").enc) && !_fnc.isN(this._fnc.getSess('_us').enc) ){

          this._Cl._Go({ cl:this._fnc.getSess("_cl")  });

        }

      }else if( !_fnc.isN(this._fnc.getSess("_us")) ){
        
        this._auth.login();
        
        if( !_fnc.isN(this._fnc.getSess('_us').enc) ){
          //console.log(" Solo tiene usuario - Lista cliente ");
          this.pge_start = '/cl';
        }
        
      }else{
        this.pge_start = '/login';
        //console.log(" Todos estan vacios - Login ");
      }

    }catch(err) {

      //console.log(' Error al validar session en app.component.ts: '+err.message);
      
    }

    this.initializeApp();

  }

  initializeApp() {
    
      this.getPlatformInfo();

      this.platform.ready().then(() => {
          
        this._lng.getDefaultLanguage();

          if( !this._fnc.isN( this.pge_start) ){
            this.router.navigateByUrl(this.pge_start);
          }

      });
  }

  


  private getPlatformInfo() {
    if(this.platform.is('android')){
      this.config.set('mode', 'md'); 
    }else if(this.platform.is('ios')){
      this.config.set('mode', 'ios');
    }else{
      //this.config.set('mode', 'ios');
    }
  }

}
