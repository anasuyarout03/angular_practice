import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form2',
  templateUrl: './template-driven-form2.component.html',
  styleUrls: ['./template-driven-form2.component.css']
})
export class TemplateDrivenForm2Component {

  user = {firstName:'', lastName:'',email:''};
  submitForm(myForm: any){
    console.log(myForm);
  }
}
