import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
baseUrl='http://localhost:3000/courses';
  constructor(private http:HttpClient) { }
getCourses():Observable<Course[]>
{
  return this.http.get<Course[]>(this.baseUrl);
}
deleteCourse(cid:number){
return this.http.delete<Course>(this.baseUrl+'/'+cid);
}

createCourse(course:Course):Observable<Course>{
  return this.http.post<Course>(this.baseUrl,course);
}

getCourseById(id:number):Observable<Course>{
  return this.http.get<Course>(this.baseUrl+'/'+id);
}

updateCourse(course:Course):Observable<Course>{
  return this.http.put<Course>(this.baseUrl+'/'+course.id,course);
}

}
