import { Component } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-api',
  templateUrl: './emp-api.component.html',
  styleUrls: ['./emp-api.component.css']
})
export class EmpApiComponent {
  employees: any;
  
  constructor(private empService: EmpService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.empService.getAllEmployees().subscribe((response: any) => {
      this.employees = response;
    });
  }
  addEmp(id: any,firstName: any,lastName: any,sal: any,email: any){
    const newEmp = {id, firstName, lastName, sal, email};
    this.empService.addEmployee(newEmp).subscribe((response) => {
      this.getEmployees();
      Swal.fire('Employee added successfully!!');
    })
  }
  deleteEmp(id:any){
    const flag = confirm('Are you sure you want to delete?');
    if(flag) {
      this.empService.deleteEmployee(id).subscribe((response) => {
        Swal.fire('Great',`Employee ${id} deleted successfully!!`);
        this.getEmployees();
      })
    }
  }
}
