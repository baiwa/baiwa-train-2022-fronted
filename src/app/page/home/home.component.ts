import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface MyData {
  name: string;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  form: MyData = {
    name: '',
    age: 0
  }

  listData: MyData[] = [];

  name: string = "frame";
  name1: any;
  count: number = 0;
  isShow: boolean = false;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }

  gotoProduct() {
    this.router.navigate(['/product'], {
      queryParams: {
        status: "add",
        id: 0
        // seq_layer: 0

      }
    });
  }

  ngAfterViewInit() {
    // ...
  }

  save() {
    this.listData.push({
      name: this.form.name, age: this.form.age
    })
  }

  delete(index: number) {
    this.listData.splice(index, 1)
  }

  countNumberAdd() {
    this.count = this.count + 1
  }
  countNumberDe() {
    this.count = this.count - 1
    if (this.count < 0) {

      this.count = 0


    }
  }
  changeName(name: string) {
    this.name = name
  }

}
