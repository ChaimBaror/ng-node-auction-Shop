import { Component, OnInit } from '@angular/core';
import { LogingService } from 'src/app/services/loging.service';
import { ProductsService, Products } from 'src/app/services/products.service';
import { Users } from 'src/app/model/Users';
import { Auction } from 'src/app/model/Auction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  auction = [];
  currentUser: Users;
  userid
  myproducts: any[] = []
  allproduct: any[] = []

  constructor(private logingSer: LogingService, private productsSer: ProductsService,private _router: Router) {
  }

  ngOnInit(): void {
    let arrayProducts
    arrayProducts = this.productsSer.getAllProducts()

    console.log(`ngOnInit Products work`);
    this.allproducts().subscribe((p: Products) => {
      this.auction = this.productsSer.getAuctionByuserId(this.userid)

      arrayProducts = arrayProducts.concat(p)
      this.allproduct = arrayProducts
      console.log("this", this.allproduct);

      const uIdproduct = this.auction.filter((obj, index, self) => self.findIndex((o) => { return o.pruductId === obj.pruductId; }) === index);
      uIdproduct.forEach((id:Auction )=> {
        this.myproducts.push(...this.allproduct.filter((p: Products) => p.id == id.pruductId))
        console.log('this.myproducts', this.myproducts);
      })
      console.log(arrayProducts);
    })

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(`%c ${this.currentUser.username}`, 'color:red');
    this.userid = this.currentUser.id
    // this.myproducts = this.productsSer.productsUser(this.currentUser.id)

    console.log("this.auction", this.auction)
    this.auction.sort((a, b) => (b.price) - (a.price));


    // console.log("this.myproducts", this.myproducts);

  }


  allproducts() {

    return this.productsSer.all()
    // .subscribe((p: Products) => {
    //   arrayProducts = arrayProducts.concat(p)
    //   console.log(arrayProducts);
    // })

    // return this.allproduct = arrayProducts

    // const array = this.productsSer.getAllProducts().filter((p: Products) => p.id == id)
    // if (array !== null) {
    //   return array
    // }
    // const arrayapi = this.productsSer.all().subscribe((data: Products) => {
    //   return data.id == id
    // })
    // return arrayapi

  }

  getproductById(id) {
    const array = this.allproduct.filter((p: Products) => p.id == id)
    return array
  }

  pageId(id) {
    var txt;
    var r = confirm("Do you want to switch to a sales channel?");
    if (r == true) {
      txt = "You pressed OK!";
      this._router.navigate(['/pageProduct', id])

      this.productsSer.getproductById(id)
    } else {
      txt = "You pressed Cancel!";
    }
    console.log("pageId", id);
  }

  value = '';
  onEnter(value: string) { this.value = value; }

  zonemssad() {
    this.logingSer.updateSubject(0)
  }

}

