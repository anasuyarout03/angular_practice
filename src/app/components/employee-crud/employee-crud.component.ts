import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent {

  employees=[
    {eId:101,name:'sanjay',sal:5000,gender:'male'},
    {eId:102,name:'geeta',sal:8000,gender:'female'},
    {eId:103,name:'sameer',sal:7000,gender:'female'},
    {eId:104,name:'sita',sal:9000,gender:'female'}
  ];

  deleteEmp(ind:number){
    // this.employees.splice(ind,1);               //simple delete functionality
    const isConfirmed = confirm('Are You Sure!! You want to delete?');                   //confirmation box
    if(isConfirmed){
      this.employees.splice(ind,1);
    }
  }

  selectedEmployee: any = {};
  display: any;

  viewEmp(emp: any){
        this.selectedEmployee = emp;
        this.openModalDialog();
  }

  openModalDialog() {
    this.display = 'block';          //set block css
  }
  closeModalDialog() {
    this.display = 'none';           //set none css after close dialog
  }

  addEmp(eId: any,name: any,sal: any,gender: any){
    if(eId && name && sal && gender){
      let newEmp = {eId,name,sal,gender};
      this.employees.push(newEmp);
    } else {
      alert('Please fill the form');
    }
  }
}
