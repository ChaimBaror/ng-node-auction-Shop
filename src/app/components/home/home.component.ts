import { Component, Input, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';
import { LogingService } from 'src/app/services/loging.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() products: Products[] = []
  myVar
  currentUser;
  myProducts;
  constructor(private productsService: ProductsService,private activeRoute: ActivatedRoute, private logingSer: LogingService, private _router: Router) { }


  ngOnInit(): void {
if(this.activeRoute.snapshot.params.category == null) 
this.myProducts = this.productsService.getProducts()
else{
  this.myProducts = this.productsService.getCategory(this.activeRoute.snapshot.params.category);

}
    // console.log("oninit home work");
    // if (this.products==null) {
    //   this.myProducts = this.productsService.getProducts()
    // }
    // else {
    //   this.myProducts = this.products
    // }
    console.log(' this.myProducts ()HomeComponent', this.myProducts);

    this.logingSer.getCurrentUser().subscribe(user =>
      this.currentUser = { ...user });
  }



  pageId(itme) {
    // console.log("pageId", itme);
    this.productsService.getproductById(itme)

  }


  addAuction(itme) {
    const { id } = itme
    if (!this.currentUser.id) {
      return alert("כדי להגיש הצעה צריך להירשם")
    }
    if (typeof itme.price == 'string') {
      itme.price = parseInt(itme.price)
    }

    itme.price += 10
    let sum = itme.price
    console.log(id);
    this.productsService.auctionAdd(id, sum)

    if (this.currentUser.id) {
      return alert(`${this.currentUser.username}  מאת    $${sum} התקבלה`)
    }
  }

}
