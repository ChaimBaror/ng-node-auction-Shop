import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from './Users';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogingService {
  ;
  currentUser$: BehaviorSubject<Users> = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
  user: Users
  arrayUsers: Users[] = []

  constructor(private _router: Router, private apiServer: ApiService) {
    this.arrayUsers = [
      { firstName: "chaim", lastName: "bar-or", email: "chaim@example.com", password: "1234", id: 1, img: "../assets/images/logo5.png", phone: "0521010100" },
      { firstName: "david", lastName: "AvraTech", email: "david@example.com", password: "1234", id: 2, img: "../assets/images/logo5.png", phone: "0521010111" },
    ]
  }


  setUser(user: Users) {
    // user.id = Math.floor(Math.random() * 100000);
    // console.log(`%c ${user.id}`, 'color :blue');
    this.setUserApi(user)
    this.currentUser$.next(user)
    localStorage.setItem('currentUser', JSON.stringify(user));

    this.arrayUsers.push(user)
    this._router.navigate(['/UserPage'])

    this.currentUser$.subscribe(console.log);

  }


  signUpUser(email, password) {
    let user = this.apiServer.authUsersApi(email, password)
    if (user) {
      user.subscribe(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${ user.accessToken}`);

        console.log(headers);
        this.currentUser$.next(user)
        this._router.navigate(['/home'])
      })
    }
    // for (let i = 0; i < this.arrayUsers.length; i++) {
    //   if (this.arrayUsers[i].email === email && this.arrayUsers[i].password === password) {
    // this.currentUser$.next(this.arrayUsers[i])
    //     localStorage.setItem('currentUser', JSON.stringify(this.arrayUsers[i]));
    //     console.log("access_token");
    //     this._router.navigate(['/home'])
    //   }

    else {
      console.log("error");
      this._router.navigate(['/loging'])
    }
    // }
  }

  setUserApi(user: Users) {
    console.log("setUserApi", user);

    return this.apiServer.setUsersApi(user)
  }

  signOut() {
    this.currentUser$.next(null)
    localStorage.removeItem('currentUser');
    console.log(`%c ${this.currentUser$}`, 'color:yellow');
    this._router.navigate(['/loging'])
  }

  getCurrentUser(): Observable<Users> {
    return this.currentUser$.asObservable()
  }


  updateSubject(newData: number) {
    let n
    if (newData === 1) {
      n = newData
      this.currentUser$.subscribe(users => {
        users.message == null ? n : n = users.message as number + 1
      })
    }

    this.currentUser$.next({ ...this.currentUser$.value, message: n });

  }


}
