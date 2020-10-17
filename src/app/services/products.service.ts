import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export interface Products {
  id: string;
  image: string;
  nameProduct: string;
  message: string;
  price: number;

}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  arrayProducts: Products[] = [];
  pageProducts:Products;
  constructor(private _router: Router) {

    this.arrayProducts = [
      { id: "10", image: "../assets/images/logo3.gif", nameProduct: "chaim bar-or 1 מכירה הפומבית", message: "chaim bar-or auction", price: 10 },
      { id: "11", image: "../assets/images/logo1.gif", nameProduct: "chaim bar-or 2", message: "chaim AvraTech 07", price: 24 },
      { id: "12", image: "../assets/images/logo5.png", nameProduct: "chaim bar-or 3", message: "chaim bar-or auction", price: 100 },
      { id: "13", image: "../assets/images/logo6.gif", nameProduct: "chaim bar-or 4 מכירה הפומבית", message: "chaim > AvraTech 07", price: 54 },
      { id: "14", image: "../assets/images/logo3.gif", nameProduct: "chaim bar-or 5", message: "chaim bar-or auction", price: 250 },
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

  getOneProducts() {
    return this.pageProducts;
  }
}