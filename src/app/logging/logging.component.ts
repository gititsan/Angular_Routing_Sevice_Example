import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent {
  msg !:string;
  email = new FormControl('');
  pass = new FormControl('');
  isError:Boolean=false;
  logIn() {
    this.email.setValue(this.email.value);
    this.pass.setValue(this.pass.value);
    if (this.email.value=="test@gmail.com" && this.pass.value=="abc")
    {
      this.msg="You are Logged Successfully!"
      this.isError=true;
    }else {
      this.msg="Your Password or Email is Wrong ! Please Try Again!"
      this.isError=false;
    }
  }
}
