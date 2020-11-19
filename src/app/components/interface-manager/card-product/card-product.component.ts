import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {


    constructor(private fb: FormBuilder) { }
    cardfrom = this.fb.group({
      Name: [''],
      category: [''],
      message: [''],
      price: [''],
       time: [''],
      image: [''],
    })
  
    ngOnInit(): void {
    }
    onSubmit(){
      console.log(this.cardfrom.value);
      this.cardfrom.controls.Name.value, 
      this.cardfrom.controls.category.value
    }
  
  

}
