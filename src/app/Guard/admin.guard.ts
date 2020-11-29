import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor() { }

  public canActivate(route: ActivatedRouteSnapshot){

        let user = JSON.parse(localStorage.getItem('currentUser'));
        if(user.role == 'Admin'){
          return true;
        }
        return false;
      }
  
}