import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FncProvider } from '../../services/fnc/fnc';
import { CnxProvider } from '../../services/cnx/cnx';
import { Platform } from '@ionic/angular';

/*
  Generated class for the FncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable({ providedIn: 'root' })

export class ClProvider {

  main={
    ls:[],
    ldn:''
  }
  
  constructor(
    public router: Router,
    public menuCtrl: MenuController,
    public _fnc: FncProvider, 
    public __Rq: CnxProvider,
    private platform: Platform
  ){
    
    this._Ls();

  }

  _setCl_Ld(p=null){

    var r={ slc:null };

    this.main.ldn = 'ok';

    for(let i=0; i<this.main.ls.length; i++) {
      var data = this.main.ls[i];
      if(data.enc == p.sl){
        r.slc = i;
      }else{
        this.main.ls[ i ].hde = 'ok';   
      }
    }

    this.main.ls[ r.slc ].ldn = 'ok';
    return r;

  }  

  _setCl_Rst(p=null){

    for(let i=0; i<this.main.ls.length; i++) {
      var data = this.main.ls[i];
      this.main.ls[ i ].hde = 'no';
      this.main.ls[ i ].ldn = 'no';
    }

  }  
  
  _Go(p=null){ //Selecciona el cliente

    var cl = p.cl;
    var ps = p.ps; // Post To Login

    if( !this._fnc.isN(cl.enc) ){
      
      this._setCl_Ld({ sl:cl.enc });

      if( !this._fnc.isN( this._fnc.getSess("_ses") ) && !this._fnc.isN( this._fnc.getSess("_ses").on )){
        var _ses = this._fnc.getSess("_ses").on.id;
      }else{
        var _ses = null;
      }

      this.__Rq._Rq_Post({ 
        p1:"login_cl",
        data:{ 
          "cl_enc": cl.enc,
          "cl_us": this._fnc.getSess('_us').enc,
          "usdvc_id": this._fnc.getSess('_dvc'),
          "usdvc_tp": ( (this.platform.is("android"))? "android" : "ios" ),
          "uses_enc": _ses
        }
      }).subscribe(
        (data)=>{ 
          
          this._setCl_Rst();

          if( !this._fnc.isN(data)){
          
            if(!this._fnc.isN(data['e']) && data['e'] == 'ok' && !this._fnc.isN( data['id'] )){
              
              this._fnc.setSess({ k:"_cl", v:cl  });
              this.menuCtrl.enable(true);
              
              if( !this._fnc.isN(cl.enc) ){

                var _ses_sve = this._fnc.getSess("_ses");
                
                if( !this._fnc.isN(_ses_sve) ){
                  _ses_sve['ls'][ cl.enc ] = { 'id':data["id"] };
                }else{
                  _ses_sve['ls'][ cl.enc ] = { 'id':data["id"]  };
                } 

                _ses_sve['on'] = { 'id':data["id"] };

                if( !this._fnc.isN(_ses_sve) ){
                  this._fnc.setSess({ k:"_ses", v:_ses_sve  }); 
                }

                this.router.navigateByUrl('/menu/dsh');

              }

            }
            
          }
          
        },
        (error)=>{ 
          
          this._setCl_Rst();

        
        }
      );

    }

  }

  _Ls(p=null){ //Listado de clientes - JSON
    
    try{
      
      if( !this._fnc.isN(this._fnc.getSess("_us")) ){

        this.main.ls=[];
        var _cl = this._fnc.getSess("_us").cl.ls;

        for(let k in _cl){

          var _o = _cl[k];
          var _img = '';
          var _clr = '';
          var _lgo = '';

          if( !this._fnc.isN(_o.img) && !this._fnc.isN(_o.img.th_50) ){
            _img = _o.img.th_50;
          }else if( !this._fnc.isN(_o.img) && !this._fnc.isN(_o.img.th_100) ){
            _img = _o.img.th_100;
          }else{
            _img = '';
          }

          if( !this._fnc.isN(_o.lgo) && !this._fnc.isN(_o.lgo.main) ){
            _lgo = _o.lgo.main;
          }else{
            _lgo = '';
          }

          _clr = '#ccc';

          if( !this._fnc.isN( _o ) ){ 
            if( !this._fnc.isN( _o.tag ) ){ 
              if( !this._fnc.isN( _o.tag.clr ) ){
                if( !this._fnc.isN( _o.tag.clr.main ) ){ 
                  if( !this._fnc.isN( _o.tag.clr.main.v ) ){
                    _clr = _o.tag.clr.main.v;
                  }
                }
              }
            }
          }

          
          this.main.ls[k] = {
            id:_o.id,
            enc:_o.enc,
            nm:_o.nm,
            img:_img,
            lgo:_lgo,
            clr:_clr
          };

        }
        
      }

    }catch(err) {
      console.log(' Error al validar listado de clientes en cl.ts: '+err.message);
    }
  }
  

}
