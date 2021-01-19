import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataProvider } from '../../services/data/data';
import { FncProvider } from '../../services/fnc/fnc';
import { CnxProvider } from '../../services/cnx/cnx';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ActionSheetController } from '@ionic/angular';
import { WsProvider } from '../../services/ws/ws';

import { Plugins, KeyboardInfo, StatusBarStyle } from '@capacitor/core';
import { ChatPage } from '../chat/chat.page';
import { LanguageProvider } from '../../services/lng/lng';

const { Keyboard } = Plugins;
const { StatusBar } = Plugins;


@Component({
  selector: 'app-chat-cnv',
  templateUrl: './chat-cnv.page.html',
  styleUrls: ['./chat-cnv.page.scss']
})

export class ChatCnvPage implements OnInit {

  public vget:{ us:{ nm:'', ap:'',img:'',enc:'' }, cnv:{ enc:'' },  tp:{ cls:'' } };
  public cnvrmsj_msj:string;
  public cnvrmsj_cnvr:string;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public gd: DataProvider,
    public _fnc: FncProvider,
    public __Rq: CnxProvider,
    private route: ActivatedRoute, 
    private router: Router,
    public _ws: WsProvider,
    public actionSheetController: ActionSheetController,
    private _lng: LanguageProvider
  ) {

      this.gd.set_var_cnv();
      
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.vget = JSON.parse(params.special);
        }
      });

  }

  public _Snd_Msj_Tx(_p=null){
    if( !this._fnc.isN(_p)){
      if( _p == 13 ){
        if( !this._fnc.isN( this.cnvrmsj_msj ) ){
          this._Snd_Msj();
          return false;
        }
      }
    }
  }

  public _Snd_Msj(){
   
    try{

      if(!this._fnc.isN(this.cnvrmsj_msj)){

        this._ws.start();
        this._fnc.showLdr();
        
        this.__Rq._Rq_Post({ 
          p1:"chat", 
          p2:"snd",
          data:{ 
            "cl_enc": this._fnc.getSess("_cl").enc,
            "cl_us": this._fnc.getSess('_us').enc,
            "cnvrmsj_msj": this.cnvrmsj_msj,
            "cnvrmsj_cnvr": this.gd.cnv.enc
          }
        }).subscribe(
          (data)=>{ 
            
            this._fnc.HideLdr(); 

            if(data['e'] == 'ok'){

              this.cnvrmsj_msj = '';
              
              this.bld_msg_add({
                id: data['d']['id'],
                me: data['d']['me'],
                snt: data['d']['snt'],
                tx: data['d']['tx'],
                f: data['d']['f']
              });

            }else{

              this._fnc.showAlert({ "dsc": this._lng.get("conversations.msg_nosnd") });

            }

          },
          (error)=>{ 

            this._fnc.HideLdr() 

          }
        );

      }

    }catch(err){

      console.log("Error en la función api_get_msg: "+err.message);

    }

  }

  public _K_Prss(_p=null){

    if(this.gd.cnv.chnl == 'sumr'){

      var _vl = _p.target.value;

      this._ws.send({
        from: this._fnc.getSess('_us').enc,
        to: this.gd.us.enc,
        service: 'chat',
        action: 'user_writing',
        cnv:{
          id:this.gd.cnv.enc,
          tp:this.gd.cnv.chnl
        }
      });
      
      return _vl;

    }

  }

  private bld_msg_ord(p=null){
    
    var _i=0;
    this.gd.cnv.msg_s = [];

    for(let k in this.gd.cnv.msg_a){
      
      this.gd.cnv.msg_s[_i] = this.gd.cnv.msg_a[k];
      var _date = this.gd.cnv.msg_a[k].f.s1;

      if(!this._fnc.isN( _date )){      
        this.gd.cnv.msg_s[_i].f.s1 = _date.replace( '[rcnt]', this._lng.get('conversations.msg_rcnt') );
      }

      _i++;
    }

    this.gd.cnv.msg_s.sort((a, b) => {
      if(a.f.main > b.f.main){ return -1; }
      if(a.f.main < b.f.main){ return 1; }
      return 0;
    });

  }

  private bld_msg_rfrsh(p=null){ // Coloca imagen al final del grupo de conversaciones

    this.bld_msg_ord();
    this.gd.cnv.msg_s.reverse();

    var _prv_me='';
    var _prv_id='';
    var _tot:number = this.gd.cnv.msg_s.length-1;

    for(let _i in this.gd.cnv.msg_s){

      if((this.gd.cnv.msg_s[ _i ].me != _prv_me && !this._fnc.isN(_prv_id))){
        this.gd.cnv.msg_s[ _prv_id ].glast='ok';
      }else if( !this._fnc.isN(_prv_id) ){
        this.gd.cnv.msg_s[ _prv_id ].glast='no';
      }

      if( (+_i) == _tot){
        this.gd.cnv.msg_s[ _i ].glast='ok';
      }
      
      _prv_id=_i;
      _prv_me=this.gd.cnv.msg_s[ _i ].me;
      
    }  

  }

  private bld_msg_start(p=null){

    this.gd.cnv.rqu.err = null;
      
    if(!this._fnc.isN( p.e ) && p.e == 'ok'){
      this.gd.cnv.rqu.err = '';
    }

    if(!this._fnc.isN( p ) && !this._fnc.isN( p.ls ) && !this._fnc.isN( p.ls.msj )){
      for(let k in p.ls.msj){
        this.gd.cnv.msg_a[k] = p.ls.msj[k];
      }
    }

    this.scrll_to();

  }


  public bld_msg_add(p=null){
    
    try{
      
      if( !this._fnc.isN(p) && !this._fnc.isN(p.id) ){
       
        var _msg = {
          enc: p.id,
          me: p.me,
          snt: p.snt,
          tx: p.tx,
          f: p.f
        };

        this.gd.cnv.msg_a[p.id]=_msg;
        this.bld_msg_rfrsh();
        this.scrll_to();
  
      }else{

        console.error('No all data for new message add');
        console.error('Id:'+p.id);

      }

    }catch(err){

      console.error("Error al recibir mensaje: "+err.message);

    }

  }

  private api_get_msg(p=null){
    
    try{

      if( !this._fnc.isN( p ) && !this._fnc.isN( p.ldr ) ){
        var _ldr='no';
      }else{
        var _ldr='ok';
      }

      if(_ldr == 'ok'){
        this._fnc.showLdr();
      }

      this.__Rq._Rq_Post({ 
        p1:"chat", 
        p2:"cnv_dt",
        data:{ 
          "cl_enc": this._fnc.getSess("_cl").enc,
          "cl_us": this._fnc.getSess('_us').enc,
          "cnv_enc": this.gd.cnv.enc
        }
      }).subscribe(
        (data)=>{ 
          
          this.bld_msg_start(data); 
          
          if(_ldr == 'ok'){ 
            this._fnc.HideLdr(); 
          }

          if( !this._fnc.isN( p ) && !this._fnc.isN( p.evn ) ){
            var _ev = p.evn;
            _ev.target.complete();
          }
          
        },
        (error)=>{ this._fnc.HideLdr(); }
      );

    }catch(err){

      console.log("Error en la función api_get_msg: "+err.message);

    }

  }

  private async scrll_to(){
    this.bld_msg_rfrsh();
    var element = document.getElementById("_Scroll_Btm");
    setTimeout(()=>{ element.scrollIntoView(true)} , 150);
  }
  
  async cnv_opt() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      translucent: true,
      buttons: [
        {
          text: 'Transferir',
          icon: 'git-compare',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cerrar',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {

    if(!this._fnc.isN( this.vget )){

      if(!this._fnc.isN( this.vget.us )){
        if(!this._fnc.isN( this.vget.us.nm )){ this.gd.us.nm = this.vget.us.nm; }
        if(!this._fnc.isN( this.vget.us.ap )){ this.gd.us.ap = this.vget.us.ap; }
        if(!this._fnc.isN( this.vget.us.img )){ this.gd.us.img = this.vget.us.img; }
        if(!this._fnc.isN( this.vget.us.enc )){ this.gd.us.enc = this.vget.us.enc; }
      }

      if(!this._fnc.isN( this.vget.tp ) && !this._fnc.isN( this.vget.tp.cls )){ this.gd.cnv.chnl = this.vget.tp.cls; } 
      if(!this._fnc.isN( this.vget.cnv )){ this.gd.cnv.enc = this.vget.cnv.enc; this.gd.chat.wrt[ this.gd.cnv.chnl ][ this.gd.cnv.enc ] }     
      
      this.api_get_msg();
    }

  }

  ionViewWillEnter(){

    this.gd.cnv.msg_a=[];
    this._ws.start();
    this._fnc._stBar({ e:'lgt' });
    this._fnc.setSess({ k:'_pge', v:{ 'id':'/menu/chat-cnv', data:this.vget }  });

    if(this._ws.isOn()){ // Si el socket esta activo

      this._ws._cnx.onmessage = _p => {  //Escuchando websocket
        
        var _d = JSON.parse(_p.data);

        if(_d.service == 'chat'){

          if(_d.action == 'message_new'){
              
            if(_d.to == this._fnc.getSess('_us').enc){
              this.bld_msg_add(_d);
              this.gd.bld_cnv_add(_d, 'msg');
            }
            
          }else if(_d.action == 'chat_message_sended'){
              
            if(_d.to == this._fnc.getSess('_us').enc){
              this.bld_msg_add(_d);
            }
            
          }else if(_d.action == 'chat_conversation_new'){
              
            if(_d.to == this._fnc.getSess('_us').enc){
              this.gd.bld_cnv_add(_d, 'cnv');
            }
            
          }else if(_d.action == 'user_writing'){
            
            if(this.gd.cnv.chnl == 'sumr'){ // Si es chat interno muestra mensaje 'escribiendo...'
              this.gd.wrtng({ from:_d.from, cnv:_d.cnv.id, chnl:_d.cnv.tp });
            }

          }
        
        }
      
      }
      

    }

  }

  ionViewWillLeave() {
    this.gd.cnv.msg_s = [];
  }

}
