import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './page/product/product.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './page/add-product/add-product.component';




@NgModule({
  declarations: [
    AppComponent, ProfileComponent,ProductComponent  ,AddProductComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
