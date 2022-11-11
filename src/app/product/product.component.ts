import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface MyProduct {
  brand: string;
  typeProduct: string;
  taste: string;
  weight: number;
  price: number;
  id: number;
}
// const ProjectList = [
//   {
//     name: "ยำยำจัมโบ้",
//     type: "ซอง",
//     taste: "เค็ม",
//     amount: "100 g",
//     price: 10,
//   },
//   {
//     name: "ไวไว",
//     type: "ซอง",
//     taste: "หวาน",
//     amount: "125 g",
//     price: 6,
//   },
//   {
//     name: "นิสชิน",
//     type: "ซอง",
//     taste: "เปรี้ยว",
//     amount: "150 g",
//     price: 10,
//   },
//   {
//     name: "มาม่า",
//     type: "ซอง",
//     taste: "เผ็ด",
//     amount: "100 g",
//     price: 6,
//   },
//   {
//     name: "นิสชิน",
//     type: "ซอง",
//     taste: "เปรี้ยว",
//     amount: "150 g",
//     price: 10,
//   }]



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  [x: string]: any;
  list: any[] = [];

  formsearch: MyProduct = {
    brand: '',
    typeProduct: '',
    taste: '',
    weight: 0,
    price: 0,
    id: 0,
  }

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.search();
    // this.http.get('http://localhost:8080/baiwa-system-api/api/product-nui/get-all').subscribe((response: any) => {

    //   console.log(response);
    //   if (response.data.length > 0) {
    //     const result: any[] = [];

    //     response.data.forEach((data: any) => {
    //       let typeProduct: string = '';

    //       switch (data.typeProduct) {
    //         case '001':
    //           typeProduct = 'ซอง';
    //           break;
    //         case '002':
    //           typeProduct = 'ถ้วย';
    //           break;
    //         default:
    //           typeProduct = 'ไม่ระบุ';
    //           break;
    //       }
    //       result.push({
    //         ...data,
    //         typeProduct
    //       })
    //     });

    //     this.list = result;
    //   }

    // });
  }

  gotoAddproduct(goto: string, id : number) {
    this.router.navigate(['/addproduct'], {
      queryParams: {
        status: goto,
        id: id,
        // id: 0
        // seq_layer: 0

      }
    });
  }

  // delete(i: number) {
  //   this.list.splice(i, 1);
  // }

  search() {
    if (this.formsearch.weight == null) {
      this.formsearch.weight = 0;
    }
    if (this.formsearch.price == null) {
      this.formsearch.price = 0;
    }
    this.list = [];
    this.http.post('http://localhost:8080/baiwa-system-api/api/product-nui/getListDataAll', this.formsearch).subscribe((response: any) => {
      if (response.data.length > 0) {
        const result: any[] = [];

        response.data.forEach((data: any) => {
          let typeProduct: string = '';

          switch (data.typeProduct) {
            case '001':
              typeProduct = 'ซอง';
              break;
            case '002':
              typeProduct = 'ถ้วย';
              break;
            default:
              typeProduct = 'ไม่ระบุ';
              break;
          }
          result.push({
            ...data,
            typeProduct
          })
        });

        this.list = result;
      }

    });

  }

  delete(id: number) {
    this.formsearch.id = id;
    this.http.post('http://localhost:8080/baiwa-system-api/api/product-nui/delete', this.formsearch).subscribe((response: any) => {
      this.search();
    });

  }
  
  formatMoney(price : number){
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
}
