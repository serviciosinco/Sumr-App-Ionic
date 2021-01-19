import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FncProvider } from '../fnc/fnc';
import { Environment } from '../../../environments/environment';

/*
  Generated class for the CnxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable({ providedIn: 'root' })

export class CnxProvider {

  constructor(private http: HttpClient, public _fnc: FncProvider){ }

  __url: string;
  __a = "&__a="+Environment.SUMR_TOKEN.a;
  __k = "&__k="+Environment.SUMR_TOKEN.k;
  __p = "&__p="+Environment.SUMR_TOKEN.p;
  __u = "&__u="+Environment.SUMR_TOKEN.u;

  _Rq_Get(p=null){
    
    let _rnd = "?Rnd="+Math.random();
    let _get = p.get;
    var _pml = '';

    if(!this._fnc.isN(p.p1)){ _pml = _pml+p.p1+'/'; }
    if(!this._fnc.isN(p.p2)){ _pml = _pml+p.p2+'/'; }

    this.__url = Environment.API_ENDPOINT+_pml;
    return this.http.get(this.__url+_rnd+this.__a+this.__k+this.__p+this.__u+_get);

  }

  _Rq_Post(p=null){
    
    let _rnd = "?Rnd="+Math.random(); //Random para cache  

    let _get = '';
    var _pml = '';

    if(!this._fnc.isN(p.p1)){ _pml = _pml+p.p1+'/'; }
    if(!this._fnc.isN(p.p2)){ _pml = _pml+p.p2+'/'; }
    if(!this._fnc.isN(p.get)){ _get = p.get; }

    this.__url = Environment.API_ENDPOINT+_pml+_rnd+this.__a+this.__k+this.__p+this.__u+_get;

    let _D_Post = new FormData();

    if(!this._fnc.isN(p.data)){ 
      for(let _post in p.data){
        _D_Post.append(_post, p.data[_post]);
      }
    }

    _D_Post.append("_ses", this._fnc.getSess("_ses").on.id);

    return this.http.post(this.__url, _D_Post);

  }

}
