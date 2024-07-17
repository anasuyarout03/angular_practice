import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-observabledemo3',
  templateUrl: './observabledemo3.component.html',
  styleUrls: ['./observabledemo3.component.css']
})
export class Observabledemo3Component implements OnInit{
  myObservable1: any;

  ngOnInit(): void {
    this.arrayToObservable();
    this.intervalDemo();
  }

  arrayToObservable() {
    //convert array to observable
    let arr = [10,20,30,40,50];

    // let observable1 = of('tata','honda');
    let observable1 = from(arr);
    observable1.subscribe((res) => {console.log(res)});
  }

  intervalDemo() {
    this.myObservable1 = interval(1000);
    let mySubscription1 = this.myObservable1.subscribe((res: any) => {
      console.log(res);
    })

    setTimeout(() => {
      mySubscription1.unsubscribe()
    },5000);
  }
}
