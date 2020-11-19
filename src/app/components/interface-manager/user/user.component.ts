import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$;

  constructor(
    private usersService: UsersService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  cardEdit = this.fb.group({

  })

 
  ngOnInit(): void {
    this.user$ = this.usersService.getById(this.activeRoute.snapshot.params.id);
  }
  onSubmit() {
    console.log(this.cardEdit.value);

  }



}
