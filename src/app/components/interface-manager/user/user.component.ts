import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$;
  @Input() user: Users;

  name = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    img: '',
  };

  constructor(
    private usersService: UsersService,
    private activeRoute: ActivatedRoute,
    ) { }



 
  ngOnInit(): void {
    this.user$ = this.usersService.getById(this.activeRoute.snapshot.params.id);
      //  this.user$ = this.usersService.getById(this.user.id);

  }



  onSubmit(f: NgForm,id:any) {
    console.log(id);
    
    this.name = f.value
    console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    console.log(f.value.name.username); //); // 
    console.log(f.valid);  // true
    console.log( JSON.stringify(f.value))

    this.usersService.editUser(f.value.name,id)
  }

  // setValue() {
  //   // this.name = {first: 'Bess', last: 'Marvin'};
  // }
  
  


}
