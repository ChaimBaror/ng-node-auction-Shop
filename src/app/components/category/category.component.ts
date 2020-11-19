import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Products, ProductsService } from 'src/app/services/products.service';
import { Users } from 'src/app/services/Users';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryProduct: Products[] = []
  myProducts: Products[] = []
  arrayProducts: Products[] = []
  constructor(private productsSer: ProductsService, private api: ApiService) {}

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
        //  this.api.getUsersApi().subscribe(user=>{
        //   this.users.push(...user)
        //  });
         console.log(this);
         
        // this.myProducts = this.productsSer.getapi();
        break;
    }


  }





}
