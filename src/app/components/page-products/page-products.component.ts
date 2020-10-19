import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { LogingService } from 'src/app/services/loging.service';
import { Users } from 'src/app/services/Users';
import { timer } from 'rxjs';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  currentUser: Users
  pageProducts: Products
  timerProduct:number=1000
  constructor(private productsSer: ProductsService,private logingSer: LogingService) { 
    
    const source = timer(100, 1000);
    //output: 0,1,2,3,4,5......
    const subscribe = source.subscribe(val =>
      this.timerProduct-=(val));
  }
 

  ngOnInit(): void {
    this.pageProducts = this.productsSer.getOneProducts();
    this.pageProducts.auction.sort((a, b) => (b.price) - (a.price));
    this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser= {...user} );
  }

  addAuction5(id){
    this.addAuction(id,5)
  }
  addAuction10(id){
    this.addAuction(id,10)
  }
  addAuction25(id){
    this.addAuction(id,25)
  }
  addAuction100(id){
    this.addAuction(id,100)
  }



  addAuction(id,sum){
    console.log(id);
    this.productsSer.auctionAdd(id,this.currentUser.uid,sum)
  
  }

}


