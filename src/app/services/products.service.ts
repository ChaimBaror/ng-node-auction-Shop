import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export interface Products {
  id: string;
  image: string;
  nameProduct: string;
  message: string;
  price: number;
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
  pageProducts: Products;
  constructor(private _router: Router) {

    this.arrayProducts = [
      { id: "10", image: "../assets/images/logo3.gif", nameProduct: "chaim bar-or 1 מכירה הפומבית", message: "chaim bar-or auction", price: 10, auction: [{ userId: '1', price: 10 }, { userId: '2', price: 25 }] },
      { id: "11", image: "../assets/images/logo1.gif", nameProduct: "chaim bar-or 2", message: "chaim AvraTech 07", price: 24, auction: [{ userId: '', price: 0 }] },
      { id: "12", image: "../assets/images/logo5.png", nameProduct: "chaim bar-or 3", message: "chaim bar-or auction", price: 100, auction: [{ userId: '', price: 0 }] },
      { id: "13", image: "../assets/images/logo6.gif", nameProduct: "chaim bar-or 4 מכירה הפומבית", message: "chaim > AvraTech 07", price: 54, auction: [{ userId: '', price: 0 }] },
      { id: "14", image: "../assets/images/logo3.gif", nameProduct: "chaim bar-or 5", message: "chaim bar-or auction", price: 250, auction: [{ userId: '', price: 0 }] },
    ]
  }


  getAllProducts() {
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
    let date = new Date();
    let now = date.setDate(date.getDate() - 1)
    let auction = sum
    for (let i = 0; i < this.arrayProducts.length; i++) {
      if (this.arrayProducts[i].id === id) {
        if (this.arrayProducts[i].auction[0] !== null) {
          this.arrayProducts[i].auction = (this.arrayProducts[i].auction.sort((a, b) => (b.price) - (a.price)))
          auction += this.arrayProducts[i].auction[0].price
          this.arrayProducts[i].auction.push({ userId: user, price: auction, time: this.convertTime(now) })
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

  routerpageProduct() {
    this._router.navigate(['/pageProduct'])
  }

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
}
function formatDuration(seconds) {
  // Complete this function
  var days = Math.floor(seconds / (24 * 60 * 60));
  seconds -= days * (24 * 60 * 60);
  var hours = Math.floor(seconds / (60 * 60));
  seconds -= hours * (60 * 60);
  var minutes = Math.floor(seconds / (60));
  seconds -= minutes * (60);
  return ((0 < hours) ? (hours + " hour, ") : "") + ((0 < minutes) ? (minutes + " minutes and, ") : "") + ((0 < seconds) ? (seconds + " seconds, ") : "")
  return ((0 < days) ? (days + " day, ") : "") + hours + " hour, " + minutes + " minute  and " + seconds + " seconds";
}