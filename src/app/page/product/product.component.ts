import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


export interface MyMama {
  name: string;
  type: string;
  taste: string;
  amount: number;
  money: number;
  id: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  subscriptions$!: Subscription;
  text: string = '';
  formSearch: MyMama = {
    name: '',
    type: '',
    taste: '',
    amount: 0,
    money: 0,
    id: 0,
  }
  list: any[] = [];
  listData: MyMama[] = [];
  count: number = 0;
  detail: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,

  ) {

  }
  ngOnInit(): void {
    // this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-NayZa/get-list-data-all', this.formSearch).subscribe(
    //   (response: any) => {

    //     console.log(response);
    //     if (response.data.length > 0) {
    //       const result: any[] = [];

    //       response.data.forEach((data: any) => {
    //         let typeProduct: string = '';

    //         switch (data.typeProduct) {
    //           case '001':
    //             typeProduct = 'ซอง';
    //             break;
    //           case '002':
    //             typeProduct = 'ถ้วย';
    //             break;
    //           default:
    //             typeProduct = 'ไม่ระบุ';
    //             break;
    //         }

    //         result.push({
    //           ...data,
    //           typeProduct
    //         })
    //       });

    //       this.list = result;
    //     }

    //   });

    this.searchAll();

  }

  searchAll() {

    this.list = [];
    this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-NayZa/get-list-data-all', this.formSearch).subscribe(
      (response: any) => {
        if (this.formSearch.amount == null) {
          this.formSearch.amount = 0;
        }
        if (this.formSearch.money == null) {
          this.formSearch.amount = 0;
        }
        console.log(response);
        if (response.data.length > 0) {
          const result: any[] = [];

          response.data.forEach((data: any) => {
            let type: string = '';
            let taste: string = '';

            switch (data.type) {
              case '001':
                type = 'ซอง';
                break;
              case '002':
                type = 'ถ้วย';
                break;
              default:
                type = 'ไม่ระบุ';
                break;
            }

            result.push({
              ...data,
              type
            })
          });

          this.list = result;
        }

      });

  }


  delete(id: number) {
    this.formSearch.id = id;
    this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-NayZa/delete-data', this.formSearch).subscribe(
      (response: any) => {
        // this.searchAll();

      }
    )
  }
  addProduct(res: string ,id :number) {
    this.router.navigate(['/addProduct'], {
      queryParams: {
        status: res,
        id:id,
      }
    });
  }

}