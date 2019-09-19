import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebcamComponent } from './webcam/webcam.component';
import { RuntimeComponentComponent } from './runtime-component/runtime-component.component';


const routes: Routes = [{
  path:'webcam',
  component:WebcamComponent
},{
  path:'main',
  component:RuntimeComponentComponent
},{
  path:'',
redirectTo:'/main',
pathMatch:'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
