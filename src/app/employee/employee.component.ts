import { Component, OnInit } from '@angular/core';
import{EMPLOYEES} from '../employee.mock'
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
id:number;
   constructor(private route:ActivatedRoute) { }

/*
  employee={
    id:100,
    name:'anitha',
    address:'calicut',
    age:34
  };*/
  emp=EMPLOYEES;

  ngOnInit() {
 
    this.route.params.subscribe(
      
      (params:Params)=>{
        
        this.id=+params['id'];
      
     
      });
      
     
  }

}
