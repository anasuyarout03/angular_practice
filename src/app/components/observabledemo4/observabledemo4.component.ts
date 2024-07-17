import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, forkJoin, map, mergeMap, of, range, tap, zip } from 'rxjs';

@Component({
  selector: 'app-observabledemo4',
  templateUrl: './observabledemo4.component.html',
  styleUrls: ['./observabledemo4.component.css']
})
export class Observabledemo4Component implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    // this.zipDemo();
    // this.pipeDemo();
    // this.tapDemo();
    // this.forkjoinDemo();
    // this.mergeMapDemo();
    this.concatMapDemo();
  }

  zipDemo() {
    let publisher1 = of(32, 31, 34);
    let publisher2 = of('sanjay', 'ranjan', 'bishnu');
    let publisher3 = of('bang', 'chennai', 'hyd');
    let finalPublisher = zip(publisher1, publisher2, publisher3).pipe(
      map(([age, name, add]) => ({ age, name, add }))
    );
    finalPublisher.subscribe((response) => console.log(response));
  }

  pipeDemo() {
    let publisher = range(1, 10);
    let square = publisher.pipe(map((ele) => ele * ele));
    publisher.subscribe((response) => console.log(response));
    square.subscribe((response) => console.log(response));
  }

  tapDemo() {
    let publisher4 = of(10, 20, 30);
    let publisher5 = publisher4.pipe(tap((ele) => console.log(ele + " is published")));
    publisher5.subscribe((response) => console.log(response));
  }

  forkjoinDemo() {
    let request1 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    let request2 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    let request3 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    /* forkJoin([request1,request2,request3]).subscribe(([res1,res2,res3]) => {
      console.log(res1,res2,res3);
    }); */

    //or

    forkJoin([request1, request2, request3]).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log('something went wrong', error)
    });
  }

  mergeMapDemo() {
    let usersPublisher = of(1, 2, 3, 4);
    let usersSubscriber2 = usersPublisher.pipe(
      mergeMap((user) => {
        const url = `https://jsonplaceholder.typicode.com/users/${user}`;
        return this.httpClient.get(url);        //inner observable
      })
    ).subscribe((userData) => {
      console.log(userData);
    });
  }

  concatMapDemo() {
    let usersPublisher = of(2,1,4,3);
    let usersSubscriber2 = usersPublisher.pipe(
      concatMap((user) => {
        const url = `https://jsonplaceholder.typicode.com/users/${user}`;
        return this.httpClient.get(url);        //inner observable will be resolved in a order
      })
    ).subscribe((userData) => {
      console.log(userData);
    });
  }
}
