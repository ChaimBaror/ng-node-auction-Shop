import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-not-found',
    template: `
      
  
     <h1>Not Found</h1>   404 - Page not found
      
  <img src="assets/images/404_art.jpg">
  <hr>

  
      
  You might want to go to the "{{ path }}" page
  
  <app-card ></app-card>

    `
  })
  export class NotFoundComponent implements OnInit {
    path: string;
  
    constructor(private route: Router) {}
  
    ngOnInit() {
     
    }
    ngAfterViewInit() {
        let self = this;
    setTimeout(function () {
        self.route.navigateByUrl('/home');
      }, 3000)
    }
  }