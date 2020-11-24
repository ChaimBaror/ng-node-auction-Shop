import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './interface-manager.component.html',
  styleUrls: ['./interface-manager.component.css']
})
export class InterfaceManagerComponent implements OnInit {
  showcardproduct: boolean = false;
  showAlldproduct: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  selectcategory(select) {
    switch (select) {
      case 'products':
        this.showcardproduct = !this.showcardproduct
        break;
      case 'allproducts':
        this.showAlldproduct = !this.showAlldproduct
        break;
      case 'user':
        this.showAlldproduct = !this.showAlldproduct
        break;
    }
  }

}
