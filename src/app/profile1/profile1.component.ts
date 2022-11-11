import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface MyData {
  name: string;
  age: number;
}

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component implements OnInit {

  data : any[] = []
  res : any[] = []

  form: MyData = {
    name: '',
    age: 0,
  }

  listData: MyData[] = [];

  name: string = 'J-Jay';
  name1: any;
  count: number = 0;
  isShow: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get('https://anapioficeandfire.com/api/characters/583').subscribe(response => {
    this.data.push(response);
    this.res = this.data[0].tvSeries
    console.log('res :',this.res);
    });
  }

}
