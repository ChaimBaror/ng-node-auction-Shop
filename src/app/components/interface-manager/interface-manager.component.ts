import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/services/Users';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Products, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-manager',
  templateUrl: './interface-manager.component.html',
  styleUrls: ['./interface-manager.component.css']
})
export class InterfaceManagerComponent implements OnInit {
  products: Products
  product$
  users$;
  showcardproduct: boolean = false
  constructor(private usersService: UsersService, private productsService: ProductsService
    , private router: Router
  ) { }

  ngOnInit(): void {

  }
  selectcategory(select) {
    switch (select) {
      case 'products':
        this.showcardproduct = !this.showcardproduct
        break;
      case 'allproducts':
        this.product$ = this.productsService.all();
        console.log("chaim");
        
        break;
      case 'user':
        this.users$ = this.usersService.all();
        console.log(this.users$);
        break;
    }
  }
  showDetails(id) {
    console.log(id);
    this.router.navigate(['users', id]);

  }
  delete(id) {
    this.usersService.delete(id)
  }

}
