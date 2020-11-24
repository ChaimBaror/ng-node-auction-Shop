import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import { Users } from '../model/Users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService,private router: Router) {}

  editUser(user: Users,id){
    if (this.apiService.requestBady(`/user/${id}`,'PATCH' ,user))
    this.router.navigate(['/interfaceManager'])
else{
  alert("error")
}
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
    this.apiService.delete(`/user/${id}`);
  }
}
