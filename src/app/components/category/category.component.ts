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

   products$

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
  }

  selectcategory(select) {
    this.myProducts = []
    switch (select) {
      case 'category1':
        this.myProducts = this.productsService.getSelected()
        break;
      case 'category2':
        this.myProducts = this.productsService.getAllProducts();
        break;
      case 'api':
         this.productsService.all().subscribe(data =>{
           this.products$ =data});
         console.log(this.products$);
         this.myProducts=this.products$
        // this.myProducts = this.productsSer.getapi();
        console.log("this myProducts", this.myProducts);
        
        break;
    }


  }





}
