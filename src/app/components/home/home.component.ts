import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { LogingService } from 'src/app/services/loging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products[] = []
  myVar
  currentUser
  constructor(private productsSer: ProductsService, private logingSer: LogingService) { }

  ngOnInit(): void {
    this.products = this.productsSer.getAllProducts();

    //   setInterval(() => {
    //     this.myVar =new Date().toLocaleString()


    //     // this.productsSer.getTineNow()
    // }, 1000);



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
    if (add == 0)
      add = 10
    let sum = add
    console.log(id);
    this.productsSer.auctionAdd(id, this.currentUser.uid, sum)

  }

}
