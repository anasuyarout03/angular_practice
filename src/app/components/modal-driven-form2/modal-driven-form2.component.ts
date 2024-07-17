import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-driven-form2',
  templateUrl: './modal-driven-form2.component.html',
  styleUrls: ['./modal-driven-form2.component.css']
})
export class ModalDrivenForm2Component {
  empForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      employees: this.formBuilder.array([]),      //form array
    });
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;        //form array
  }

  newEmployee(): FormGroup {
    return this.formBuilder.group({              //form object
      firstName: '',
      lastName: '',
      skills: this.formBuilder.array([]),           //form array
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }
  
  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      exp: '',
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
