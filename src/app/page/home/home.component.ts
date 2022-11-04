import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface Mydata {
  name: string;
  type: string;
  taste: string;
  amount: number;
  money: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: Mydata = {
    name: '',
    money: 0 ,
    type: '',
    taste:'',
    amount:0,
    
  }
  listData:Mydata[]=[];
  name: String = '';
  name1: any;
  name2: number = 0;
  isShow: boolean = false;
  count: number = 0;


  constructor() {
  }

  ngOnInit() {
  }

  countNumer() {
    this.count += 1;
  }
  countNumerDecret() {
    this.count -= 1;
  }

  change(text: string) {
    if (text == 'add') {
      this.count += 1;
    }
    else if (text == 'del') {

      this.count -= 1;


    }

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
  change1() {
    if (this.count > 0) {
      this.count = this.count -= 1;
    }
  }

  deleteInfo(i: number) {
    this.listData.splice(i, 1);
  }

  editInfo(i: number) {
  


  }
  changName(name: string) {
    this.name = name;
  }
}
