import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CnxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class CnxProvider {

  constructor(public http: HttpClient) {
  }

  private  __url = "https://api.sumrdev.com/login/";
  private  __a = "&__a=zqPZWZ7Pre";
  private  __k = "&__k=b2c8aeda2bc8adc231272bac69b0117cd528e4bf";
  private  __p = "&__p=010662a4cdd1271dc2c1bde883afe3044719a26c";
  private  __p1 = "&_p1=login";
  private  __u = "&__u=fbermudez@servicios.in";

  public _Rq_Get(p=null){

    let _rnd = "?Rnd="+Math.random();
    let _usr = "&user="+p._user;
    let _pss = "&pass="+p._pss;

    return this.http.get(this.__url+_rnd+this.__a+this.__k+this.__p+this.__p1+this.__u+_usr+_pss);
  }

  public _Rq_Post(p=null){
    let _rnd = "?Rnd="+Math.random(); //Random para cache
    
    let postData = new FormData();
    postData.append('key', 'value');
    
    return this.http.post(this.__url+_rnd, { postData });
  }

}
