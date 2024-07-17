import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-driven-form',
  templateUrl: './modal-driven-form.component.html',
  styleUrls: ['./modal-driven-form.component.css']
})
export class ModalDrivenFormComponent {

  registerForm: any;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void{
    // this.initializeMyForm();
    this.initializeMyFormUsingFormBuilder();
  }

  initializeMyForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('sachin',[
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl(),
      email: new FormControl('anasuyarout3@gmail.com',[
        Validators.required,
        Validators.email
      ]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl(123456,[
          Validators.required,
          Validators.pattern('[0-9]{6}')
        ]),
      }),
    });
  }

  submitMyForm(form: any){
    console.log(form);
  }

  /* using formbuilder */
  initializeMyFormUsingFormBuilder(){
    this.registerForm = this.formBuilder.group(
      {
        firstName: new FormControl('sachin',[
          Validators.required,
          Validators.minLength(5),
        ]),
        lastName: new FormControl(),
        email: new FormControl('anasuyarout3@gmail.com',[
          Validators.required,
          Validators.email
        ]),
        address: new FormGroup({
          street: new FormControl(),
          city: new FormControl(),
          pin: new FormControl(123456,[
            Validators.required,
            Validators.pattern('[0-9]{6}')
          ]),
        }),
      }
    )
  }

  // validate a form on change/blur/submit
  /* initializeMyFormUsingFormBuilder(){
    this.registerForm = this.formBuilder.group(
      {
        firstName: new FormControl('sachin',[
            Validators.required,
            Validators.minLength(5),
          ]),
        lastName: new FormControl(),
        email: new FormControl('anasuyarout3@gmail.com',[
          Validators.required,
          Validators.email
        ]),
        address: new FormGroup({
          street: new FormControl(),
          city: new FormControl(),
          pin: new FormControl(123456,[
            Validators.required,
            Validators.pattern('[0-9]{6}')
          ]),
        }),
      },
      {updateOn: 'blur'}
    )
  } */
}
