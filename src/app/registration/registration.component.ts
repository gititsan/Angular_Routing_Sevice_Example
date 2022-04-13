import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent   {
  msg!:string;
  studentForm!: FormGroup;
  isError:Boolean=false;
  firstName!:string;
  lastName!:string;
  email!:string;
  password!:string;
  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    if (this.studentForm.valid) {
      this.msg='You are Successfully Registered!'
      this.isError=true;
      this.firstName=this.studentForm.controls['firstName'].value
      this.lastName=this.studentForm.controls['lastName'].value
      this.email=this.studentForm.controls['email'].value
      this.password=this.studentForm.controls['password'].value
      console.log(this.studentForm.value)
    } else {
      this.msg='There is an Error in The Data Submitted '
      this.isError=false;
    }
  }
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
