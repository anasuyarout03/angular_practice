import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo1',
  templateUrl: './subjectdemo1.component.html',
  styleUrls: ['./subjectdemo1.component.css']
})
export class Subjectdemo1Component {

  ngOnInit(): void {
    // this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }

  subjectDemo(){

    //ex-1:-
    /* let airtel = new Subject();
    airtel.next('299/month unlimited talktime 1GB/day');
    let Anu = airtel.subscribe((plan) => console.log('Anu' ,plan));        //399...,499...
    airtel.next('399/2 months unlimited talktime 1.5GB/day');
    let Sanjay = airtel.subscribe((plan) => console.log('Sanjay', plan));         //499....
    airtel.next('499/3 months unlimited talktime 2GB/day'); */

    //ex-2:-
    let car_publisher = new Subject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => console.log('Subscriber1',car));      //honda,toyota,maruti
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => console.log('Subscriber2',car));       //toyota,maruti
    car_publisher.next('Toyota');
    car_publisher.next('Maruti');

  }

  behaviourSubjectDemo() {
    let car_publisher = new BehaviorSubject('Initial Car');
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => console.log('Subscriber1',car));          //tata,honda,maruti,toyota
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => console.log('Subscriber2',car));           //honda,toyota,maruti
    car_publisher.next('Toyota');
    car_publisher.next('Maruti');
  }

  replaySubjectDemo() {
    let car_publisher = new ReplaySubject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => console.log('Subscriber1',car));           //tata,honda,toyota,maruti
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => console.log('Subscriber2',car));             //tata,honda,toyota,maruti
    car_publisher.next('Toyota');
    car_publisher.next('Maruti');
  }

  asyncSubjectDemo() {
    let car_publisher = new AsyncSubject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => console.log('Subscriber1',car));        //maruti
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => console.log('Subscriber2',car));         //maruti
    car_publisher.next('Toyota');
    car_publisher.next('Maruti');
    car_publisher.complete();
  }
}
