import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/Users';

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

  constructor(private productsSer: ProductsService, private _router: Router) { }


  ngOnInit(): void {

    this.pageProducts = this.productsSer.getOneProducts();
    this.pageProducts.auction.sort((a, b) => (b.price) - (a.price));
    if (this.pageProducts.timeEnd == null) {
      this.pageProducts.timeEnd = 1606494960000
    }

    this.timeOfProduct()
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
    console.log(id);
    this.productsSer.auctionAdd(id, sum)
  }

}


