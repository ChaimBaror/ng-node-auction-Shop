import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor() { }

  public canActivate(route: ActivatedRouteSnapshot){

        let user = JSON.parse(localStorage.getItem('currentUser'));
        
        let userTokenrole= JSON.parse(atob(localStorage.getItem('loggedInToken').split('.')[1]))
console.log(userTokenrole);

        if(userTokenrole.role== "Admin"){
          return true;
        }

        return false;
      }
  
}