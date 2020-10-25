import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class LogingService {
  ;
  currentUser$: BehaviorSubject<Users> = new BehaviorSubject({ img: "../assets/images/icon/avataricon.png" });

  arrayUsers: Users[] = []

  constructor(private _router: Router) {
    this.arrayUsers = [
      { firstName: "chaim", lastName: "bar-or", email: "chaim@example.com", password: "1234", uid: 1, img: "../assets/images/logo5.png" ,phone:"0521010100" },
      { firstName: "david", lastName: "AvraTech", email: "david@example.com", password: "1234", uid: 2, img: "../assets/images/logo5.png" ,phone:"0521010111"},
    ]
  }

  signUp(newUser: Users) {
    console.log(`%c ${newUser.email, newUser.firstName}`, `color : red`);
    // this.currentUser =  newUser
  }

  setUser(user: Users) {
    user.uid = Math.floor(Math.random() * 100000);
    console.log(`%c ${user.uid}`, 'color :blue');
    // this.currentUser = user
    this.currentUser$.next(user)
    this.arrayUsers.push(user)
    this._router.navigate(['/UserPage'])

    this.currentUser$.subscribe(console.log);
   
  }
 

  signUpUser(email, password) {
    for (let i = 0; i < this.arrayUsers.length; i++) {
      if (this.arrayUsers[i].email === email && this.arrayUsers[i].password === password) {
        this.currentUser$.next(this.arrayUsers[i])
        localStorage.setItem('currentUser',this.arrayUsers[i].firstName +" " +this.arrayUsers[i].lastName)
        console.log("access_token");
        this._router.navigate(['/UserPage'])
      }

      else {
        console.log("error");
        // this._router.navigate(['/loging'])
      }
    }
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
    console.log(`%c ${this.currentUser$}`, 'color:yellow');
    this._router.navigate(['/loging'])
  }

  getCurrentUser(): Observable<Users> {
    return this.currentUser$.asObservable()
  }
}
