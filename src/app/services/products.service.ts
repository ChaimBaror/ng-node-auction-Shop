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
  timeEnd?: any;
  price: number | string;
  auction?: Auction[];
  isActive?: boolean;
}

export interface Auction {
  pruductId?: string;
  userId: string;
  price: number;
  username?: string;
  time?: any;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allProducts: Products[] = [];
  Products: Products[] = [];
  pageProducts: Products;
  auction: Auction[] = []
  

  constructor(private _router: Router, private apiService: ApiService, private userSer: LogingService) {

    // this.baesProducts = [
    //   { id: "10", category: "A", image: "assets/images/logo3.gif", nameProduct: "chaim bar-or 1 מכירה ", message: "chaim bar-or auction", price: 10, auction: [{ userId: '1', price: 10 }, { userId: '2', price: 25 }] },
    //   { id: "11", category: "A", image: "assets/images/logo1.gif", nameProduct: "chaim bar-or 2", message: "chaim AvraTech 07", price: 24, auction: [{ userId: '', price: 0 }] },
    //   { id: "12", category: "A", image: "assets/images/logo5.png", nameProduct: "chaim bar-or 3", message: "chaim bar-or auction", price: 100, auction: [{ userId: '', price: 0 }] },
    //   { id: "13", category: "A", image: "assets/images/logo6.gif", nameProduct: "chaim bar-or 4 מכירה ", message: "chaim > AvraTech 07", price: 54, auction: [{ userId: '', price: 0 }] },
    //   { id: "14", category: "A", image: "assets/images/logo4.gif", nameProduct: "chaim bar-or 5", message: "chaim bar-or auction", price: 250, auction: [{ userId: '', price: 0 }] },
    //   { id: "15", category: "A", image: "assets/images/logo3.gif", nameProduct: "מכירה  6", message: "avraTech", price: 1, auction: [{ userId: '', price: 0 }] },
    //   { id: "16", category: "A", image: "assets/images/logo.png", nameProduct: "chaim bar-or 3 מכירה", message: "מכירה auction", price: 100, auction: [{ userId: '', price: 0 }] },
    //   { id: "17", category: "A", image: "assets/images/exit1.png", nameProduct: "chaim bar-or exit מכירה", message: "מכירה exit ", price: 1, auction: [{ userId: '', price: 0 }] },

    // ]
    this.getAllProducts()
  }

  addproduct(product: Products) {
    return this.apiService.requestBady(`/products`, 'POST', product);
  }

  all() {
    return this.apiService.request('/products', 'GET');
  }

  editProducts(products: Products, id) {
    return this.apiService.requestBady(`/products/${id}`, 'PATCH', products)
  }
  getById(id: any) {
    return this.apiService.request<Products>(`/products/${id}`, 'GET');
  }

  delete(id) {
    return this.apiService.delete(`/products/${id}`,)

  }
  uploadImage(image, id) {
    this.apiService.requestImage(`/products/upload`, 'POST', image, id)
  }

  getAllProducts() {
    this.allProducts = []
    // return this.allProducts;
    this.all().subscribe((p: Products) => {
      this.allProducts = this.allProducts.concat(p)
      console.log("getAllProducts() service ",this.allProducts);
      this.Products =  this.allProducts;
     return this.allProducts

    })
    
  }


  getProducts() {
      return this.Products;
  }

  getproductById(itme) {
    const { id, } = itme
    for (let i = 0; i < this.allProducts.length; i++) {
      if (this.allProducts[i].id === id) {
        this.pageProducts = this.allProducts[i]
        this._router.navigate(['/pageProduct', id])
        break;
      }
    }
    this._router.navigate(['/pageProduct', id])
  }

  auctionAdd(id, sum) {
    this.userSer.updateSubject(1)
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const productId = id
    const date = new Date();
    this.auction.push({ pruductId: productId, userId: user.id, price: sum, time: date, username: user.username })
  }
  getAuctionByProductId(productId: string) {
    return this.auction.filter(auction => auction.pruductId == productId);
  }

  getAuctionByuserId(userId: string) {
    return this.auction.filter(auction => auction.userId == userId);

  }
  getOneProducts(id) {
    let Products = this.allProducts.filter((p: Products) => p.id == id)[0]
    return Products
  }


  productsUser(id) {
    let productsUserauction = []
    for (let i = 0; i < this.allProducts.length; i++) {
      for (let j = 0; j < this.allProducts[i].auction.length; j++) {
        if (this.allProducts[i].auction[j].userId == id) {
          productsUserauction.push(this.allProducts[i])
          break;
        }
      }
    }
    console.log(productsUserauction);

    return productsUserauction
  }

  getCategory(category) {
  
      this.Products = this.allProducts.filter((p: Products) => p.category == category);
      console.log(this.Products, category);
      return this.Products; 

  
  }

  // auctionAdd(id, sum) {
  //   const user =JSON.parse(localStorage.getItem('currentUser'))
  //     if(!user.id){
  //     //  this._router.navigate(['/loging'])
  //      return alert("כדי להגיש הצעה צריך להירשם")

  //   }
  //   this.userSer.updateSubject(1)
  //   let date = new Date();
  //   let now = date.setDate(date.getDate() - 1)
  //   let auction = sum
  //   for (let i = 0; i < this.arrayProducts.length; i++) {
  //     if (this.arrayProducts[i].id === id) {
  //       if (this.arrayProducts[i].auction[0] !== null) {
  //         this.arrayProducts[i].auction = (this.arrayProducts[i].auction.sort((a, b) => (b.price) - (a.price)))
  //         auction += this.arrayProducts[i].auction[0].price
  //         this.arrayProducts[i].auction.unshift({ userId: user.id, price: auction,username: user.username, time: this.convertTime(now) })
  //       }
  //     }
  //   }
  // }
  // getTineNow() {
  //   let date = new Date();
  //   let seconds = date.setDate(date.getDate() - 1)
  //   var days = Math.floor(seconds / (24 * 60 * 60));
  //   seconds -= days * (24 * 60 * 60);
  //   var hours = Math.floor(seconds / (60 * 60));
  //   seconds -= hours * (60 * 60);
  //   var minutes = Math.floor(seconds / (60));
  //   seconds -= minutes * (60);
  //   return ((0 < hours) ? (hours + " hour, ") : "") + ((0 < minutes) ? (minutes + " minutes and, ") : "") + ((0 < seconds) ? (seconds + " seconds, ") : "")

  // }

  // convertTime(str) {
  //   var date = new Date(str),
  //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  //     day = ("0" + date.getDate()).slice(-2),
  //     hour = ("0" + date.getHours()).slice(-2),
  //     min = ("0" + date.getMinutes()).slice(-2),
  //     sec = ("0" + date.getSeconds()).slice(-2);
  //   // return [date.getFullYear(), mnth, day, hour, min, sec].join(":");
  //   return [hour, min, sec].join(":");




}




