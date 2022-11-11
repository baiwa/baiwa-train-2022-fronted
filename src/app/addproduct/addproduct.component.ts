import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export interface MyProduct {
  brand: string;
  typeProduct: string;
  taste: string;
  weight: number;
  price: number;
  id: number;
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit, OnDestroy {
  subscriptions$!: Subscription;


  form: MyProduct = {
    brand: '',
    typeProduct: '001',
    taste: '',
    weight: 0,
    price: 0,
    id: 0,
  }
  statusUrl: String = '';

  textHeader: string = 'เพิ่มข้อมูล';
  details = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.queryParams['status']);
    this.textHeader = this.checkHeader(this.route.snapshot.queryParams['status']);
    this.statusUrl = this.route.snapshot.queryParams['status'];
    if (this.statusUrl == 'edit' ||
      this.statusUrl == 'details') {
      this.getById(this.route.snapshot.queryParams['id']);
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe();
    }
  }

  checkHeader(goto: string): string {
    if (goto == 'add') {
      console.log("add")
      return 'เพิ่มข้อมูล';
    }
    else if (goto == 'edit') {
      console.log("edit")
      return 'แก้ไข';
    }
    else {
      this.details = true
      console.log("details")
    }
    return 'รายละเอียด';
  }

  save() {
    let url = 'save';
    if (this.statusUrl == 'edit') {
      url = 'edit'
    }

    this.subscriptions$ = this.http.post('http://localhost:8080/baiwa-system-api/api/product-nui/' + url, this.form).subscribe((response: any) => {
      if (response.status == 'SUCCESS') {
        this.router.navigate(['/product']);
      }
      else if (response.status) {

      }
      console.log(response.status);
    });
    console.log(typeof this.form)
  }

  getById(id: number) {
    this.form.id = id;
    this.http.post('http://localhost:8080/baiwa-system-api/api/product-nui/getById', this.form).subscribe((response: any) => {
      this.form = response.data;

    });
  }
}

