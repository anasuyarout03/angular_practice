import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild1','f1'],
  outputs:['eventObj']
})
export class Child1Component {

  aChild1: any;

  f1: any;

  name: string = 'Sachin Tendulkar';

  eventObj = new EventEmitter();
  sendDataToParent(){
    this.eventObj.emit(this.name);
  }

  constructor() {
    console.log("Child constructor")
  }
  ngOnInit() {
    console.log("Child ngOnInit");
  }
  ngOnChanges() {
    console.log("Child ngOnChanges");
  }
  ngDoCheck() {
    console.log("Child ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("Child ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("Child ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("Child ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("Child ngOnDestroy");
  }

}
