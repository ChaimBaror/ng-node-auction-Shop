import { Component, ViewChild, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() product :Products;

  image: string
  name: string;
  message: string;
  price;
  button1;
  button2;
  button3;

  ngOnInit(): void {
   if (this.product){
    this.name = this.product.nameProduct;
    this.image = this.product.image;
    this.message = this.product.message;
    this.price = this.product.price;
    this.button1 = "SHOW";
    this.button2 = 'ADD';
    this.button3 = 'PUSH';
   }
   else{
    this.name = 'APPLE';
    this.image = "assets/Apple_.png";
    this.message = "There are more than 7,500 known cultivars of apples. Cultivars vary in their yield and the ultimate size of the tree, even when grown on the same rootstock"
    this.price = "$50"
    this.button1 = "Pink Lady";
    this.button2 = 'Granny Smith';
    this.button3 = 'McIntosh';
   }
  }

  

  pageId(id) {
    console.log("pageId", id);
    this.productsSer.getproductById(id)

  }


  constructor(private renderer: Renderer2, private productsSer: ProductsService) {
  }

  @Input() num: number;
  selectedItem = 0;
  //Movement Animation to happen
  @ViewChild('card') card: ElementRef;
  // //Items
  @ViewChild('title') title: ElementRef;

  @ViewChild('PopoImg') PopoImg: ElementRef;

  @ViewChild('purchase') purchase: ElementRef;

  @ViewChild('info') description: ElementRef;

  @ViewChild('sizes') sizes: ElementRef;


  //Moving Animation Event

  onMouseMove(e) {
    console.log(e);

    console.log(this.card);

    let xAxis = (window.screen.width / 2 - e.screenX) / 25;
    let yAxis = (window.screen.height / 2 - e.screenY) / 25;
    console.log(yAxis, xAxis);
    this.renderer.setStyle(this.card.nativeElement, 'transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`)

  }


  mouseenter() {

    this.renderer.setStyle(this.card.nativeElement, 'transform', `none`)

    //Popout
    this.renderer.setStyle(this.title.nativeElement, 'transform', `translateZ(150px)`)
    this.renderer.setStyle(this.PopoImg.nativeElement, 'transform', `translateZ(200px) rotateZ(-45deg)`)
    this.renderer.setStyle(this.description.nativeElement, 'transform', `translateZ(125px)`)
    this.renderer.setStyle(this.sizes.nativeElement, 'transform', `translateZ(100px)`)
    this.renderer.setStyle(this.purchase.nativeElement, 'transform', `translateZ(75px)`)
  }
  //Animate Out
  mouseleave() {
    this.renderer.setStyle(this.card.nativeElement, 'transform', `all 0.5s ease`)
    this.renderer.setStyle(this.card.nativeElement, 'transform', `rotateY(0deg) rotateX(0deg)`)

    //Popback
    this.renderer.setStyle(this.title.nativeElement, 'transform', `translateZ(0px)`)
    this.renderer.setStyle(this.PopoImg.nativeElement, 'transform', `translateZ(0px) rotateZ(0deg)`)
    this.renderer.setStyle(this.description.nativeElement, 'transform', `translateZ(0px)`)
    this.renderer.setStyle(this.sizes.nativeElement, 'transform', `translateZ(0px)`)
    this.renderer.setStyle(this.purchase.nativeElement, 'transform', `translateZ(0px)`)
  }

}
