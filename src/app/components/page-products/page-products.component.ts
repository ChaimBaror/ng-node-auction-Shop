import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
  
  pageProducts: Products
  constructor(private productsSer: ProductsService) { }

  ngOnInit(): void {
    this.pageProducts = this.productsSer.getOneProducts();
  }



}
