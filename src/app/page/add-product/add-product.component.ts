import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
//Ctrl. ดอท คีร์อิมพอดF

//เวลาเเก้ไขจะเเสดงให้เห็นเอ่อเร่อ เวลาเเก้
export interface Mydata {
  name: string;
  type: string;
  taste: string;
  amount: number;
  money: number;
  id: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {
  subscriptions$!: Subscription;
  text: string = '';
  form: Mydata = {
    name: '',
    money: 0,
    type: '',
    taste: '',
    amount: 0,
    id: 0,
  }

  listData: Mydata[] = [];
  name: String = '';
  name1: any;
  name2: number = 0;
  isShow: boolean = false;
  count: number = 0;
  detail: boolean = false;
  
  checkHeader(res: string) {
    if (res == 'add') {
      
      return 'เพิ่ม'
    }
    else if (res == 'edit') {
      
      return 'เเก้ไข'
    }
    // else if (res == 'sert') {
    //   return 'ค้นหา'
    // } 
    else {
      this.detail = true
    } return 'รายละเอียด'
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,

  ) {
  }

  //การปิด subscriptions
  ngOnDestroy(): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }
  ngOnInit() {
    this.checkHeader(this.route.snapshot.queryParams["status"])

    if (this.route.snapshot.queryParams['status'] == 'edit' || this.route.snapshot.queryParams['status'] == '') {
      this.getById(this.route.snapshot.queryParams['id'])
    }

    this.text = this.checkHeader(this.route.snapshot.queryParams["status"])


  }


  getById(id: number) {
    this.form.id = id;
    this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-NayZa/get-by-id', this.form).subscribe(
      (response: any) => {
        this.form = response.data;
      }
    );
  }

  save() {

    let url = 'save'
    if(this.route.snapshot.queryParams["status"] =='edit'){
      url='edit'
    }
    this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-NayZa/'+ url, this.form).subscribe(
      (response: any) => {

        if (response.status = '') {
          alert("กรูณากรอกข้อมูล !");
          return;
        }
        else if (response.status = 'SUCCESS') {
          alert("บันทึกข้อมูลเรียบร้อย !");
          this.router.navigate(['/product'])
        }
      }
    );
  }

  edit(id:number) {
    this.form.id=id;
    this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-NayZa/edit', this.form).subscribe(
      (response: any) => {

        if (response.status = '') {
          alert("กรูณากรอกข้อมูล !");
          return;
        }
        else if (response.status = 'SUCCESS') {
          alert("บันทึกข้อมูลเรียบร้อย !");
          this.router.navigate(['/product'])
        }
      }
    );
    this.form.name = '';
    this.form.type = '';
    this.form.taste = '';
    this.form.amount = 0;
    this.form.money = 0;
    // console.log(typeof this.form)
  }

 
}
