import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  list = [
    {
      name: "นาย A",
      age: 10
    },
    {
      name: "นาย B",
      age: 12
    },
    {
      name: "นาย C",
      age: 13
    },
    {
      name: "นาย D",
      age: 14
    },
    {
      name: "นาย F",
      age: 15
    }
  ]

}
