import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
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
