import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Products, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryProduct: Products[] = []
  myProducts : Products[] = []
  arrayProducts: Products[] = []
  categories

  products$
  keyword: string
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.myProducts = this.productsService.getProducts();
    this.allcategories()
  }
  allcategories(){
    this.productsService.all().subscribe((products: Products) =>{
      this.categories = products
      this.categories=this.categories.filter((obj, index, self) => self.findIndex((o) => { return o.category === obj.category; }) === index);
    console.log("categories ", this.categories);
    
      return  this.categories.category
    })
    // this.categories = this.allProducts.filter((obj, index, self) => self.findIndex((o) => { return o.category === obj.category; }) === index);
    // console.log("categories service",this.categories);
  

  }
  selectscategory(category){
    this.router.navigate(['home', category]);
  }

  selectcategory(select) {
    this.myProducts = []
    switch (select) {
      case 'category1':
        // this.myProducts = this.productsService.getCategory('frout'); 
           this.router.navigate(['home', 'frout']);
        console.log(this.myProducts);
        break;
      case 'category2':
        this.router.navigate(['home', 'B']);
        // this.myProducts = this.productsService.getCategory('B');
        console.log(this.myProducts);
        break;

      case 'api':
        this.productsService.all().subscribe(data => {
          this.products$ = data
          this.myProducts = this.products$
          console.log("this myProducts", this.myProducts);
        });
        break;
    }

  }


  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
console.log( this.keyword);

    if (this.keyword && this.keyword.length > 0) {

      return this.myProducts.filter(function (el: any) {
        this.myProducts = Object.keys(el).map(key => el[key]);
        let result = false;
        for (var i in this.myProducts) {
          result = this.myProducts != null && this.myProducts[i] != null && this.myProducts[i] != undefined && this.myProducts[i].toLowerCase().indexOf(this.keyword) > -1;
          if (result) {
            return true
          }
        }
        return false;
      })
    }
    console.log(this.myProducts);
    
    return this.myProducts;
  }


}
