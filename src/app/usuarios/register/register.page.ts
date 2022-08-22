import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterPageForm } from "./form/register.page.form";



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: RegisterPageForm;
  constructor(private formBuilder: FormBuilder) {}

  showPassword = false;
  passwordToggleIcon = 'eye';

  ngOnInit() {
    this.createForm();
  }

  private createForm(){
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }
  

  togglePassword():void {
    this.showPassword = !this.showPassword;
    if(this.passwordToggleIcon == 'eye' ){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
  }
   
//Mostrar e ocultar contra
}
