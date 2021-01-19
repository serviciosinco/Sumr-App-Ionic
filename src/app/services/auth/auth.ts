import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthProvider implements CanActivate {

  private authInfo = { authenticated: false };

  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (!this.authInfo.authenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  login():void{
    this.authInfo.authenticated = true;
  }

  logout():void{
    this.authInfo.authenticated = false;
  }

}
