import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MyobservableComponent } from './myobservable/myobservable.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    UserComponent,
    MyobservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
