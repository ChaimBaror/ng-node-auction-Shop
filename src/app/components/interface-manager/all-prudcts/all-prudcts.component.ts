import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/model/products';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-prudcts',
  templateUrl: './all-prudcts.component.html',
  styleUrls: ['./all-prudcts.component.css']
})
export class AllPrudctsComponent implements OnInit {

  showcardproduct: boolean = false;

  @Input() prudcts: Observable<Products[]>;
  products$;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.products$=  this.productsService.all();
  }
  addPrudct() {
    this.showcardproduct = !this.showcardproduct

  }
  editproduct(id){
    this.router.navigate(['product', id]);

  }
  save(nameProduct) {
    const {id , ...result} = nameProduct

     result.timeEnd = Date.parse(result.timeEnd)

     if (result.timeEnd - Date.now() < 0) {
      result.isActive = false;
    }
    this.productsService.editProducts(result, id)

  }

  remove(id) {
    this.productsService.delete(id)
this.ngOnInit()  }
}
