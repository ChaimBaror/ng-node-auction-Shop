import { Injectable } from '@angular/core';


export interface Products {
  id: string;
  image: string;
  nameProduct: string;
  message: string;

}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  arrayProducts: Products[]=[];
  constructor() { 

 this.arrayProducts = [
  { id: "10", image: "../assets/images/logo3.gif", nameProduct: "chaim bar-or 1 מכירה הפומבית", message: "chaim bar-or auction" },
  { id: "11", image: "../assets/images/logo1.gif", nameProduct: "chaim bar-or 2", message: "chaim AvraTech 07" },
  { id: "12", image: "../assets/images/logo5.png", nameProduct: "chaim bar-or 3", message: "chaim bar-or auction" },
  { id: "13", image: "../assets/images/logo6.gif", nameProduct: "chaim bar-or 4 מכירה הפומבית", message: "chaim > AvraTech 07" },
  { id: "14", image: "../assets/images/logo3.gif", nameProduct: "chaim bar-or 5", message: "chaim bar-or auction" },
]
  }


getAllProducts(){
  return this.arrayProducts;
}
}