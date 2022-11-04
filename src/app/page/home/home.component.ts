import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

export interface MyData {
  name: String;
  age: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  form: MyData = {
    name: "",
    age: 0,
  };

  listData: MyData[] = [];

  name: String = "Kaitong";
  name1: any;
  number: number = 6;
  isShow: boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  save(){
    console.log(this.form.name);
    
    if(this.form.name.trim() == ""){
      return;
    }
    if(this.form.age <= 0){
      return;
    }
    this.listData.push({
      name: this.form.name,
      age : this.form.age
    })
    this.form.name = "";
    this.form.age = 0;
  }

  changName(name: String) {
    this.name = name;
  }

  changNumPlus(n1: String) {
    if (n1 == "Plus") {
      this.number = this.number + 1;
    } else {
      // this.number = this.number-1
      if (this.number > 0) {
        // this.number=0
        this.number = this.number - 1;
      }
    }
  }

  Delete(del : number){
    this.listData.splice(del, 1);
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

  gotoProduct() {
    this.router.navigate(['/product'], {
      queryParams: {
        // status: "add",
        // id: 0
        // seq_layer: 0

      }
    });
  }
}
