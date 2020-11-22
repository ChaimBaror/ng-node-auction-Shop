import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Users } from './Users';
import { environment } from 'src/environments/environment';

export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  status;
  constructor(private httpClient: HttpClient) {
  }
  request<T>(url: string, method: HttpMethod): Observable<T> {
    console.log(method, url);

    let headers = new HttpHeaders();
    let user = JSON.parse(localStorage.getItem('currentUser'))
    headers = headers.set('Authorization', `Bearer ${user.accessToken}`);
    return this.httpClient.request<T>(method, environment.apiUrl + url, { headers: headers, });
  }

  requestPostBady<Products>(url: string, BadyRequest: Products) {
    console.log(environment.apiUrl + url);
    let body = JSON.stringify(BadyRequest);
    const headers = { 'content-type': 'application/json' }
    return this.httpClient.post(environment.apiUrl + url, body, { 'headers': headers })
    .subscribe(data => console.log(data))

  }


  delete(id) {
    this.httpClient.delete(`${environment.apiUrl}/user/${id}`)
      .subscribe(() => this.status = 'Delete successful');
    console.log(this.status);

  }



  setUsersApi(user: Users) {
    let username = user.firstName
    let password = user.password;
    let email = user.email
    this.httpClient.post<any>(`${environment.apiUrl}/user`, { username, password, email })
      .subscribe(user => console.log(user));
    console.log("setUsersApi", user);

  }

  authUsersApi(email: string, password: string) {
    return this.httpClient.post<Users>(`${environment.apiUrl}/auth`, { password, email })
      .pipe(map(user => {
        if (user && user.accessToken) {
          console.log(user);
        }
        return user;
      }));
  }

}
