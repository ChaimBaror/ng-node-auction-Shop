import { Component, OnInit } from '@angular/core';
import { LogingService } from 'src/app/services/loging.service';
import { Users } from 'src/app/services/Users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser: Users;
  public timenow
  // public currentUser:Users =new Users();
  constructor(private logingSer: LogingService) { }

  ngOnInit(): void {
   this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser= {...user} );
    console.log(`%c ${this.currentUser.id}`,'color:red');
       
    setInterval(() => {
      this.timenow =new Date().toLocaleString()
      
      
  }, 1000);


  }
  signOut() {
    console.log("this out");
    this.logingSer.signOut()
    // this.currentUser = this.logingSer.currentUser
    console.log(`%c ${this.currentUser} this.logingSer.signOut`,'color:blue');
  }
}
