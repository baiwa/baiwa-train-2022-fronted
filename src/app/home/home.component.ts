import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MyData{
  name: string;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: MyData = {
    name : '',
    age: 0,
  }

  listData: MyData[] = [];

  name: string = 'J-Jay';
  name1: any;
  count: number = 0;
  isShow: boolean = false;
  

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  delete(i : number){
      this.listData.splice(i, 1);
  }

  save(){
    if(this.form.name.trim()=='')
    {
      return;
    }
    else if(this.form.age<=0)
    {
      return;
    }
    this.listData.push({
      name: this.form.name,
      age: this.form.age
    })
    this.form.name = '';
    this.form.age = 0;
  }

  changeName(name : string) {
    this.name  = name;
  }

  countCal(num : string){
    if(num == 'add'){
      this.count += 1;
    }
    else if(num == 'delete')
    {
      this.count -= 1;

      if(this.count<0){
        this.count = 0;
      }
    }
    
  }

  

}
