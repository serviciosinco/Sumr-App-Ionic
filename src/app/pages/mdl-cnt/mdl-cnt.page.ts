import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInput } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { FncProvider } from '../../services/fnc/fnc';
import { CnxProvider } from '../../services/cnx/cnx';

@Component({
  selector: 'app-mdl-cnt',
  templateUrl: './mdl-cnt.page.html',
  styleUrls: ['./mdl-cnt.page.scss'],
})

export class MdlCntPage implements OnInit {

  @ViewChild( IonInfiniteScroll ,{static:false} ) infiniteScroll: IonInfiniteScroll;
  @ViewChild('sch', {static:false})  sch: IonInput;

  public _mdl_cnt = {
    ls_vldtr:[],
    ls_itms:[],
    ls_pgs_row:0,
    _cl_img:'',
    channels:[],
    _sch_shw:false,
    _sch_tt:''
  };

  constructor(
    public navCtrl: NavController,
    private _fnc: FncProvider,
    private router: Router,
    public __Rq: CnxProvider,
  ) {
  }

  ngOnInit() {
  }

  //Ver detalle del lead
  private _Slc_Mdl_Cnt(p=null){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(p)
      }
    };
    this.router.navigate(['/menu/mdl-cnt-dt'], navigationExtras);
  }

  private _ChkMdlCnt(p=null){ //Verificar leads
    if(p.e == "ok"){
      if(!this._fnc.isN(p.tot) && p.tot > 0 && !this._fnc.isN(p.ls)){
        for(let k in p.ls){
          this._mdl_cnt.ls_itms.push( p.ls[k] );
        }

        if( !this._fnc.isN( p.pgs_row_f ) ){
          this._mdl_cnt.ls_pgs_row = p.pgs_row_f;
        }
      }
    }else{
      //this._fnc.showAlert({ "dsc":p.w });
    }
  }
  
  getItemsNew(event) {
    setTimeout(() => {

      this._Rq_Post().then((p)=>{
        if( !this._fnc.isN(p["e"]) ){
          event.target.complete();
          /*event.target.disabled = true;*/
          /*this.infiniteScroll.disabled = true;*/
        }
      });

    }, 1000);
  }

  //Filtrar datos por buscador
  private getItems(p: any) {
    this._mdl_cnt._sch_tt = p.tt.target.value; //Valor buscado
    this._mdl_cnt.ls_itms = []; this._mdl_cnt.ls_pgs_row = 0; //Limpiar lista
    this._Rq_Post().then((p)=>{ //Peticion - API-REST
      if( p["e"] == "ok" ){
        this.infiniteScroll.disabled = false;
      }else{
        this.infiniteScroll.disabled = true;
      }
    });
  }

  public _ShwSrch(){
      this._mdl_cnt._sch_shw = !this._mdl_cnt._sch_shw;
      
      if(this._mdl_cnt._sch_shw){ //Auto focus del search
        setTimeout(() => {
          this.sch.setFocus();
        }, 400);
      }
  }

  private _Rq_Post(p=null){
    
    this._fnc.showLdr(); //Comienza el loader
    return new Promise((resolve, reject) => {
      this.__Rq._Rq_Post({ 
        p1:"mdl_cnt", 
        p2:"mdl_cnt",
        data:{ 
          "cl_enc": this._fnc.getSess("_cl").enc,
          "cl_us":this._fnc.getSess("_us").enc,
          "tp":"all",
          "pgs_row":this._mdl_cnt.ls_pgs_row, //Contador para infinite-scroll
          "cnt_nm_fl":this._mdl_cnt._sch_tt //Buscador de leads
        }
      }).subscribe( //Peticion que trae el listado
        (data)=>{ 
          resolve(data);
          this._ChkMdlCnt(data);
          this._fnc.HideLdr();
        },
        (error)=>{ 
          reject(error);
          console.log(error);
        }
      );
    });
    
  }

  ionViewWillEnter() {

    this._mdl_cnt.ls_itms = []; //Limpiar lista
    this._mdl_cnt.ls_pgs_row = 0;

    this._Rq_Post();

    this._mdl_cnt.channels = [
      { nm:'Email', cls:"eml", active:false },
      { nm:'WhatsApp', cls:"whtsp", active:false },
      { nm:'Facebook Messenger', cls:"fb", active:false },
      { nm:'Instagram', cls:"ins", active:false },
      { nm:'SUMR', cls:"sumr", img:this._mdl_cnt._cl_img, active:false }
    ];

  }

}
