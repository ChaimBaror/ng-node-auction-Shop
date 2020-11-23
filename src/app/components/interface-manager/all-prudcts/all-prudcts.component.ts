import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-all-prudcts',
  templateUrl: './all-prudcts.component.html',
  styleUrls: ['./all-prudcts.component.css']
})
export class AllPrudctsComponent implements OnInit {
  @Input() prudcts: Products;

  constructor() { }

  ngOnInit(): void {
  }

}
