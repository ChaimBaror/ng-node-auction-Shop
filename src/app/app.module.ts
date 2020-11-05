import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogingComponent } from './components/loging/loging.component';
import { AppRoutingModule } from './app-routing.module';
import { SignOnComponent } from './components/loging/sign-on/sign-on.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PageProductsComponent } from './components/page-products/page-products.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CategoryComponent } from './components/category/category.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogingComponent,
    SignOnComponent,
    HomeComponent,
    FooterComponent,
    UserPageComponent,
    PageProductsComponent,
    SpinnerComponent,
    CategoryComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
