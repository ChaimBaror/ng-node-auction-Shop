import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {


  constructor(private fb: FormBuilder, private product: ProductsService) { }
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
    const product = this.cardfrom.value
    product.tineEnd = Date.parse(product.tineEnd);
    const now = product.tineEnd - Date.now()
    if (now < 0) {
      product.isActive = false;
    }
    else {
      product.isActive = true;
    }
    console.log(now, product.isActive);

    console.log(product);
    this.product.addproduct(product)

  }


}
