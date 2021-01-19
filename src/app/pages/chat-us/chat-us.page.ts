import { Component, OnInit, ViewChild } from '@angular/core';

import { FncProvider } from '../../services/fnc/fnc';
import { CnxProvider } from '../../services/cnx/cnx';
import { WsProvider } from '../../services/ws/ws';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-us.page.html',
  styleUrls: ['./chat-us.page.scss'],
  providers: [ WsProvider ]
})

export class ChatUsPage{

  private _us_ls:any = [];
  private _us_ls_vldtr:any = [];
  public items:string[];

  public _Ws_Con_Us:any;
  public _Ws_Con_Ses:any;
  private ws:any;

  public _us_sch_d:any;
  public messages = [];
  public _vldt:any;

  public schChat: boolean = false; 
   
  _cl_img:any = ""; //Imagen del menu por defecto

  constructor(
    public navCtrl: NavController, 
    public _fnc: FncProvider,
    public __Rq: CnxProvider,
    private router: Router,
    private _ws: WsProvider,
    private photoViewer: PhotoViewer
  ) { 
    
    this._Rst_Ls();
    this._vldt = [];


    if( !this._fnc.isN(this._fnc.getSess("_cl")) ) {
      if( !this._fnc.isN(this._fnc.getSess("_cl").img) ){
        this._cl_img = this._fnc.getSess("_cl").img;
      }
    }
  }

  async _Img_View(_p=null){
    this.photoViewer.show(_p);
  }

  private _Rst_Ls(){ //Resetear Lista
    this.items = this._us_ls;
  }

  private _ChkUs(p=null){ //Verificar usuarios
    if(p.e == "ok"){
      for(let k in p.online.list){
        this._us_ls.push( p.online.list[k] );
        this._us_ls_vldtr[p.online.list[k]["enc"]] = "no";
      }
    }else{
      this._fnc.showAlert({ "dsc":p.w });
    }
  }

  //Filtrar datos por buscador
  public getItems(p: any) {
    
    this._Rst_Ls();

    const val = p.tt.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter(
                                      item => item["nm"].toLowerCase().includes(val) || item["nm"].includes(val)
                                      || item["ap"].toLowerCase().includes(val) || item["ap"].includes(val)
                                    );
    }
  }

  private _Rq_Get_This($p=null){
    try{

      this._fnc.showLdr(); //Comienza el loader

      //Peticion API/REST que trae las columnas
      this.__Rq._Rq_Get({ p1:"chat", p2:"us", get:"&cl_enc="+this._fnc.getSess("_cl").enc+"&cl_us="+this._fnc.getSess('_us').enc  }).subscribe(
        (data) => { this._ChkUs(data); this._fnc.HideLdr(); },
        (error) => { console.log(error); this._fnc.HideLdr(); }
      );

    }catch(err){

      console.log(" Error en la función _Rq_Get_This: "+err.message);
      
    }
  }

  public showSearch(){
      this.schChat = !this.schChat;
  }

  private _Slc_Us(p=null){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(p)
      }
    };
    this.router.navigate(['chat-cnv'], navigationExtras);
  }

  ionViewWillEnter() {

    this._ws.start();
  
  }

  ionViewDidEnter(){
    this._Rq_Get_This();
  } 

  ionViewWillLeave() {
    
    

  }

}
