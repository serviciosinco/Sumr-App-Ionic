import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular'; //Clase de alertas
import { LoadingController } from 'ionic-angular'; //Clase de Loader

import { Platform } from 'ionic-angular';

/*
  Generated class for the FncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FncProvider {

  _ldr:any; //Objeto del Loader

  constructor(
              public http: HttpClient, 
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public pltf: Platform
            ) {

  }

  //Validar el dispositivo Android/Ios
  isPltf(p:string=null){
    if( this.pltf.is(p) ){
      return true;
    }else{
      return false;
    }
  }

  //Sistema de Loader
  showLdr() {
    this._ldr = this.loadingCtrl.create({ //Crea el Loader
      content: "Por favor espere...",
      dismissOnPageChange: true
    });
    this._ldr.present(); //Inicia el Loader
  }

  //Valida que no sea vacío
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
      title: ( (!this.isN(p.tt))? p.tt: 'Opss'),
      subTitle: ( (!this.isN(p.dsc))? p.dsc: 'Tenemos problemas'),
      buttons: ( (!this.isN(p.btn))? [p.btn]: ['Listo'])
    });
    alert.present();
  }

  //Sistema de alertas - Confirmar
  showAlertConfirm(p=null) {

    return new Promise((rsp) => {
      
      const confirm = this.alertCtrl.create({
        title: ( (!this.isN(p.tt))? p.tt: 'Estas seguro?'),
        message: ( (!this.isN(p.dsc))? p.dsc: 'Deseas realizar esta operación'),
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              rsp({ r:"no", d:p });
            }
          },
          {
            text: 'Listo',
            handler: () => {
              rsp({ r:"ok", d:p });
            }
          }
        ]
      });
      confirm.present();

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

}
