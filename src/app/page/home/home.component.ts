import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface MyData {
  name: string;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  data : any[] = []
  res : any
  form: MyData = {
    name: '',
    age: 0
  }

  listData: MyData[] = [];

  list = [
    {
      name: "ต้น",
      image: "assets/img/1.jpg",
      positon: "Creative Desinger",
      url: "http://49.0.80.15:6564/baiwa-train-2022-fronted-tonz/"
    },
    {
      name: "ไก่โต้ง",
      image: "assets/img/2.jpg",
      url: "http://49.0.80.15:6564/baiwa-train-2022-fronted-kaitong/"
    },
    {
      name: "เนซ่า",
      image: "assets/img/3.jpg",
      positon: "Creative Desinger",
      url: "http://49.0.80.15:6564/baiwa-train-2022-fronted-NayZa/"
    },
    {
      name: "โอปอ",
      image: "assets/img/4.png",
      positon: "Creative Desinger",
      url: "http://49.0.80.15:6564/baiwa-train-2022-fronted-opor/"
    },
    {
      name: "เน",
      image: "assets/img/5.jpg",
      positon: "Creative Desinger",
      url: "http://49.0.80.15:6564/baiwa-train-2022-fronted-Nay/"
    },
    {
      name: "หนุ่ย",
      image: "assets/img/6.jpg",
      positon: "Creative Desinger",
      url: "http://49.0.80.15:6564/baiwa-train-2022-fronted-nui/"
    }
  ]

  name: string = "frame";
  name1: any;
  count: number = 0;
  isShow: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
  this.http.get('https://anapioficeandfire.com/api/characters/583').subscribe(response => {
  this.data.push(response);
  this.res = this.data[0]
  console.log('res : ',response);
  });

  }

  openTab(data: any) {
    return window.open(data);
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
  // this.data.push(response)
  // this.res = this.data[0].aliases;
  // console.log('res :' , this.res);
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
