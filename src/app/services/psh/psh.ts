import { Injectable } from '@angular/core';
import { FncProvider } from '../fnc/fnc';
import { Platform } from '@ionic/angular';

import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';
import { CnxProvider } from '../cnx/cnx';

const { PushNotifications } = Plugins;

@Injectable()

export class PshProvider {

  constructor(
    public _fnc: FncProvider,
    public __Rq: CnxProvider,
    private platform: Platform
  ) { 

  }
  
  PshScss(p=null){

    //this._fnc.showAlert({ 'tt':'PshScss', "dsc":JSON.stringify(p) });
    if(p.e == 'ok' && !this._fnc.isN(p.token)){
      this._fnc.setSess({ k:'_pshtkn', v:p.token });
    }

  }

  initPushNotification(p=null){

    if( this.platform.is("android") || this.platform.is("ios") ){
      
      // On succcess, we should be able to receive notifications
      try{

          PushNotifications.register();

          PushNotifications.addListener('registration', 
            (token: PushNotificationToken) => {
              
              if( this._fnc.isN( this._fnc.getSess('_pshtkn') ) ){
                
                this._fnc.showAlert({ 'tt':'Notification', "dsc":token.value });
                
                this.__Rq._Rq_Post({
                  p1:"dvc", 
                  p2:"dvc_psh",
                  data:{ 
                    "cl_enc": this._fnc.getSess('_cl').enc,
                    "cl_us": this._fnc.getSess('_us').enc,
                    "uses_enc": this._fnc.getSess('_ses').on.id,
                    "usdvc_id": this._fnc.getSess('_dvc'),
                    "usdvc_tkn": token.value,
                    "usdvc_tp": ( (this.platform.is('android')) ? 'android' : 'ios' )
                  }
                }).subscribe(
                  (data)=>{ 
                    this.PshScss(data); 
                  },
                  (error)=>{ 
                    console.log("<<<<<<<<<< Error: "); 
                    console.log(error); console.log(">>>>>>>>>>"); 
                  }
                );

              }

            }
            
          );
          
        
      }catch(err) {
        console.log('Error al crear token '+err.message);
      }

      // Some issue with our setup and push will not work
      PushNotifications.addListener('registrationError', 
        (error: any) => {
          this._fnc.showAlert({ 'tt':'Error Registration', "dsc":JSON.stringify(error) });
        }
      );

      // Show us the notification payload if the app is open on our device
      PushNotifications.addListener('pushNotificationReceived', 
        (notification: PushNotification) => {
          this._fnc.showAlert({ 'tt':'Get Push', "dsc":JSON.stringify(notification) });
          console.log(notification);
        }
      );

      // Method called when tapping on a notification
      PushNotifications.addListener('pushNotificationActionPerformed', 
        (notification: PushNotificationActionPerformed) => {
          
          this._fnc.showAlert({ 'tt':'Push action performed:', "dsc":JSON.stringify(notification) });

          PushNotifications.removeDeliveredNotifications;

        }
      );

    }
    
  }

}