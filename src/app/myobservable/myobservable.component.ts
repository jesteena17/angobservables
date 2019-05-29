import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-myobservable',
  templateUrl: './myobservable.component.html',
  styleUrls: ['./myobservable.component.css']
})
export class MyobservableComponent implements OnInit {
numberSubscription:Subscription;
myObservableSubscription:Subscription;
  constructor() { }

  ngOnInit() {
    
 const myNumbers=Observable.interval(1000);
myNumbers.subscribe((num:number)=>{
  console.log(num);
  
});

const myObservable=Observable.create(
  (observer:Observer<string>)=>{
  setTimeout(()=>{
    observer.next('myfirstobserver');},2000);
    setTimeout(()=>{
      observer.next('mysecondobserver');},4000);
      setTimeout(()=>{
        observer.next('error it will not work');},5000);
                setTimeout(()=>{
         observer.next('mythirdobserver work');
        observer.complete();
        },7000);
        setTimeout(()=>{
          observer.next('myfourthobserver');},6000);
           
       });
       
this.myObservableSubscription=myObservable.subscribe(
(data:string)=>{console.log(data);},
(error:string)=>{console.log(error);},
()=>{console.log("mysubscription completed");}
);
  }



  ngOnDestroy(){
   // this.numberSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }
}

