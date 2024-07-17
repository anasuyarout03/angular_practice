import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: ['div{color:green}'],
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DatabindingComponent {

  name:string = "sachin";

  img_url:string = "https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700438400&semt=ais"

  flag:boolean = false;

  f1(){
    alert("This is f1 function");
  }

  a:number = 100;
  b:number = 200;
  add(){
    alert(`Addition of ${this.a} and ${this.b} is ${this.a+this.b}`);
  }

  addition(a:any,b:any){
    alert(`sum of ${a} and ${b} is ${a+b}`);
  }

  toggleFlag(){
    this.flag = !this.flag;
  }

  msg:string = '';

  selectedState:string = 'Odisha';

  number1:number = 10;
  number2:number = 5;
  Add(){
    alert(`Addition of: ${this.number1} and ${this.number2} is ${this.number1 +this.number2}`);
  }
  Subtraction(){
    alert(`Subtraction of: ${this.number1} and ${this.number2} is ${this.number1 - this.number2}`);
  }
  Multiply(){
    alert(`Multiply of: ${this.number1} and ${this.number2} is ${this.number1 * this.number2}`);
  }

  Addition1(num1:any,num2:any){
    alert(+num1 + +num2);
  }
  Subtraction1(num1:any,num2:any){
    alert(num1 - num2);
  }

  test(mybox1:any){
    console.log(mybox1.id,mybox1.name,mybox1.placeholder);
  }
}
