import { Component, Input, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { LogingService } from 'src/app/services/loging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()  products: Products[] = []
  myVar
  currentUser
  constructor(private productsSer: ProductsService, private logingSer: LogingService) { }

  ngOnInit(): void {
    console.log("oninit home work");
    
    this.products = this.productsSer.getAllProducts();

    this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser = { ...user });
  }
  pageId(id) {
    console.log("pageId", id);
    this.productsSer.getproductById(id)

  }

  myTimer() {
    let d = new Date();
    return d.getSeconds();
  }


  addAuction(id, add) {
    if(!this.currentUser.uid){
      return alert("כדי להגיש הצעה צריך להירשם") 
   }
    if (add == 0)
      add = 10
    let sum = add
    console.log(id);
    this.productsSer.auctionAdd(id, this.currentUser.uid, sum)

  }

}
