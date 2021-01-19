import { Environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { FncProvider } from '../fnc/fnc';
import { LanguageProvider } from '../lng/lng';

@Injectable()
export class WsProvider{

  //public static messages: Subject<Message>;
  
  //public _Ws_Con_Us:any;
  //public _Ws_Con_Ses:any;
  _cnx: WebSocket;
  _try;

  constructor( public http:HttpClient, public gd: DataProvider, public _fnc:FncProvider, private _lng: LanguageProvider,) {
    this._try = 0;
  }

  public _conn(){

    var _Ws_Con_Ses = this._fnc.getSess("_ses").on.id;
    var _Ws_Con_Us = this._fnc.getSess('_us').enc;
    this._cnx = new WebSocket(Environment.WS_ENDPOINT+'?_us='+ _Ws_Con_Us + '&_ses='+ _Ws_Con_Ses );

    this._cnx.onopen = _p => {
      this._try = 1;
      this.alve();
    }
    
    this._cnx.onclose = _p => {
      
      if( this._fnc.__Onl() && this._try < 10){

        let sTmeO = setTimeout( () => {
          
          this._try++;
          this._conn();

        }, 5000);
        
      }else{

        this._fnc.showMsg({ msg:this._lng.get('noicnx') });

      }

    };
    
  }

  public send(_p=null){
    this._cnx.send(JSON.stringify(_p));
  }

  public close(){ 
    this._cnx.close();
    this._cnx=null;
  }

  public start(){ 
    if( !this.isOn() ){
      this._conn();
    }
  }


  public isOn(){ // If socket is opened check
   
    if( this._fnc.isN( this._cnx )){
      console.log('Websocket service is NULL 💀');  
      return false; 
    }else{
      return true;
    }

  }


  public alve(){

    if (!this._cnx) return;
    if (this._cnx.readyState !== 1) return;
    this._cnx.send('0');

    let sTmeO = setTimeout( () => {      
      this.alve();
    }, 5000);

  }


  ionViewWillEnter() {
    
  }

}
