import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product$;

  name = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    img: '',
  };

  constructor(
    
    private activeRoute: ActivatedRoute,private productsService:ProductsService,) { }

  ngOnInit(): void {
    this.product$ = this.productsService.getById(this.activeRoute.snapshot.params.id);

  }



  onSubmit(f: NgForm,id:any) {
    console.log(id);
    
    this.name = f.value
    console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    console.log(f.valid);  // true
    console.log( JSON.stringify(f.value))

    this.productsService.editProducts(f.value.name,id)
  }
}
