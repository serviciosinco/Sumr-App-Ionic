import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CnxProvider } from '../../services/cnx/cnx';
import { FncProvider } from '../../services/fnc/fnc';
import { AuthProvider } from '../../services/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  _user:String;
  _pss:String;

   
  constructor(
    public _auth: AuthProvider,
    public router: Router,
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public _Rq: CnxProvider,
    public _fnc: FncProvider,
    public _Rte: Router
  ){

    this.menuCtrl.enable(false); //Desactiva el menú

  }


  _ChkLgin(p=null){
    
    if(p.e == "ok"){
      
      if(!this._fnc.isN(p.us)){ 

        var _pge = this._fnc.getSess('_pge');
        this._fnc.setSess({ k:"_us", v:p.us }); 
        this._auth.login();

        if(!this._fnc.isN(p.us.cl) && !this._fnc.isN(p.us.cl.tot) && p.us.cl.tot > 1){
          
          this._Rte.navigateByUrl('/cl');

        }else if( !this._fnc.isN( _pge ) ){
          
          if(_pge.id == 'chat'){
            this.router.navigateByUrl('/menu/chat');
          }else if(_pge.id == 'chat-cnv'){
            this.router.navigateByUrl('/menu/chat');
          }

        }else{ 

          this._fnc.setSess({ k:"_cl", v:p.us.cl.ls[0]  });
          this.router.navigateByUrl('/menu/dsh');

        }      

      }else{

        this._fnc.showAlert({ 'dsc':'No data get on request' });

      } 

    }else{

      this._fnc.showAlert({ "dsc":p.w });
    
    }

    this._fnc.HideLdr();

  }

  _Lgin(){
    if( !this._fnc.isN(this._user) && !this._fnc.isN(this._pss) ){
      this._fnc.showLdr();
      this._Rq._Rq_Get({ 
        p1:"login", 
        get:"&user="+this._user+"&pass="+this._pss+"&dvc="+this._fnc.getSess('_dvc') }).subscribe(
        (data) => { this._ChkLgin(data); },
        (error) => { console.log(error); }
      );
    }else{
      this._fnc.showAlert({ "dsc":"Los campos no pueden estar vacíos" });
      this._fnc.HideLdr();
    }
  }

  LginTxtPss_Entr(_p=null){
    if( !this._fnc.isN(_p) ){
      if( _p == 13 ){
        this._Lgin();
      }
    }
  }

  ngOnInit() { 

  }
  
}
