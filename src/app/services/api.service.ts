import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  request<T>(url: string, method: HttpMethod): Observable<T> {
    console.log(method, url);
    let headers = new HttpHeaders();
    let user = JSON.parse(localStorage.getItem('currentUser'))
    if(user)
    headers = headers.set('Authorization', `Bearer ${user.accessToken}`);
    return this.httpClient.request<T>(method, environment.apiUrl + url, { headers: headers, });
  }


  requestBady<T>(url: string, method: HttpMethod, BadyRequest) {
    console.log(environment.apiUrl + url);
    let body = JSON.stringify(BadyRequest);
    const headers = { 'content-type': 'application/json' }
    return this.httpClient.request<T>(method, environment.apiUrl + url, { body, headers })
      .subscribe(data => console.log(data))

  }

  requestImage<T>(url: string, method: HttpMethod, image, id) {
    console.log("image", url, method, image, id);
    let formData = new FormData()
    formData.append('image', image);
    let headers = new HttpHeaders().set('id', id)
    this.httpClient.request<T>(method, environment.apiUrl + url, { body: formData, headers })
      .subscribe();
  }

  requestAuth<T>(url: string, method: HttpMethod, BadyRequest) {
    console.log(environment.apiUrl + url);
    let body = JSON.stringify(BadyRequest);
    const headers = { 'content-type': 'application/json' }
    return this.httpClient.request<T>(method, environment.apiUrl + url, { body, headers })

  }

  delete(url) {
    console.log(url);
    this.httpClient.delete(environment.apiUrl + url)
      .subscribe(data => console.log(data))

  }


}
