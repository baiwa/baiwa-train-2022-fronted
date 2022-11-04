import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './page/addproduct/addproduct.component';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'product', component: ProductComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addproduct', component: AddproductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
