import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users$;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.usersService.all();

  }
  showDetails(id) {
    console.log(id);
    // this.user =id
    this.router.navigate(['users', id]);

  }
  delete(id) {
    this.usersService.delete(id)
  }

}
