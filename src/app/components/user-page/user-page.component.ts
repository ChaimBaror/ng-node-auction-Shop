import { Component, OnInit } from '@angular/core';
import { LogingService } from 'src/app/services/loging.service';
import { Users } from 'src/app/services/Users';
import { ProductsService, Products } from 'src/app/services/products.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  currentUser: Users;
  myproducts:Products[]=[]
  constructor(private logingSer: LogingService ,private productsSer:ProductsService) { 
  }

  ngOnInit(): void {
   this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser= {...user} );
    console.log(`%c ${this.currentUser.lastName}`,'color:red');

    this.myproducts= this.productsSer.productsUser(this.currentUser.uid)
    

  }
}
