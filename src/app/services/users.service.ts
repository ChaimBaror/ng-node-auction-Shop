import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) {}

  editUser(user: Users,id){
    return this.apiService.requestPostBady(`/user/${id}` ,user)
  }

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
