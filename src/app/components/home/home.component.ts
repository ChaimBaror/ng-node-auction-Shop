import { Component, OnInit } from '@angular/core';
import { ProductsService, Products } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Products[] = []

  constructor(public productsSer : ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsSer.getAllProducts();
    
}}
