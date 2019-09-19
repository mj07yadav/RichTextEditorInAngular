import { Component, ViewChild, OnInit, ViewContainerRef, ElementRef } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Subscription } from 'rxjs/internal/Subscription';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{

  ngOnInit(): void {

  }

}
