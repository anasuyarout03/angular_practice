import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observabledemo2',
  templateUrl: './observabledemo2.component.html',
  styleUrls: ['./observabledemo2.component.css']
})
export class Observabledemo2Component implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.fun1();
    this.fetchStudents();
  }

  fun1(){
    let observable1 = new Observable(function (publisher) {
      publisher.next('Response-1');
      publisher.next('Response-2');
      publisher.next('Response-3');
      publisher.next('Response-4');
    });

    observable1.subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)},
      complete: () => {console.log('completed...')}
    })
  }

  fetchStudents(){
    let studentObservable = new Observable(function (publisher) {
      publisher.next(['anu','arti','apu']);
      publisher.next(['priti','pari','priya']);
      publisher.next(['sima','chinu','aru']);
      publisher.complete();
    });

    let students: any[] = [];
    studentObservable.subscribe({
      next: (response: any) => {
        console.log('partial data received',response);
        students.push(...response);
      },
      error: (err) => {console.log('Something went wrong',err)},
      complete: () => {console.log('All students data received...');console.log(students)}
    });
  }
}
