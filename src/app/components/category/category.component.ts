import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Products, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryProduct: Products[] = []
  myProducts: Products[] = []
  arrayProducts: Products[] = []
  constructor(private productsSer: ProductsService, private api: ApiService) {
    //   this.arrayProducts = [
    //     { id: "20", image: "../assets/images/logo2.gif", nameProduct: "chaim bar-CategoryComponent 1 מכירה הפומבית", message: "CategoryComponentbar-or auction", price: 10, auction: [{ userId: '1', price: 10 }, { userId: '2', price: 25 }] },
    //     { id: "21", image: "../assets/images/wine-auction-inside.png", nameProduct: "CategoryComponent", message: "CategoryComponent AvraTech 07", price: 24, auction: [{ userId: '', price: 0 }] },
    //     { id: "22", image: "../assets/images/logo5.png", nameProduct: "CategoryComponent", message: "CategoryComponent auction", price: 100, auction: [{ userId: '', price: 0 }] },
    //     { id: "23", image: "../assets/images/logo2.gif", nameProduct: "CategoryComponentr 4 מכירה הפומבית", message: "CategoryComponent > AvraTech 07", price: 54, auction: [{ userId: '', price: 0 }] },
    //     { id: "24", image: "../assets/images/wine-auction-inside.png", nameProduct: "CategoryComponent 5", message: "chaim bar-or auction", price: 250, auction: [{ userId: '', price: 0 }] },
    //     { id: "25", image: "../assets/images/logo3.gif", nameProduct: "CategoryComponentמכירה פומבית 6", message: "CategoryComponent avraTech", price: 1, auction: [{ userId: '', price: 0 }] },
    //     { id: "26", image: "../assets/images/logo.png", nameProduct: "CategoryComponent 3 מכירה", message: "מכירה CategoryComponent", price: 100, auction: [{ userId: '', price: 0 }] },
    //     { id: "27", image: "../assets/images/wine-auction-inside.png", nameProduct: "CategoryComponent exit מכירה", message: "מכירה CategoryComponent ", price: 1, auction: [{ userId: '', price: 0 }] },

    //   ]
  }

  ngOnInit(): void {

  }

  selectcategory(select) {

    switch (select) {
      case 'category1':
        this.myProducts = this.productsSer.getSelected()
        break;
      case 'category2':
        this.myProducts = this.productsSer.getAllProducts();
        break;
      case 'api':
        this.myProducts = this.productsSer.getapi();
        break;
    }


  }





}
