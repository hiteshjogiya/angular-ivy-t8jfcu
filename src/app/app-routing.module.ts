import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { ErrorNotFoundComponentComponent } from './error-not-found-component/error-not-found-component.component';
import { HomeComponent } from './home/home.component';
import { LiveapiComponent } from './liveapi/liveapi.component';
import { ReactivesignupComponent } from './reactivesignup/reactivesignup.component';
import { ResultComponent } from './result/result.component';
import { SelectstudentComponent } from './selectstudent/selectstudent.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"studentlist",component:StudentComponent},
  {path:"resultlist",component:ResultComponent},
  {path:"home",component:HomeComponent},
  {path:"selectstudent",component:SelectstudentComponent},
  {path:"selectstudent/:id",component:SelectstudentComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"api",component:LiveapiComponent},
  {path:"up" ,component:SignupComponent},
  {path:"rsign",component:ReactivesignupComponent},
  {path:"datatable",component:DatatableComponent},
  {path:"**",component:ErrorNotFoundComponentComponent}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
