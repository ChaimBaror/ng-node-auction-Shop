import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) {}

  all() {
    return this.apiService.request('/user', 'GET');
  }

  getById(id: any) {
    return this.apiService.request(`/user/${id}`, 'GET');
  }

  // delete(id: any) {
  //   this.apiService.request(`/user/${id}`, 'DELETE');
  // }
  delete(id: any) {
    this.apiService.delete(id);
  }
}
