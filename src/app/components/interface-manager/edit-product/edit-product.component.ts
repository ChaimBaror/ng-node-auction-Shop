import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product$:Observable<Products>;

  image
  name = {
    category: '',
    nameProduct: '',
    message: '',
    tineEnd: '',
    price: '',
    image: 'https://raw.githubusercontent.com/ChaimBaror/ng-node-auction-Shop/main/src/assets/Apple_.png',
  };

  constructor(private router: Router,

    private activeRoute: ActivatedRoute, private productsService: ProductsService, ) { }

  ngOnInit(): void {
    this.product$ = this.productsService.getById(this.activeRoute.snapshot.params.id);

  }
  onUpload(e) {
    console.log("e",e);
    let image = e.files[0] ;
    let fileReader = new FileReader() ;
    fileReader.onload = e => {
      this.image = image ;
      console.log("this.image ",this.image);
    }  
    fileReader.readAsDataURL(image) ;
    // let formData = new FormData()
    // formData.append('image', image );
  }

  onSubmit(f: NgForm, id: any) {
    f.value.name.timeEnd = Date.parse(f.value.name.timeEnd)
    if (f.value.name.timeEnd - Date.now() < 0) {
      f.value.name.isActive = false;
    }
    this.productsService.uploadImage(this.image,id)
    this.productsService.editProducts(f.value.name, id)
    this.router.navigate(['AllPrudcts']);
    // console.log(f.value.name.tineEnd);
    // this.name = f.value
    // console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    // console.log(f.valid);  // true
    // console.log(JSON.stringify(f.value))

  }
}
