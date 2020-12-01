import { Component, Input, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { LogingService } from 'src/app/services/loging.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()  products: Products[] = []
  myVar
  currentUser
  constructor(private productsSer: ProductsService, private logingSer: LogingService, private _router: Router) { }

  ngOnInit(): void {
    console.log("oninit home work");
    
    this.products = this.productsSer.getAllProducts();

    this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser = { ...user });
  }
  pageId(itme) {
    console.log("pageId", itme);
    this.productsSer.getproductById(itme)

  }


  addAuction(itme) {
    const {id} = itme
    if(!this.currentUser.id){
      return alert("כדי להגיש הצעה צריך להירשם") 
   }
   
    itme.price += 10
    let sum =itme.price 
    console.log(id);
    this.productsSer.auctionAdd(id,  sum)

  }

}
