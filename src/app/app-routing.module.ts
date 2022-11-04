import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { ProductComponent } from './product/product.component';
import { Profile1Component } from './profile1/profile1.component';

const routes: Routes = [
  {path:'',component: Profile1Component},
  {path:'product',component: ProductComponent},
  {path:'addproduct',component: AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
