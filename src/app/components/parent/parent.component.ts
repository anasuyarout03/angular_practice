import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  a:number = 10;
  newNum: any;

  f1(msg: string){
    console.log('I am f1 from parent component',msg);
  }

  myName: string = '';
  receiveDataFromChild(name: string){
    this.myName = name;
  }

  constructor() {
    console.log("Parent constructor")
    this.a = 10;
  }
  // ngOnInit() {
  //   console.log("Parent ngOnInit");
  // }
  // ngOnChanges() {
  //   console.log("Parent ngOnChanges");
  // }
  // ngDoCheck() {
  //   console.log("Parent ngDoCheck");
  // }
  // ngAfterContentInit() {
  //   console.log("Parent ngAfterContentInit");
  // }
  // ngAfterContentChecked() {
  //   console.log("Parent ngAfterContentChecked");
  // }
  ngAfterViewInit() {
    console.log("Parent ngAfterViewInit");
    console.log(this.newNum.nativeElement);
    this.newNum.nativeElement.focus();
  }
  // ngAfterViewChecked() {
  //   console.log("Parent ngAfterViewChecked");
  // }
  // ngOnDestroy() {
  //   console.log("Parent ngOnDestroy");
  // }

  arr : any = [10,20,30,40];
}
