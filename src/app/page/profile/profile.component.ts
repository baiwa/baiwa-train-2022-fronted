import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any[] = []
  res: any[] = []

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }




  ngOnInit(): void {
    this.http.get('https://anapioficeandfire.com/api/characters/583').subscribe(response => {
      console.log(response);
      this.data.push(response);
      this.res = this.data[0].tvSeries
      console.log('res : ', this.res)

    });
  }
}
