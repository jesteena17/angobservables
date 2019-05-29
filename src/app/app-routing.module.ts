import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from './parent/parent.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { MyobservableComponent } from './myobservable/myobservable.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
    {path:'user',component:UserComponent},
    {path:'parent',component:ParentComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'employee/:id',component:EmployeeComponent},
    {path:'employee/:name',component:EmployeeComponent},
    {path:'observable',component:MyobservableComponent},
    {path:'angular-forms',component:AngularFormComponent},
    {path:'course',component:CourseComponent},
    {path:'add-course',component:AddcourseComponent},
    {path:'update-course',component:UpdateCourseComponent},
    {path:'**',redirectTo:''}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
