import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { Auction } from 'src/app/model/Auction';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {

  currentUser: Users
  pageProducts: Products
  timeProduct;
  thisNow;
  timeEnd
  auctionPruduct;

  constructor(private productsSer: ProductsService, private _router: Router) { }


  ngOnInit(): void {

    this.pageProducts = this.productsSer.getOneProducts();


    if (this.pageProducts.timeEnd) {
      if (this.pageProducts.timeEnd - Date.now() < 0) {
        this.pageProducts.isActive = false;
      }
      else {
        this.pageProducts.isActive = true;
      }
    }
    else if (this.pageProducts.timeEnd == null) {
      this.pageProducts.timeEnd = 2606494960000;
      this.pageProducts.isActive = true;
    }

 
    this.getAuction()
this.timeOfProduct()
  }

getAuction() {
  this.auctionPruduct = this.productsSer.getAuctionByProductId(this.pageProducts.id)
  this.auctionPruduct.sort((a, b) => (b.price) - (a.price));
  this.pageProducts.price = this.auctionPruduct[0].price
}

sort() {
  this.pageProducts.auction.sort((a, b) => (b.price) - (a.price));

}

timeOfProduct() {

  const timeEnd = this.pageProducts.timeEnd - Date.now();
  if (timeEnd < 0) {
    this.pageProducts.isActive = false;
  }
  if (timeEnd > 0) {
    this.timeProduct = setInterval(() => {
      this.pageProducts.timeEnd - Date.now()
      this.thisNow = this.pageProducts.timeEnd - Date.now();

    }, 10);

  }

}

ngOnDestroy() {
  this.timeOfProduct()
}




addAuction5(id) {
  this.addAuction(id, 5)
}
addAuction10(id) {
  this.addAuction(id, 10)
}
addAuction25(id) {
  this.addAuction(id, 25)
}
addAuction100(id) {
  this.addAuction(id, 100)
}

addAuction(id, sum) {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  if (!user.id) {
    return alert("כדי להגיש הצעה צריך להירשם")
  }
  if (typeof this.pageProducts.price == 'string') {
    this.pageProducts.price = parseInt(this.pageProducts.price)
  }

  sum = this.pageProducts.price += sum
  console.log(id);
  this.productsSer.auctionAdd(id, sum)
  this.getAuction()
}

}


