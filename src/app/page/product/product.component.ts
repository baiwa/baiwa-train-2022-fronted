import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

export interface Tab 
  {
    id?: number;
    brand?: string;
    price?: number;
    total?: number;
  
}
export interface MyData {
} 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  subscriptions$!: Subscription;
  data : any =[]
  form: Tab[] = [{
    id: 0,
    brand: '',
    price: 0,
    total: 0
  }]
  list = [
    {
      name: "MaMa",
      code: "001"
    },
    {
      name: "WaiWai",
      code: "002"
    },
    {
      name: "YumYum",
      code: "003"
    }
  ]
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
this.searchAll()

  }
  searchAll(){
    this.subscriptions$ = this.http.get('http://localhost:8080/baiwa-system-api/api/product-frame/get-all').subscribe((response:any)  => {
      console.log('res : ',response.data);
      this.form = response.data
      });
  }
  deleteProduct(id? : number){
    this.http.post('http://localhost:8080/baiwa-system-api/api/product-frame/delete',{id : id} ).subscribe((response:any)  => {
    console.log('res : ',response);
    if(response.status == 'SUCCESS'){
      this.searchAll()
    }
    });
}
  ngOnDestroy(): void {
    if (this.subscriptions$){ 
      this.subscriptions$.unsubscribe();
    }
  }

  gotoProduct() {
    this.router.navigate(['/add-product'], {
      queryParams: {
        status: "add"
      }
    });
  }
  editProduct() {
    this.router.navigate(['/add-product'], {
      queryParams: {
        status: "edit"
      }
    });
  }
  detailProduct() {
    this.router.navigate(['/add-product'], {
      queryParams: {
        status: "detail"
      }
    });
  }

  getDataName(brand?: string): string {
    return this.list.find(value => value.code === brand)?.name || '-'
  }

}
