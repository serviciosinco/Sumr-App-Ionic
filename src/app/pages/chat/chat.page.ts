import { Component, OnInit, ViewChild } from '@angular/core';
import { FncProvider } from '../../services/fnc/fnc';
import { CnxProvider } from '../../services/cnx/cnx';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { DataProvider } from '../../services/data/data';
import { WsProvider } from '../../services/ws/ws';
import { LanguageProvider } from '../../services/lng/lng';

//import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})

export class ChatPage implements OnInit {


  constructor(
    public navCtrl: NavController,
    public gd: DataProvider, 
    public _ws: WsProvider,
    public _fnc: FncProvider,
    private _lng: LanguageProvider,
    public __Rq: CnxProvider,
    private router: Router,
  ) { 

    

  }

  async _Img_View(_p=null){
    //this.photoViewer.show(_p);
  }

  private _Rfsh_Ls(p=null){
    this.ws_act();
    this.api_get_cnv(p);
  }

  private bld_cnv_start(p=null){ //Verificar usuarios

    this.gd.chat.cnv_a = [];
    this.gd.chat.rqu.err = null;
      
    if(!this._fnc.isN( p.e ) && p.e == 'ok'){
      this.gd.chat.rqu.err = '';
    }

    if(!this._fnc.isN( p ) && !this._fnc.isN( p.ls )){
      for(let k in p.ls){
        this.gd.chat.cnv_a[k] = p.ls[k];
      }
    }

    this.gd.bld_cnv_ord();
    
  }

  //Filtrar datos por buscador
  private getItems(p: any) {
    
    const val = p.tt.target.value;
    
    if (val && val.trim() != '') {

      this.gd.chat.cnv_s = this.gd.chat.cnv_s.filter(
                                                        item => item["nm"].toLowerCase().includes(val) || 
                                                        item["us"]["nm"].includes(val) || 
                                                        item["us"]["ap"].toLowerCase().includes(val) || 
                                                        item["us"]["ap"].includes(val)
                                                    );
    }

  }

  private api_get_cnv(p=null){

    try{

      this._fnc.__Onl().then( isOn => { 

        if(isOn){

          if( !this._fnc.isN( p ) && !this._fnc.isN( p.ldr ) && p.ldr == 'no'){
            var _ldr='no';
          }else{
            var _ldr='ok';
          }

          if(_ldr == 'ok'){ this._fnc.showLdr(); } //Comienza el loader

          if(!this._fnc.isN( this.gd.chat.rqu.cnx )){
            this.gd.chat.rqu.cnx.unsubscribe();
          }

          this.gd.chat.rqu.cnx = this.__Rq._Rq_Post({ 
                                    p1:"chat",
                                    p2:"cnv",
                                    data:{ 
                                      "cl_enc": this._fnc.getSess("_cl").enc,
                                      "cl_us": this._fnc.getSess('_us').enc,
                                      "chnl":this.gd.chat.chnl_tp
                                    }
                                  }).subscribe(

                                    (data)=>{
                                      
                                      if(_ldr == 'ok'){ this._fnc.HideLdr(); }

                                      if( !this._fnc.isN(data) && data['e'] == 'ok'){

                                        this.bld_cnv_start( data );
                                        
                                        if( !this._fnc.isN( p ) && !this._fnc.isN( p.evn ) ){
                                          var _ev = p.evn;
                                          _ev.target.complete();
                                        }

                                        this.gd.chat.rqu.cnx = null;

                                      }

                                    },
                                    (error)=>{ 

                                      this._fnc.HideLdr(); 
                                      this.gd.chat.rqu.cnx = null;

                                    }
                                  ); 
        }else{
          
          this._fnc.showMsg({ msg:this._lng.get('noicnx') });

        }

      }).catch(e =>{

        console.log( e );
  
      });
        
    }catch(err){

      console.log(" Error en la función api_get_cnv: "+err.message);
      
    }
    
  }

  filterChnl(item){
    
    item.active = !(item.active); //Cambia la clase del item seleccionado
    var _chnl_slc = [];

    for(let k in this.gd.chat.channels){
      if( this.gd.chat.channels[k]["active"] ){ //Valida si existe algun item seleccionado y lo agrega al arreglo
        _chnl_slc.push("'"+this.gd.chat.channels[k]["cls"]+"'");
      }
    }

    /* Envia arreglo con item activados ó envía todo */
    if(_chnl_slc.length > 0 ){
      this.gd.chat.chnl_tp = [];
      this.gd.chat.chnl_tp = _chnl_slc;
    }else{
      this.gd.chat.chnl_tp = ['all'];
    }

    this.api_get_cnv();

  }

  public showSearch(){
      this.gd.chat.sch = !this.gd.chat.sch;
  }

  public showNew(){
    this.router.navigate(['chat-us']);
  }

  private cnv_go(p=null){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(p)
      }
    };
    this.router.navigate(['/menu/chat-cnv'], navigationExtras);
  }


  public ws_act(){

    this._ws.start(); 

    if(this._ws.isOn()){ // Si el socket esta activo

      this._ws._cnx.onmessage = _p => {

        var _d = JSON.parse(_p.data);
        
        if(_d.service == 'chat'){

          if(_d.action == 'user_writing' && !this._fnc.isN(_d.cnv) ){

            this.gd.wrtng({ from:_d.from, cnv:_d.cnv.id, chnl:_d.cnv.tp });

          }else if(_d.action == 'message_new'){

            this.gd.bld_cnv_add(_d, 'msg');
          
          }else if(_d.action == 'chat_conversation_new' || _d.action == 'chat_conversation_change'){

            this.gd.bld_cnv_add(_d, 'cnv');
            
          }else if( _d.action == 'chat_conversation_closed' ){

            this.gd.bld_cnv_rmv(_d, 'cnv');

          }

        }    

      }

    }

  }


  ngOnInit() {
    this.api_get_cnv();
  }

  ionViewWillEnter(){

    this.ws_act();
    this._fnc._stBar({ e:'lgt' });
    this._fnc.setSess({ k:'_pge', v:{ 'id':'/menu/chat' } });

  }

  ionViewWillLeave() {
    
  }

}
