import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnxProvider } from '../../services/cnx/cnx';
import { FncProvider } from '../../services/fnc/fnc';

@Component({
  selector: 'app-mdl-cnt-dt',
  templateUrl: './mdl-cnt-dt.page.html',
  styleUrls: ['./mdl-cnt-dt.page.scss'],
})
export class MdlCntDtPage implements OnInit {

  public mdlcnt = { enc:'', cnt_nm:'', cnt_ap:'', mdl_nm:'', est:{est_tt:'', est_enc:'', slc:{show:false}, ls:[]} };

  constructor(
    private route: ActivatedRoute,
    private __Rq: CnxProvider,
    private _fnc: FncProvider
    ) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        let _p = JSON.parse(params.special);
        this.mdlcnt.enc = _p.enc;
      }

    });

  }

  _Slc_Est_Shw($p=null){
    this.mdlcnt.est.slc.show = !this.mdlcnt.est.slc.show;
  }

  _Slc_Est($p=null){
    if( !this._fnc.isN($p.detail.value) ){
      this._fnc.showLdr(); //Comienza el loader
      if( !this._fnc.isN(this.mdlcnt.enc) ){
        this.__Rq._Rq_Post({ 
          p1:"mdl_cnt", 
          p2:"mdl_cnt_est",
          data:{ 
            "cl_enc": this._fnc.getSess("_cl").enc,
            "cl_us": this._fnc.getSess("_us").enc,
            "mdlcnt_enc": this.mdlcnt.enc,
            "siscntest_enc": $p.detail.value,
            "tp":"upd"
          }
        }).subscribe(
          (data)=>{ this._fnc.HideLdr(); },
          (error)=>{ console.log("error"); console.log(error);
          }
        );
      }
    }
  }

  private _ChkMdlCnt(p=null){ //Verificar usuarios
    if(p.e == "ok"){
      if(!this._fnc.isN(p.tot) && p.tot > 0 && !this._fnc.isN(p.ls)){
        let _p = p.ls[this.mdlcnt.enc];
        this.mdlcnt.cnt_nm = _p.cnt_nm;
        this.mdlcnt.cnt_ap = _p.cnt_ap;
        this.mdlcnt.mdl_nm = _p.mdl_nm;
        this.mdlcnt.est.est_tt = _p.est_tt;
        this.mdlcnt.est.est_enc = _p.est_enc;
        
        //Listado de estados
        if( !this._fnc.isN(_p.est_ls) ){
          for(let v in _p.est_ls){
            this.mdlcnt.est.ls.push(_p.est_ls[v]);
          }
        }
        
      }
    }else{
      this._fnc.showAlert({ "dsc":p.w });
    }
  }

  

  ngOnInit() {
    this._fnc.showLdr(); //Comienza el loader

    if( !this._fnc.isN(this.mdlcnt.enc) ){
      this.__Rq._Rq_Post({ 
        p1:"mdl_cnt", 
        p2:"mdl_cnt",
        data:{ 
          "cl_enc": this._fnc.getSess("_cl").enc,
          "cl_us": this._fnc.getSess("_us").enc,
          "mdlcnt_enc": this.mdlcnt.enc,
          "tp":"dt"
        }
      }).subscribe(
        (data)=>{
          this._fnc.HideLdr();
          this._ChkMdlCnt(data);
        },
        (error)=>{ 
          console.log("error");
          console.log(error);
        }
      );
    }
  }

  ionViewDidLeave(){
    delete this.mdlcnt;
  }

}
