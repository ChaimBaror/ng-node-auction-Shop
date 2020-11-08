import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { LogingService } from './loging.service';


export interface Products {
  category?: string;
  id: string;
  image: string;
  nameProduct: string;
  message: string;
  price: number | string;
  auction?: Auction[];
}

export interface Auction {
  userId: string;
  price: number;
  time?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  arrayProducts: Products[] = [];
  baesProducts: Products[] = [];
  pageProducts: Products;
  constructor(private _router: Router, private api: ApiService,private userSer:LogingService ) {

    this.baesProducts = [
      { id: "10", image: "assets/images/logo3.gif", nameProduct: "chaim bar-or 1 מכירה ", message: "chaim bar-or auction", price: 10, auction: [{ userId: '1', price: 10 }, { userId: '2', price: 25 }] },
      { id: "11", image: "assets/images/logo1.gif", nameProduct: "chaim bar-or 2", message: "chaim AvraTech 07", price: 24, auction: [{ userId: '', price: 0 }] },
      { id: "12", image: "assets/images/logo5.png", nameProduct: "chaim bar-or 3", message: "chaim bar-or auction", price: 100, auction: [{ userId: '', price: 0 }] },
      { id: "13", image: "assets/images/logo6.gif", nameProduct: "chaim bar-or 4 מכירה ", message: "chaim > AvraTech 07", price: 54, auction: [{ userId: '', price: 0 }] },
      { id: "14", image: "assets/images/logo4.gif", nameProduct: "chaim bar-or 5", message: "chaim bar-or auction", price: 250, auction: [{ userId: '', price: 0 }] },
      { id: "15", image: "assets/images/logo3.gif", nameProduct: "מכירה  6", message: "avraTech", price: 1, auction: [{ userId: '', price: 0 }] },
      { id: "16", image: "assets/images/logo.png", nameProduct: "chaim bar-or 3 מכירה", message: "מכירה auction", price: 100, auction: [{ userId: '', price: 0 }] },
      { id: "17", image: "assets/images/exit1.png", nameProduct: "chaim bar-or exit מכירה", message: "מכירה exit ", price: 1, auction: [{ userId: '', price: 0 }] },

    ]
  }

  getAllProducts() {
    this.arrayProducts = this.baesProducts
    return this.arrayProducts;

  }
  getproductById(id) {
    for (let i = 0; i < this.arrayProducts.length; i++) {
      if (this.arrayProducts[i].id === id) {
        this.pageProducts = this.arrayProducts[i]
        this._router.navigate(['/pageProduct'])

      }
    }
  }

  auctionAdd(id, user, sum) {
    this.userSer.updateSubject(1)
    let date = new Date();
    let now = date.setDate(date.getDate() - 1)
    let auction = sum
    for (let i = 0; i < this.arrayProducts.length; i++) {
      if (this.arrayProducts[i].id === id) {
        if (this.arrayProducts[i].auction[0] !== null) {
          this.arrayProducts[i].auction = (this.arrayProducts[i].auction.sort((a, b) => (b.price) - (a.price)))
          auction += this.arrayProducts[i].auction[0].price
          this.arrayProducts[i].auction.unshift({ userId: user, price: auction, time: this.convertTime(now) })
        }
      }
    }
  }
  getTineNow() {
    let date = new Date();
    let seconds = date.setDate(date.getDate() - 1)
    var days = Math.floor(seconds / (24 * 60 * 60));
    seconds -= days * (24 * 60 * 60);
    var hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);
    var minutes = Math.floor(seconds / (60));
    seconds -= minutes * (60);
    return ((0 < hours) ? (hours + " hour, ") : "") + ((0 < minutes) ? (minutes + " minutes and, ") : "") + ((0 < seconds) ? (seconds + " seconds, ") : "")

  }

  convertTime(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2),
      hour = ("0" + date.getHours()).slice(-2),
      min = ("0" + date.getMinutes()).slice(-2),
      sec = ("0" + date.getSeconds()).slice(-2);
    // return [date.getFullYear(), mnth, day, hour, min, sec].join(":");
    return [hour, min, sec].join(":");

  }

  // routerpageProduct() {
  //   this._router.navigate(['/pageProduct'])
  // }

  getOneProducts() {
    return this.pageProducts;
  }


  productsUser(id) {
    let productsUserauction = []
    for (let i = 0; i < this.arrayProducts.length; i++) {
      for (let j = 0; j < this.arrayProducts[i].auction.length; j++) {
        if (this.arrayProducts[i].auction[j].userId == id) {
          productsUserauction.push(this.arrayProducts[i])
          break;
        }
      }
    }
    console.log(productsUserauction);

    return productsUserauction
  }



  getSelected() {
    let array = [
      { id: "20", image: "assets/images/logo2.gif", nameProduct: "chaim bar-CategoryComponent 1 מכירה ", message: "CategoryComponentbar-or auction", price: 10, auction: [{ userId: '1', price: 10 }, { userId: '2', price: 25 }] },
      { id: "21", image: "assets/images/wine-auction-inside.png", nameProduct: "CategoryComponent", message: "CategoryComponent AvraTech 07", price: 24, auction: [{ userId: '', price: 0 }] },
      { id: "22", image: "assets/images/logo5.png", nameProduct: "CategoryComponent", message: "CategoryComponent auction", price: 100, auction: [{ userId: '', price: 0 }] },
      { id: "23", image: "assets/images/logo2.gif", nameProduct: "CategoryComponentr 4 מכירה ", message: "CategoryComponent > AvraTech 07", price: 54, auction: [{ userId: '', price: 0 }] },
      { id: "24", image: "assets/images/wine-auction-inside.png", nameProduct: "CategoryComponent 5", message: "chaim bar-or auction", price: 250, auction: [{ userId: '', price: 0 }] },
      { id: "25", image: "assets/images/logo3.gif", nameProduct: "CategoryComponentמכירה  6", message: "CategoryComponent avraTech", price: 1, auction: [{ userId: '', price: 0 }] },
      { id: "26", image: "assets/images/logo.png", nameProduct: "CategoryComponent 3 מכירה", message: "מכירה CategoryComponent", price: 100, auction: [{ userId: '', price: 0 }] },
      { id: "27", image: "assets/images/wine-auction-inside.png", nameProduct: "CategoryComponent exit מכירה", message: "מכירה CategoryComponent ", price: 1, auction: [{ userId: '', price: 0 }] },
    ]
    this.arrayProducts = array
    return array
  }
  getapi() {
    console.log("api is work ?");
    let array:Products[] = []
    this.api.getapi()
    .subscribe((data: Products) => array .push({ ...data }));
    this.arrayProducts = array
    console.log(array);
    
    return array
    
    
    
  }
}




