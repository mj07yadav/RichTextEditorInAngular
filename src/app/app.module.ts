import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RuntimeComponentComponent } from './runtime-component/runtime-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AnotherruntimeComponent } from './anotherruntime/anotherruntime.component';
import { WebcamComponent } from './webcam/webcam.component';
import {WebcamModule} from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    RuntimeComponentComponent,
    AnotherruntimeComponent,
    WebcamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
