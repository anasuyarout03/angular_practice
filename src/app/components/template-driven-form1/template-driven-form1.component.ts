import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form1',
  templateUrl: './template-driven-form1.component.html',
  styleUrls: ['./template-driven-form1.component.css']
})
export class TemplateDrivenForm1Component {

  submitForm(FormData: any){
    console.log(FormData);
  }

  user = { firstName: 'Anasuya',lastName: 'Rout' };
  
  resetForm(myForm: any){
    myForm.resetForm();
  }
}
