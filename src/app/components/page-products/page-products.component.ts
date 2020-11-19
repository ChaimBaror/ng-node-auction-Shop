import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { LogingService } from 'src/app/services/loging.service';
import { Users } from 'src/app/services/Users';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  currentUser: Users
  pageProducts: Products
  timerProduct:number=1000
  thisNow 
  constructor(private productsSer: ProductsService,private logingSer: LogingService, private _router: Router) { 
    
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
      setInterval(this.timeNow,1000);
  }

  timeNow(){
   
  
    this.thisNow=  this.productsSer.getTineNow()

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

    if(!this.currentUser.id){
      //  this._router.navigate(['/loging'])
       return alert("כדי להגיש הצעה צריך להירשם")
       
    }
    console.log(id);
    this.productsSer.auctionAdd(id,this.currentUser.id,sum)
  
  }

}


