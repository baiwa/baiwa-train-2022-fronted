import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './page/add-product/add-product.component';
import { ProductComponent } from './page/product/product.component';
import { ProfileComponent } from './page/profile/profile.component';



const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'product', component: ProductComponent },

  
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
