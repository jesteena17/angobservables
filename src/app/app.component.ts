import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainApp.This is my new application';
  name="niit";
 changeName()
 {
   this.name="niit calicut";
 }
}
