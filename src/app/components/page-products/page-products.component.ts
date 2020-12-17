import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { Auction } from 'src/app/model/Auction';
import { LogingService } from 'src/app/services/loging.service';
import { Observable  } from 'rxjs';
import {tap} from 'rxjs/operators';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css'],

})
export class PageProductsComponent implements OnInit {

  currentUser: Users
  pageProducts: Products
  timeProduct;
  thisNow;
  timeEnd
  auctionPruduct:Auction;
  auctionPruduct$:Observable<any>;

  constructor(private productsSer: ProductsService, private activeRoute: ActivatedRoute, private logingSer: LogingService) { }

  ngOnInit(): void {
    this.productsSer.getById(this.activeRoute.snapshot.params.id)
      .subscribe((products: Products) => {
        this.pageProducts = products

        if (this.pageProducts.timeEnd) {
          if (this.pageProducts.timeEnd - Date.now() < 0) {
            this.pageProducts.isActive = false;
          }
          else {
            this.pageProducts.isActive = true;
          }
        }
        // else if (this.pageProducts.timeEnd == null) {
        //   this.pageProducts.timeEnd = 2606494960000;
        //   this.pageProducts.isActive = true;
        // }
        this.timeOfProduct()
        
    this.getAuction(this.pageProducts.id)
      });

    this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser = { ...user });
   

  }

  getAuction(pruductId) {
    const sortById = function(data) {
      data.sort((a, b) => (b.price) - (a.price));;
    };

    this.auctionPruduct$ = this.productsSer.getAuctionByProductId(pruductId)    .pipe(tap(sortById))
    .pipe(tap(sortById))
    //  this.productsSer.getAuctionByProductId(pruductId).subscribe((auction:Auction) => {
    //   this.auctionPruduct = auction;
      // this.auctionPruduct.sort((a, b) => (b.price) - (a.price));
      // this.pageProducts.price = this.auctionPruduct[0].price
  }



  timeOfProduct() {
    const timeEnd = this.pageProducts.timeEnd - Date.now();
    if (timeEnd < 0) {
      this.pageProducts.isActive = false;
    }
    else if (timeEnd > 0) {
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

    if (!this.currentUser.id) {
      return alert("כדי להגיש הצעה צריך להירשם")
    }
    if (typeof this.pageProducts.price == 'string') {
      this.pageProducts.price = parseInt(this.pageProducts.price)
    }
    sum = this.pageProducts.price += sum
    console.log(id);
    this.productsSer.auctionAdd(id, sum)

    this.getAuction(this.pageProducts.id)
  }

}


