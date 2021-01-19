import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular'; //Clase de alertas
import { LoadingController, Platform, ToastController } from '@ionic/angular'; //Clase de Loader
import { Plugins, StatusBarStyle, NetworkStatus } from '@capacitor/core';

//import { Network } from '@ionic-native/network/ngx'; 

const { Network, StatusBar } = Plugins;

@Injectable({ providedIn: 'root' })


export class FncProvider {

  _ldr:any; //Objeto del Loader
  status: NetworkStatus;
  
  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public pltf: Platform,
    public toastCtrl: ToastController
    //public ntWrk: Network
  ){

   

  }

  //Validar el dispositivo Android/Ios
  isPltf(p=null){
    if( this.pltf.is(p) ){
      return true;
    }else{
      return false;
    }
  }

  //Sistema de Loader
  async showLdr() {
    this._ldr = await this.loadingCtrl.create({ //Crea el Loader
      message: "Por favor espere...",
      translucent: true,
      backdropDismiss:true,
      spinner: 'crescent'
    });
    return await this._ldr.present();
  }
  
  //Ocultar Loader
  async HideLdr(){
    return await this._ldr.dismiss();
  }

  async showMsg(p=null) {

    var btn=p.btn;

    if(!this.isN(p.drt)){ var drt=p.drt; }else{ var drt=null; }
    
    const toast = await this.toastCtrl.create({
      color:'dark',
      //header: p.tt,
      message: p.msg,
      position: 'bottom',
      showCloseButton: true,
      duration: drt,
      buttons:btn
    });

    toast.present();

  }

  _chkDvc(){
    if( !this.isN( this.getSess('_dvc') ) ){
      return false;
    }else{
      let _id = Math.random().toString(36);
      this.setSess({ k:'_dvc', v: btoa( _id ) });
    }
  }

  isLab(){

    let platforms = this.pltf.platforms();

    if(platforms[0] == 'core' || platforms[0] == 'mobileweb' || platforms[0] == 'desktop') {
      return true;
    } else {
      return false;
    }

  }

  //Valida que sea vacío
  isN(p=null){
    if(p == null || p == '' || p == undefined || p == 0){
        return true;
    }else{
        return false;
    }
  }

  //Sistema de alertas
  showAlert(p=null){
    const alert = this.alertCtrl.create({
      header: ( (!this.isN(p.tt))? p.tt: 'Opss'),
      message: ( (!this.isN(p.dsc))? p.dsc: 'Tenemos problemas'),
      buttons: ( (!this.isN(p.btn))? [p.btn]: ['Listo'])
    }).then(alert => alert.present());
  }

  //Sistema de alertas - Confirmar

  async showAlertConfirm(p=null) {

    return new Promise( async (rsp) => {
      
      const alert = await this.alertCtrl.create({
        header: ( (!this.isN(p.tt))? p.tt: 'Estas seguro?'),
        message: ( (!this.isN(p.dsc))? p.dsc: 'Deseas realizar esta operación'),
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              rsp({ e:"no", d:p });
            }
          }, {
            text: 'Listo',
            handler: () => {
              rsp({ e:"ok", d:p });
            }
          }
        ]
      });

      await alert.present();

    });

  }

  //Crear Session - LocalStorage
  setSess(p=null){
    localStorage.setItem(p.k, JSON.stringify(p.v));
  }

  //Obtener Session - LocalStorage
  getSess(p:string=null){
    return JSON.parse(localStorage.getItem(p));
  }

  //Eliminar Session - LocalStorage
  eliSess(p=null){
    localStorage.removeItem(p);
  }

  isValidUrl(url=null){
    try{ 
      if( !this.isN(url) ){
        var pattern = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
        if(url.match(pattern)){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    }catch(err){
      console.log("Error al validar url: "+err.message);
      return false;
    }
  }

  _Ld_Img(img=null){
    if( !this.isN(img) && this.isValidUrl(img) ){ //Valida si la URL es correcta
      return img;
    }
  }

  _stBar(p=null){
    if(!this.isN(p) && !this.isLab()){
      if(p.e == 'drk'){
        StatusBar.setStyle({
          style: StatusBarStyle.Dark
        });
      }else if(p.e == 'lgt'){
        StatusBar.setStyle({
          style: StatusBarStyle.Light
        });
      }
    }
  }
  public async __Onl(){

    const _r = await Network.getStatus();

    var __onl = _r.connected; 
    var __onl_speed = _r.connectionType;   
    
    if(__onl == true){
      return true;
    }else if(!__onl){ 	
      return false;	
    }else{
      return false;
    }

  }


  sort(p=null){

    var _data = p.d;
    var _field = p.f;

    _data.sort((a, b) => {

      if(a[_field] > b[_field]){
        return -1;
      }

      if(a[_field] < b[_field]){
        return 1;
      }

      return 0;

    });
  
  }

}
