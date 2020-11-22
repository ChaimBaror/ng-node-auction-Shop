import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {


  constructor(private fb: FormBuilder,private product : ProductsService) { }
  cardfrom = this.fb.group({
    nameProduct: [''],
    category: [''],
    message: [''],
    price: [''],
    tineEnd: [''],
    image: [''],
  })

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.cardfrom.value);
    this.product.addproduct(this.cardfrom.value)
    this.cardfrom.controls.Name.value,
      this.cardfrom.controls.category.value

  }



}
