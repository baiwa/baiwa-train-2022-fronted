import { Component, OnInit } from '@angular/core';


export interface Mydata {
  name: string;
  type: string;
  taste: string;
  amount: number;
  money: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form: Mydata = {
    name: '',
    money: 0 ,
    type: '',
    taste:'',
    amount:0,
    
  }
  listData:Mydata[]=[];
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  save() {
    if((this.form.name).trim()!=''&& this.form.money>0){
this.listData.push({
      name: this.form.name,
      money: this.form.money, 
      amount: this.form.amount, 
      type: this.form.type,
      taste: this.form.taste,
    })
    }
    this.form.name='';
    this.form.money=0;
    this.form.amount=0;
    this.form.type='';
    this.form.taste='';
    
  }
  // list = [
  //   {
  //     name: '',
  //     type: '',
  //     taste: '',
  //     amount: 0,
  //     money: 0,
  //   },
    // {
    //   name: "ไวไว",
    //   type: "ซอง",
    //   taste: "หวาน",
    //   amount: "125 g",
    //   money: 6,
    // },
    // {
    //   name: "นิสชิน",
    //   type: "ซอง",
    //   taste: "เปรี้ยว",
    //   amount: "150 g",
    //   money: 10,
    // },
    // {
    //   name: "มาม่า",
    //   type: "ซอง",
    //   taste: "เผ็ด",
    //   amount: "100 g",
    //   money: 6,
    // },
    // {
    //   name: "นิสชิน",
    //   type: "ซอง",
    //   taste: "เปรี้ยว",
    //   amount: "150 g",
    //   money: 10,
    // },
    // {
    //   name: "มาม่า",
    //   type: "ซอง",
    //   taste: "เผ็ด",
    //   amount: "100 g",
    //   money: 6,
    // },
    // {
    //   name: "นิสชิน",
    //   type: "ซอง",
    //   taste: "เปรี้ยว",
    //   amount: "150 g",
    //   money: 10,
    // },
    // {
    //   name: "มาม่า",
    //   type: "ซอง",
    //   taste: "เผ็ด",
    //   amount: "100 g",
    //   money: 6,
    // },
    // {
    //   name: "นิสชิน",
    //   type: "ซอง",
    //   taste: "เปรี้ยว",
    //   amount: "150 g",
    //   money: 10,
    // },
    // {
    //   name: "มาม่า",
    //   type: "ซอง",
    //   taste: "เผ็ด",
    //   amount: "100 g",
    //   money: 6,
    // }
  // ]
  delete(i: number){
    this.listData.splice(i, 1);
}
}