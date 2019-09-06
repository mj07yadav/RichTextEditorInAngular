import { Component, ViewChild, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    // document.getElementById("doithere").innerHTML +=  this.elemnt;
  }

}
