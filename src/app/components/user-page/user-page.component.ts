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
  userid
  myproducts: Products[] = []
  constructor(private logingSer: LogingService, private productsSer: ProductsService) {
  }

  ngOnInit(): void {
    console.log(`ngOnInit Products work`);
    
    this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser = { ...user });
    console.log(`%c ${this.currentUser.lastName}`, 'color:red');
    this.userid = this.currentUser.uid
    this.myproducts = this.productsSer.productsUser(this.currentUser.uid)


  }
  pageId(id) {
    var txt;
    var r = confirm("Do you want to switch to a sales channel?");
    if (r == true) {
      txt = "You pressed OK!";
      this.productsSer.getproductById(id)
    } else {
      txt = "You pressed Cancel!";
    }
    console.log("pageId", id);
  }

  value = '';
  onEnter(value: string) { this.value = value; }

}
