import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './components/loging/loging.component';
import { SignOnComponent } from './components/loging/sign-on/sign-on.component';
import { HomeComponent } from './components/home/home.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  { path: 'loging', component: LogingComponent },
  { path: 'SignUn' , component: SignOnComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'UserPage' , component: UserPageComponent},
    { path:'' , component:LogingComponent},


  // { path: '', redirectTo: 'from', pathMatch: 'full' },
  // { path:'**' , component:LogingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
