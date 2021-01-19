import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FncProvider } from '../../services/fnc/fnc';
import { LanguageProvider } from '../../services/lng/lng';

@Injectable({ providedIn: 'root' })

export class DataProvider {
  
  public cl = {
    logo:'', //Imagen del menu por defecto
  };

  public us = {
    nm:'',
    ap:'',
    enc:'',
    img:''
  };
  
  public cnv = {
    enc:'',
    rqu:{ err:'' },
    msg_a:[], // Data Array
    msg_s:[], // Dara to Show
    chnl:''
  };

  public chat = {
    wrt:{
      eml:[],
      whtsp:[],
      fb:[],
      ins:[],
      sumr:[]
    },
    cnv_a:[], //Listado de conversaciones en array
    cnv_s:[], //Listado de conversaciones to show
    sch:false,
    channels:[],
    rqu:{
      cnx:null,
      err:null
    },
    cnv_ls:[], //Listado de conversaciones
    cnv_ls_pos:[], //Posicion del usuario en la lista
    cnv_ls_tx:'', //Ultimo conversation mostrado en la lista
    cnv_ls_pos_count:0, //Posicion del usuario en la lista
    chnl_tp:['all'], //Tipo de filtro, Wahtsapp, Sumr, Facebook,
    
  };  

  constructor( public router: Router, public menuCtrl: MenuController, public _fnc: FncProvider, private _lng: LanguageProvider){ 

    if( !this._fnc.isN(this._fnc.getSess("_cl")) ) {
      if( !this._fnc.isN(this._fnc.getSess("_cl").img) ){
        this.cl.logo = this._fnc.getSess("_cl").img;
      }
    }

    this.chat.channels = [
        { nm:'Email', cls:"eml", active:false },
        { nm:'WhatsApp', cls:"whtsp", active:false },
        { nm:'Facebook Messenger', cls:"fb", active:false },
        { nm:'Instagram', cls:"ins", active:false },
        { nm:'SUMR', cls:"sumr", img:this.cl.logo, active:false }
    ];

  }

  public set_var_cnv(p=null){
    this.cnv = {
      enc:'',
      rqu:{ err:'' },
      msg_a:[], // Data Array
      msg_s:[], // Dara to Show
      chnl:''
    };
  }

  public bld_cnv_ord(p=null){

    var _i=0;
    this.chat.cnv_s = [];

    for(let k in this.chat.cnv_a){
      
      this.chat.cnv_s[_i] = this.chat.cnv_a[k];
      var _date = this.chat.cnv_a[k].msj_lst.f.s1;

      if(!this._fnc.isN( _date )){      
        this.chat.cnv_s[_i].msj_lst.f.s1 = _date.replace( '[rcnt]', this._lng.get('conversations.msg_rcnt') );
      }

      _i++;
    }

    this.chat.cnv_s.sort((a, b) => {
      if(a.msj_lst.f.main > b.msj_lst.f.main){ return -1; }
      if(a.msj_lst.f.main < b.msj_lst.f.main){ return 1; }
      return 0;
    });
  
  }


  public bld_cnv_add(p=null,t=null){
    
    try{
      
      if( !this._fnc.isN(p) && !this._fnc.isN(p.id) ){
        
        if(t == 'cnv'){

          var _o = {
            enc: p.cnv.id,
            tp: p.tp,
            msj_lst:p.msj_lst,
            us: p.us
          }; 

          this.chat.cnv_a[p.cnv.id]=_o;

        }else if(t == 'msg'){

          if( !this._fnc.isN( this.chat.cnv_a[p.cnv.id] ) ){

            this.chat.cnv_a[p.cnv.id].msj_lst.tx = p.tx;
            this.chat.cnv_a[p.cnv.id].msj_lst.f = p.f;

          }else{
            
            var _c = {
              enc: p.cnv.id,
              tp: p.cnv.tp,
              msj_lst:{
                tx:p.tx,
                f:p.f,
                msj:p.tx,
              },
              us: p.us
            }; 
  
            this.chat.cnv_a[p.cnv.id]=_c;

          }
           
        }
        
        this.bld_cnv_ord(); console.log( this.chat.cnv_s ); console.log( this.chat.cnv_a );

      }

    }catch(err){

      console.error("Error al recibir conversation: "+err.message);

    }

  }


  public bld_cnv_rmv(p=null,t=null){
    
    try{
      
      if(p.to == this._fnc.getSess('_us').enc){
        if( !this._fnc.isN(p) && !this._fnc.isN(p.cnv) && !this._fnc.isN(p.cnv.id) ){   

          console.log(p.cnv.tp);
          console.log(p.cnv.id);
          console.log(this.chat.cnv_a);

          delete this.chat.cnv_a[p.cnv.id];
          this.bld_cnv_ord();
        }
      }

    }catch(err){

      console.error("Error al recibir conversation: "+err.message);

    }

  }


  public wrtng(p=null){

    var from = p.from;
    var cnv = p.cnv;
    var chnl = p.chnl;

    if( from != this._fnc.getSess('_us').enc){ 
                
      this.chat.wrt[ chnl ][ cnv ] = "ok";
      let sTmeO = setTimeout( () => {
        this.chat.wrt[ chnl ][ cnv ] = "no";
      }, 5000);

    }else{
      this.chat.wrt[ chnl ][ cnv ] = "no";
    }

  }

}
