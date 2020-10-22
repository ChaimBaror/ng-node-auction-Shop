import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Products } from './products.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl ="https://5f1454452710570016b37e52.mockapi.io/api/Products"

  constructor(private httpClient: HttpClient) {
   }


getapi(): Observable<Products>{
  return this.httpClient.get<Products>(this.baseUrl)
}

}
