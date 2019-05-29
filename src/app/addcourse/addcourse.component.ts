import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  addForm:FormGroup;
  course:any;
  submitted=false;
  constructor(private formBuilder: FormBuilder, private router: Router, private courseService: CourseService) { }

  ngOnInit() {
  this.addForm=this.formBuilder.group({
id:['',Validators.required],
courseName:[null,Validators.required],
courseDuration:[null,Validators.required],
courseEligibility:[null,Validators.required],
courseFee:['',Validators.required],
  });
}



  onSubmit(){
    this.submitted=true;
    if(this.addForm.invalid)
    {
      return;
    }
this.courseService.createCourse(this.addForm.value).subscribe(data=>{
console.log(this.addForm.value);
this.router.navigate(['course']);
});
  }

  

}
