import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {


  @Input() products;
  ngAfterViewInit(): void {

    if(this.products){
      this.itemsArray=this.products,
      this.indexItem()
    }
  }
  

  constructor() {
    this.itemsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
    
  }
  items = []
  itemsArray = []
  num = 0
  numOfPage = 6
 
  numberOfPage = [3,4,6,12,15,18 ];

  selectNum(num) {
    this.numOfPage=num
  }
  indexItem() {
    console.log(this.num);
    this.items = []
    for (let i = this.num; i < this.itemsArray.length; i++) {
      if (i < this.numOfPage + this.num) {
        this.items.push(this.itemsArray[i])
        continue
      }
      this.num = i
      break
    }
  }
  indexbeaend(){
    this.num-=(this.numOfPage*2)
    if (this.num<0){
      this.num=0
    }
    this.indexItem()
  }

}
