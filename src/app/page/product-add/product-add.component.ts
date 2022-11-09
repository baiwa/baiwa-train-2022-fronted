import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

export interface MyData {
  brand: string;
  price?: number;
  total?: number;
}
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  textHead = 'รายการสินค้า'
  textButton = 'บันทึกข้อมูล'
  detail = false
  data : any =[]
  formSave : {} = {
    brand: '',
    price : 0,
    total: 0
  }
  form: MyData = {
    brand: '',
  }
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.http.get('localhost:9020/test-api/products/get-all').subscribe((response:any)  => {
    //   console.log('res : ',response);
    //   });
    // this.setText(this.route.snapshot.queryParams['status'])
    const {header,textButton} = this.checkHaeder(this.route.snapshot.queryParams['status']);
    this.textHead = header;
    this.textButton = textButton;
  }
appProduct(){
      this.http.post('http://localhost:8080/baiwa-system-api/api/product-frame/save',this.form).subscribe((response:any)  => {
      console.log('res : ',response);
      if(response.status == 'SUCCESS'){
        this.router.navigate(['product'], {});
      }
      });
}
  setText(data : string){
    if(data == 'add'){
      this.textHead = 'เพิ่มรายการสินค้า'
      this.textButton = 'เพิ่มข้อมูล'
    } else if (data == 'edit'){
      this.textHead = 'แก้ไขรายการสินค้า'
      this.textButton = 'แก้ไขข้อมูล'
    } else{
      this.detail = true
    }
  }

  checkHaeder(data : String): {header: string, textButton: string} {
    const result = {
      header: '',
      textButton: ''
    }
    if(data == 'add'){
      result.header = 'เพิ่มรายการสินค้า'
      result.textButton = 'เพิ่มข้อมูล'
    } else if (data == 'edit'){
      result.header = 'แก้ไขรายการสินค้า'
      result.textButton = 'แก้ไขข้อมูล'
    }else{
      this.detail = true
      result.header = 'รายการสินค้า'
      result.textButton = ''
    }
    return result;
  }

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

}
