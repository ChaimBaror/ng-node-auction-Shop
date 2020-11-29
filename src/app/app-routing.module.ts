import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './components/loging/loging.component';
import { SignOnComponent } from './components/loging/sign-on/sign-on.component';
import { HomeComponent } from './components/home/home.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PageProductsComponent } from './components/page-products/page-products.component';
import { CategoryComponent } from './components/category/category.component';
import { InterfaceManagerComponent } from './components/interface-manager/interface-manager.component';
import { UserComponent } from './components/interface-manager/user/user.component';
import { EditProductComponent } from './components/interface-manager/edit-product/edit-product.component';
import { AllPrudctsComponent } from './components/interface-manager/all-prudcts/all-prudcts.component';
import { AdminGuard } from './Guard/admin.guard';

const routes: Routes = [

  { path: 'loging', component: LogingComponent },
  { path: 'SignUn', component: SignOnComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Category', component: CategoryComponent },
  { path: 'UserPage', component: UserPageComponent },
  { path: 'pageProduct', component: PageProductsComponent },
  { path: 'interfaceManager', component: InterfaceManagerComponent ,canActivate: [AdminGuard] },
  // { path: 'users', component: InterfaceManagerComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'product/:id', component: EditProductComponent },
  { path: '', component: HomeComponent },
{ path: 'AllPrudcts', component: AllPrudctsComponent },

  { path: '', redirectTo: 'from', pathMatch: 'full' },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
