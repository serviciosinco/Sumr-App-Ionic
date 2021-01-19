import { Component, OnInit} from '@angular/core';
import { MenuController, NavController} from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { FncProvider } from '../../services/fnc/fnc';
import { AuthProvider } from '../../services/auth/auth';
import { DataProvider } from '../../services/data/data';
import { LanguageProvider } from '../../services/lng/lng';
import { WsProvider } from '../../services/ws/ws';

@Component({
  selector:'app-menu',
  templateUrl:'./menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers: [ WsProvider ]
})

export class MenuPage implements OnInit {
  
  _mnu_img:any = ""; //Imagen del menu por defecto
  _cl_img:any = ""; //Imagen del menu por defecto
  _cl_clr:string = "primary";

  selectedPath='';
  pages=[];
  option=[];

  constructor(
    public _auth: AuthProvider,
    private router:Router,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public gd: DataProvider,
    private _ws: WsProvider,
    private _fnc: FncProvider,
    private _lng: LanguageProvider
  ) { 

    this.pages = [
      { k:"dsh", nm:'menu.dashboard', icon:"dsh", cls:"left", url:'/menu/dsh' },
      { k:"mdl-cnt", nm:'menu.mdl-cnt', icon:"mdl-cnt", cls:"left", url:'/menu/mdl-cnt' },
      { k:"chat", nm:'menu.chat', icon:"chat", cls:"left", url:'/menu/chat' },
      { k:"tra", nm:'menu.tasks', icon:"tra", cls:"left", url:'/menu/tra' },
      { k:"agnd", nm:'menu.schedule', icon:"agnd", cls:"left", url:'/menu/agnd' }
    ];
  
    this.option = [
      { k:"stup", nm:'menu.setup', icon:"stup", url:'/menu/stup', slot:'start' },
      { k:"cl", nvg:'root', icon:'cl rnd', url:'/cl', alrt:{ "tt":'swal.aysure', "dsc":"swal.clchange" }, slot:'end' },
      { k:"sess_off", nvg:'root', icon:"cls rnd", url:'/login', alrt:{ "tt": 'swal.aysure', "dsc":"swal.closesession" }, slot:'end' }
    ];


    if( !this._fnc.isN(this._fnc.getSess("_us")) ) {
      //Imagen del menú
      if( !this._fnc.isN(this._fnc.getSess("_us").img.bg_s) ){
        this._mnu_img = this._fnc.getSess("_us").img.bg_s;
      }else if( !this._fnc.isN(this._fnc.getSess("_us").img.big) ){
        this._mnu_img = this._fnc.getSess("_us").img.big;
      }
    }  

    if( !this._fnc.isN(this._fnc.getSess("_cl")) ) {
      if( !this._fnc.isN(this._fnc.getSess("_cl").img) ){
        this._cl_img = this._fnc.getSess("_cl").img;
      }
    }

  }

  //Mostrar alerta de confirmación
  
  
  ShwPge(p=null){

    if( !this._fnc.isN(p.alrt) ){

      this._fnc.showAlertConfirm({ //Cerrar sesión
        tt: this._lng.get(p.alrt.tt),
        dsc: this._lng.get(p.alrt.dsc)
      }).then((d:any)=>{ 

        if(d.e == "ok"){
          //Tipo de accion dependiendo el Key
          if(p.k == "sess_off"){

            this._fnc.eliSess("_us");
            this._fnc.eliSess("_cl");
            this._auth.logout();

          }else if(p.k == "cl"){

             this._fnc.eliSess("_cl");

          }

          if(!this._fnc.isN(p.nvg) && p.nvg == 'root'){  
            this.navCtrl.navigateRoot(p.url);
          }else{
            this.router.navigateByUrl(p.url);
          }
        }

      });

    }else{

      if(!this._fnc.isN(p.nvg) && p.nvg == 'root'){  
        this.navCtrl.navigateRoot(p.url);
      }else{
        this.router.navigateByUrl(p.url);
      }
      
    }
    
    this.selectedPath = p.url;
    
  }
  
  ngOnInit() {
    if(!this._fnc.isN( this._fnc.getSess("_cl").clr )){ //Cambiar color de cliente
      this._cl_clr = this._fnc.getSess("_cl").clr;
    }

    if(!this._fnc.isN( this._fnc.getSess("_cl").lgo )){ //Cambiar color de cliente
      this._cl_img = this._fnc.getSess("_cl").lgo;
    } 

    if(!this._fnc.isN( this._fnc.getSess("_cl").clr )){ //Cambiar color de cliente
      this._cl_clr = this._fnc.getSess("_cl").clr;
    } 
  }

  ionViewWillEnter() {

    this._ws.start(); 
    
    if(!this._fnc.isN(this._ws)){
      //this._ws.start(); //Conectando WebSocket
    }

  }

}
