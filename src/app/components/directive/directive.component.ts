import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  a:number = 6;

  dayNumber:number = new Date().getDay();

  cities:string[] = ['MUMBAI','PUNE','DELHI','CHENNAI'];

  Employees=[
    {eId:101,name:'sanjay',sal:5000},
    {eId:104,name:'deepak',sal:8000},
    {eId:103,name:'sameer',sal:7000},
    {eId:102,name:'manoj',sal:9000},
  ];

  addEmployees(){
    this.Employees = [
    {eId:101,name:'sanjay',sal:5000},
    {eId:104,name:'deepak',sal:8000},
    {eId:103,name:'sameer',sal:7000},
    {eId:102,name:'manoj',sal:9000},
    {eId:106,name:'rajeev',sal:9000}
    ];
  }
  trackByEmpId(Employees:any){
    return Employees.eId;
  }

  myblue = {color:'blue'};
  myred = {color:'red'};

  charge:number = 78;
  getClass(){
    if(this.charge>=50){
      return 'high'
    } else if(this.charge>=20){
      return 'medium'
    } else {
      return 'low'
    }
  }
}
