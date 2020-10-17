import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class LogingService {
  ;
  currentUser$: BehaviorSubject<Users> = new BehaviorSubject({img:"../assets/images/icon/avataricon.png"});
  // currentUser: Users = new Users();
  arrayUsers: Users[]=[]

  constructor(private _router: Router) { }

  signUp(newUser: Users) {
    console.log(`%c ${newUser.email, newUser.firstName}`, `color : red`);
    // this.currentUser =  newUser
  }

  setUser(user: Users) {
    user.uid = Math.floor(Math.random() * 100000);
    console.log(`%c ${user.uid}` ,'color :blue');
    // this.currentUser = user
    this.currentUser$.next(user)
    this.arrayUsers.push(user)
    this._router.navigate(['/UserPage'])

    this.currentUser$.subscribe(console.log);

  }


 signOut() {
    // this.currentUser.uid = null
    // this.currentUser.firstName =''
    // this.currentUser.lastName =''
    // this.currentUser.email = ''
    // this.currentUser.password = ''
    // this.currentUser.phone = ''
    // this.currentUser.img = ''
    // this.currentUser.agree = null
    this.currentUser$.next(null)
    console.log(`%c ${ this.currentUser$}`,'color:yellow');
    this._router.navigate(['/loging'])    
  }

  getCurrentUser(): Observable<Users> {
    return this.currentUser$.asObservable()
  }
}
