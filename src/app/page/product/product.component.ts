import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list = [
    {
      name: "มาม่า",
      type: "ถ้วย",
      taste: "หมูสับ",
      amount : "250g",
      price : "50"
    },
    {
      name: "ควิ๊ก",
      type: "ซอง",
      taste: "เผ็ด",
      amount : "235g",
      price : "70"
    },
    {
      name: "ยำยำ",
      type: "ถ้วย",
      taste: "แกงเขียวหวาน",
      amount : "300g",
      price : "60"
    },
    {
      name: "ซัมยัง",
      type: "ซอง",
      taste: "หมูสับ",
      amount : "325g",
      price : "55"
    },
    {
      name: "มาม่า",
      type: "ซอง",
      taste: "โคตรพริก",
      amount : "300g",
      price : "45"
    }
  ]

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  Delete(del : number){
    this.list.splice(del, 1);
  }

  gotoProfile() {
    this.router.navigate(['/profile'], {
      queryParams: {
        // status: "add",
        // id: 0
        // seq_layer: 0

      }
    });
  }
  gotoAddproduct() {
    this.router.navigate(['/addproduct'], {
      queryParams: {
        // status: "add",
        // id: 0
        // seq_layer: 0

      }
    });
  }
}
